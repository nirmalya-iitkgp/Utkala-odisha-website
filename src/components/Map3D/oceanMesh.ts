import * as THREE from 'three';
import { GEO_BOUNDS } from './geoUtils';

/**
 * Creates the Bay of Bengal animated ocean surface plane.
 */
export function createOceanMesh(): { mesh: THREE.Mesh; update: (time: number) => void } {
  const oceanWidth = GEO_BOUNDS.worldWidth * 1.5;
  const oceanDepth = GEO_BOUNDS.worldDepth * 1.4;
  const geometry = new THREE.PlaneGeometry(oceanWidth, oceanDepth, 60, 60);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#0f4c6c'),
    roughness: 0.22,
    metalness: 0.1,
    transmission: 0.65,
    ior: 1.333,
    transparent: true,
    opacity: 0.88,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(15, -0.05, 10); // Offset southeast towards the Bay of Bengal
  mesh.receiveShadow = true;
  mesh.name = 'bay-of-bengal-ocean';

  const posAttr = geometry.attributes.position;
  const originalY = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    originalY[i] = posAttr.getY(i);
  }

  // Subtle wave animation function called every frame
  const update = (time: number) => {
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      const wave = Math.sin(x * 0.15 + time * 1.8) * Math.cos(z * 0.15 + time * 1.5) * 0.12;
      posAttr.setY(i, originalY[i] + wave);
    }
    posAttr.needsUpdate = true;
  };

  return { mesh, update };
}
