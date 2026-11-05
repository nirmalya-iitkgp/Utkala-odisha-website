import * as THREE from 'three';
import { ODISHA_PERIMETER_COORDS } from '../../data/odishaOutlineGeo';
import { latLngToWorld, getTerrainElevation } from './geoUtils';

/**
 * Creates the authentic glowing 3D state boundary perimeter line of Odisha,
 * directly extracted from the official Wikimedia Commons silhouette map.
 */
export function createStateBoundaryLine(): {
  group: THREE.Group;
  setVisible: (visible: boolean) => void;
  update: (time: number) => void;
} {
  const group = new THREE.Group();
  group.name = 'odisha-state-boundary';

  const points: THREE.Vector3[] = [];

  for (let i = 0; i < ODISHA_PERIMETER_COORDS.length; i++) {
    const [lat, lng] = ODISHA_PERIMETER_COORDS[i];
    const { x, z } = latLngToWorld(lat, lng);
    // Elevated slightly above terrain contour (+0.25) so the outline hovers crisply
    const y = Math.max(0.2, getTerrainElevation(x, z)) + 0.25;
    points.push(new THREE.Vector3(x, y, z));
  }

  // Close the loop
  if (points.length > 0) {
    points.push(points[0].clone());
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  // Radiant saffron-gold boundary material
  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('#fbbf24'),
    transparent: true,
    opacity: 0.92,
    linewidth: 2,
    depthWrite: false,
  });

  const line = new THREE.Line(geometry, material);
  group.add(line);

  // Subtle secondary halo line for glow depth
  const glowMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color('#f59e0b'),
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  });
  const haloPoints = points.map((p) => new THREE.Vector3(p.x, p.y + 0.08, p.z));
  const haloGeo = new THREE.BufferGeometry().setFromPoints(haloPoints);
  const haloLine = new THREE.Line(haloGeo, glowMaterial);
  group.add(haloLine);

  const setVisible = (visible: boolean) => {
    group.visible = visible;
  };

  const update = (time: number) => {
    // Gentle breathing pulse along state perimeter
    const pulse = 0.85 + Math.sin(time * 2.2) * 0.12;
    material.opacity = pulse;
    glowMaterial.opacity = 0.4 + Math.sin(time * 2.2) * 0.1;
  };

  return { group, setVisible, update };
}
