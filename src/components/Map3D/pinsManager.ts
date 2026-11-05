import * as THREE from 'three';
import { PLACES_GEO_DATA, HeritagePlace } from '../../data/placesGeoData';
import { latLngToWorld, getTerrainElevation } from './geoUtils';

export interface PinUserData {
  place: HeritagePlace;
  isPin: boolean;
  baseY: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  built: '#F59E0B',    // Golden sandstone
  natural: '#10B981',  // Emerald green
  cultural: '#EC4899', // Ruby rose
};

export function createPinsManager(
  onPinClick: (place: HeritagePlace) => void,
  onPinHover?: (place: HeritagePlace | null) => void
) {
  const group = new THREE.Group();
  group.name = 'heritage-pins-group';

  const pinMeshes: THREE.Mesh[] = [];
  const rings: THREE.Mesh[] = [];

  // Shared geometries
  const sphereGeo = new THREE.DodecahedronGeometry(0.85, 1);
  const stalkGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8);
  const ringGeo = new THREE.RingGeometry(0.4, 1.2, 24);
  ringGeo.rotateX(-Math.PI / 2);

  // Materials map for instanced/reused categories
  const materials: Record<string, THREE.MeshStandardMaterial> = {
    built: new THREE.MeshStandardMaterial({
      color: new THREE.Color(CATEGORY_COLORS.built),
      emissive: new THREE.Color(CATEGORY_COLORS.built),
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.8,
    }),
    natural: new THREE.MeshStandardMaterial({
      color: new THREE.Color(CATEGORY_COLORS.natural),
      emissive: new THREE.Color(CATEGORY_COLORS.natural),
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.8,
    }),
    cultural: new THREE.MeshStandardMaterial({
      color: new THREE.Color(CATEGORY_COLORS.cultural),
      emissive: new THREE.Color(CATEGORY_COLORS.cultural),
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.8,
    }),
  };

  const stalkMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.6,
  });

  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  for (const place of PLACES_GEO_DATA) {
    const { x, z } = latLngToWorld(place.lat, place.lng);
    const groundY = Math.max(0.1, getTerrainElevation(x, z));

    const pinSubgroup = new THREE.Group();
    pinSubgroup.position.set(x, groundY, z);
    pinSubgroup.userData = { place, isPin: true, baseY: groundY };

    // Ground glow ring
    const ring = new THREE.Mesh(ringGeo, ringMat.clone());
    ring.position.y = 0.08;
    (ring.material as THREE.MeshBasicMaterial).color.set(CATEGORY_COLORS[place.category]);
    pinSubgroup.add(ring);
    rings.push(ring);

    // Stalk
    const stalk = new THREE.Mesh(stalkGeo, stalkMat);
    stalk.position.y = 1.3;
    pinSubgroup.add(stalk);

    // Floating gem beacon head
    const head = new THREE.Mesh(sphereGeo, materials[place.category]);
    head.position.y = 2.6;
    head.castShadow = true;
    head.userData = { place, isPin: true, baseY: groundY };
    pinSubgroup.add(head);

    pinMeshes.push(head);
    group.add(pinSubgroup);
  }

  // Active category filter state
  let activeCategories = new Set<string>(['built', 'natural', 'cultural']);
  let selectedPlaceId: string | null = null;
  let hoveredPlaceId: string | null = null;

  const updateFilters = (categories: Set<string>) => {
    activeCategories = categories;
    group.children.forEach((child) => {
      const place = (child.userData as PinUserData).place;
      child.visible = activeCategories.has(place.category);
    });
  };

  const setSelectedPlace = (placeId: string | null) => {
    selectedPlaceId = placeId;
  };

  // Animation step called in RAF loop
  const update = (time: number) => {
    group.children.forEach((child) => {
      if (!child.visible) return;
      const data = child.userData as PinUserData;
      const isSelected = data.place.id === selectedPlaceId;
      const isHovered = data.place.id === hoveredPlaceId;

      const head = child.children[2] as THREE.Mesh;
      const ring = child.children[0] as THREE.Mesh;

      // Bobbing floating motion
      const bob = Math.sin(time * 3 + data.place.lat * 10) * 0.2;
      head.position.y = 2.6 + bob + (isSelected ? 0.6 : 0);
      head.rotation.y = time * 1.5;

      // Pulse ring scale
      const ringScale = 1 + (Math.sin(time * 4) * 0.15) + (isSelected ? 0.4 : 0);
      ring.scale.set(ringScale, ringScale, 1);

      // Scale head slightly on hover/selected
      const targetScale = isSelected ? 1.5 : isHovered ? 1.3 : 1.0;
      head.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    });
  };

  // Raycaster hit test
  const handlePointerDown = (raycaster: THREE.Raycaster): boolean => {
    const intersects = raycaster.intersectObjects(pinMeshes, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const data = hit.userData as PinUserData;
      if (data && data.place) {
        onPinClick(data.place);
        return true;
      }
    }
    return false;
  };

  const handlePointerMove = (raycaster: THREE.Raycaster) => {
    const intersects = raycaster.intersectObjects(pinMeshes, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const data = hit.userData as PinUserData;
      if (data && data.place && data.place.id !== hoveredPlaceId) {
        hoveredPlaceId = data.place.id;
        onPinHover?.(data.place);
      }
    } else if (hoveredPlaceId !== null) {
      hoveredPlaceId = null;
      onPinHover?.(null);
    }
  };

  return {
    group,
    update,
    updateFilters,
    setSelectedPlace,
    handlePointerDown,
    handlePointerMove,
  };
}
