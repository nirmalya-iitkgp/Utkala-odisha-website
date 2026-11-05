import * as THREE from 'three';
import { GEO_BOUNDS, getTerrainElevation, worldToLatLng } from './geoUtils';
import { isInsideOdishaMask } from '../../data/odishaOutlineGeo';

/**
 * Builds the 3D topographical relief terrain mesh for the State of Odisha,
 * modeled after the authentic geographical contour and elevation profile.
 */
export function createOdishaTerrain(): THREE.Mesh {
  const segmentsX = 180;
  const segmentsZ = 140;
  const geometry = new THREE.PlaneGeometry(
    GEO_BOUNDS.worldWidth,
    GEO_BOUNDS.worldDepth,
    segmentsX,
    segmentsZ
  );

  // Rotate plane so X/Z form the horizontal ground and Y is elevation
  geometry.rotateX(-Math.PI / 2);

  const posAttr = geometry.attributes.position;
  const colors: number[] = [];

  // Elevation color stops
  const cOceanFloor = new THREE.Color('#071a2b');
  const cPedestalFloor = new THREE.Color('#090d16');
  const cSand = new THREE.Color('#d4a373');
  const cPlains = new THREE.Color('#2d6a4f');
  const cForest = new THREE.Color('#1b4332');
  const cLaterite = new THREE.Color('#9c6644');
  const cHighPeak = new THREE.Color('#fcd34d');

  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const z = posAttr.getZ(i);

    const y = getTerrainElevation(x, z);
    posAttr.setY(i, y);

    const { lat, lng } = worldToLatLng(x, z);
    const insideOdisha = isInsideOdishaMask(lat, lng);
    const vertexColor = new THREE.Color();

    if (!insideOdisha) {
      if (lng > 84.8 && lat < 21.6) {
        // Deep Bay of Bengal ocean abyss
        vertexColor.copy(cOceanFloor);
      } else {
        // Neighboring territory dark pedestal
        vertexColor.copy(cPedestalFloor);
      }
    } else {
      // Inside Odisha territory
      if (y < 0.75) {
        // Coastal shoreline & alluvial delta
        vertexColor.lerpColors(cSand, cPlains, Math.max(0, (y - 0.35) / 0.4));
      } else if (y < 3.2) {
        // Agricultural plains & Mahanadi river basin
        vertexColor.lerpColors(cPlains, cForest, (y - 0.75) / 2.45);
      } else if (y < 6.5) {
        // Eastern Ghats highlands & Similipal hills
        vertexColor.lerpColors(cForest, cLaterite, (y - 3.2) / 3.3);
      } else {
        // Deomali & highest mountain crests
        vertexColor.lerpColors(cLaterite, cHighPeak, Math.min(1, (y - 6.5) / 3.0));
      }

      // Subtle organic geological noise
      const noise = Math.sin(x * 0.8) * Math.cos(z * 0.8) * 0.03;
      vertexColor.offsetHSL(0, 0, noise);
    }

    colors.push(vertexColor.r, vertexColor.g, vertexColor.b);
  }

  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.82,
    metalness: 0.1,
    flatShading: false,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.name = 'odisha-terrain-mesh';

  return mesh;
}
