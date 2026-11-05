import * as THREE from 'three';
import { ODISHA_DISTRICTS } from '../../data/districtsGeo';
import { latLngToWorld, getTerrainElevation } from './geoUtils';

/**
 * Creates 3D district administrative boundary line overlays draped over terrain elevation.
 */
export function createDistrictLines(): { group: THREE.Group; setVisible: (visible: boolean) => void } {
  const group = new THREE.Group();
  group.name = 'district-boundary-lines';

  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('#94a3b8'), // Elegant platinum-slate boundary
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  });

  const points: THREE.Vector3[] = [];

  for (const district of ODISHA_DISTRICTS) {
    if (!district.boundary || district.boundary.length < 2) continue;

    for (let i = 0; i < district.boundary.length - 1; i++) {
      const [lat1, lng1] = district.boundary[i];
      const [lat2, lng2] = district.boundary[i + 1];

      const p1 = latLngToWorld(lat1, lng1);
      const p2 = latLngToWorld(lat2, lng2);

      // Samples terrain elevation + 0.15 height offset so lines float just above surface
      const y1 = Math.max(0.1, getTerrainElevation(p1.x, p1.z)) + 0.18;
      const y2 = Math.max(0.1, getTerrainElevation(p2.x, p2.z)) + 0.18;

      points.push(new THREE.Vector3(p1.x, y1, p1.z));
      points.push(new THREE.Vector3(p2.x, y2, p2.z));
    }
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineSegments = new THREE.LineSegments(geometry, material);
  group.add(lineSegments);

  const setVisible = (visible: boolean) => {
    group.visible = visible;
  };

  return { group, setVisible };
}
