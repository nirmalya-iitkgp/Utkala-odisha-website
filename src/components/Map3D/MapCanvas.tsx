import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { HeritagePlace } from '../../data/placesGeoData';
import { TourStop } from '../../data/toursData';
import { createOdishaTerrain } from './terrainMesh';
import { createOceanMesh } from './oceanMesh';
import { createDistrictLines } from './districtLines';
import { createStateBoundaryLine } from './stateBoundaryLine';
import { createPinsManager } from './pinsManager';
import { CameraChoreographer } from './cameraController';

export interface MapCanvasProps {
  onSelectPlace: (place: HeritagePlace) => void;
  selectedPlace: HeritagePlace | null;
  activeCategories: Set<string>;
  showDistricts: boolean;
  activeTourStop: TourStop | null;
  resetViewTrigger: number;
}

export default function MapCanvas({
  onSelectPlace,
  selectedPlace,
  activeCategories,
  showDistricts,
  activeTourStop,
  resetViewTrigger,
}: MapCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const choreographerRef = useRef<CameraChoreographer | null>(null);
  const pinsManagerRef = useRef<ReturnType<typeof createPinsManager> | null>(null);
  const districtLinesRef = useRef<ReturnType<typeof createDistrictLines> | null>(null);
  const [hoveredPlace, setHoveredPlace] = useState<HeritagePlace | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // Synchronize pin selection with choreographer
  useEffect(() => {
    if (selectedPlace && choreographerRef.current) {
      choreographerRef.current.flyToPlace(selectedPlace.lat, selectedPlace.lng);
      pinsManagerRef.current?.setSelectedPlace(selectedPlace.id);
    } else {
      pinsManagerRef.current?.setSelectedPlace(null);
    }
  }, [selectedPlace]);

  // Synchronize active tour stop
  useEffect(() => {
    if (activeTourStop && choreographerRef.current) {
      choreographerRef.current.flyToTourStop(activeTourStop);
      pinsManagerRef.current?.setSelectedPlace(activeTourStop.placeId);
    }
  }, [activeTourStop]);

  // Synchronize category filters
  useEffect(() => {
    pinsManagerRef.current?.updateFilters(activeCategories);
  }, [activeCategories]);

  // Synchronize district lines toggle
  useEffect(() => {
    districtLinesRef.current?.setVisible(showDistricts);
  }, [showDistricts]);

  // Handle overview reset
  useEffect(() => {
    if (resetViewTrigger > 0 && choreographerRef.current) {
      choreographerRef.current.resetToOverview();
      pinsManagerRef.current?.setSelectedPlace(null);
    }
  }, [resetViewTrigger]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Test WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070e17'); // Deep night-sky blue background
    scene.fog = new THREE.FogExp2('#070e17', 0.0075);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.5,
      600
    );
    const choreographer = new CameraChoreographer(camera);
    choreographerRef.current = choreographer;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Lighting setup: Warm golden tropical sunlight
    const ambientLight = new THREE.AmbientLight('#a5b4fc', 0.55);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight('#fed7aa', '#0f172a', 0.65);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight('#fff7ed', 1.85);
    sunLight.position.set(45, 65, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 160;
    sunLight.shadow.camera.left = -50;
    sunLight.shadow.camera.right = 50;
    sunLight.shadow.camera.top = 50;
    sunLight.shadow.camera.bottom = -50;
    scene.add(sunLight);

    // 5. Mount Map Components
    const terrain = createOdishaTerrain();
    scene.add(terrain);

    const { mesh: ocean, update: updateOcean } = createOceanMesh();
    scene.add(ocean);

    const stateBoundary = createStateBoundaryLine();
    scene.add(stateBoundary.group);

    const districtLines = createDistrictLines();
    districtLinesRef.current = districtLines;
    districtLines.setVisible(showDistricts);
    scene.add(districtLines.group);

    const pinsManager = createPinsManager(
      (place) => onSelectPlace(place),
      (place) => setHoveredPlace(place)
    );
    pinsManagerRef.current = pinsManager;
    pinsManager.updateFilters(activeCategories);
    scene.add(pinsManager.group);

    // 6. Interaction handling (Raycasting, Drag, Pan, Pinch/Zoom)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let dragMode: 'orbit' | 'pan' = 'orbit';
    let previousMousePosition = { x: 0, y: 0 };
    let dragDistance = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      dragDistance = 0;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      dragMode = e.button === 2 || e.shiftKey ? 'pan' : 'orbit';
      choreographer.setUserInteracting(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        dragDistance += Math.hypot(deltaX, deltaY);

        if (dragMode === 'pan') {
          choreographer.handleUserPan(deltaX, deltaY);
        } else {
          choreographer.handleUserOrbit(deltaX, deltaY);
        }

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        pinsManager.handlePointerMove(raycaster);
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      choreographer.setUserInteracting(false);

      // If user performed a click without dragging, perform pin selection raycast
      if (dragDistance < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        pinsManager.handlePointerDown(raycaster);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      choreographer.handleUserZoom(e.deltaY * 0.05);
    };

    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });
    domEl.addEventListener('contextmenu', onContextMenu);

    // 7. Resize handling
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // 8. Animation RAF loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      choreographer.update(delta);
      updateOcean(elapsedTime);
      stateBoundary.update(elapsedTime);
      pinsManager.update(elapsedTime);

      renderer.render(scene, camera);
    };
    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('contextmenu', onContextMenu);

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }

      renderer.dispose();
      terrain.geometry.dispose();
      (terrain.material as THREE.Material).dispose();
      ocean.geometry.dispose();
      (ocean.material as THREE.Material).dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Hover tooltip for hovered pin */}
      {hoveredPlace && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none z-20 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-amber-500/30 text-xs shadow-xl flex items-center space-x-2 text-slate-100 animate-in fade-in zoom-in-95 duration-150">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              hoveredPlace.category === 'built'
                ? 'bg-amber-400'
                : hoveredPlace.category === 'natural'
                ? 'bg-emerald-400'
                : 'bg-pink-400'
            }`}
          />
          <span className="font-semibold">{hoveredPlace.name}</span>
          <span className="text-amber-300/80 font-serif">({hoveredPlace.odiaName})</span>
          <span className="text-slate-400">· {hoveredPlace.district}</span>
        </div>
      )}

      {/* Software WebGL fallback warning if needed */}
      {!webGlSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/95 z-50 p-6 text-center">
          <div className="max-w-md p-6 bg-slate-900 rounded-2xl border border-rose-500/30 shadow-2xl">
            <h3 className="text-lg font-bold text-rose-400 mb-2">Hardware Acceleration Required</h3>
            <p className="text-sm text-slate-300">
              The 3D spatial map of Odisha requires WebGL. Please ensure hardware acceleration is enabled in your browser settings.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
