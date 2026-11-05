import { isInsideOdishaMask } from '../../data/odishaOutlineGeo';

/**
 * Geographic projection and elevation modeling for the 3D Odisha map.
 * Exact GIS Bounds from Wikimedia Commons locator map:
 * Lat 17.60°N to 22.67°N (span 5.07°), Lng 81.13°E to 87.78°E (span 6.65°).
 * Aspect ratio corresponds exactly to the 1280x999 reference map.
 */
export const GEO_BOUNDS = {
  minLat: 17.60,
  maxLat: 22.67,
  minLng: 81.13,
  maxLng: 87.78,
  centerLat: 20.135,
  centerLng: 84.455,
  worldWidth: 120, // X axis span (East-West)
  worldDepth: 93.656, // Z axis span matching 1280x999 aspect (120 * 999 / 1280)
};

/**
 * Projects (lat, lng) to Three.js world coordinates (x, z).
 * In 3D: X axis represents East-West, Z axis represents North-South (-Z is North).
 */
export function latLngToWorld(lat: number, lng: number): { x: number; z: number } {
  const normX = (lng - GEO_BOUNDS.centerLng) / (GEO_BOUNDS.maxLng - GEO_BOUNDS.minLng);
  const normZ = (lat - GEO_BOUNDS.centerLat) / (GEO_BOUNDS.maxLat - GEO_BOUNDS.minLat);

  const x = normX * GEO_BOUNDS.worldWidth;
  const z = -normZ * GEO_BOUNDS.worldDepth;

  return { x, z };
}

/**
 * Inverse mapping from 3D world (x, z) to (lat, lng).
 */
export function worldToLatLng(x: number, z: number): { lat: number; lng: number } {
  const normX = x / GEO_BOUNDS.worldWidth;
  const normZ = -z / GEO_BOUNDS.worldDepth;

  const lng = GEO_BOUNDS.centerLng + normX * (GEO_BOUNDS.maxLng - GEO_BOUNDS.minLng);
  const lat = GEO_BOUNDS.centerLat + normZ * (GEO_BOUNDS.maxLat - GEO_BOUNDS.minLat);

  return { lat, lng };
}

/**
 * Computes stylized topographical elevation (Y coordinate in world units)
 * anchored by the authentic fine silhouette of Odisha:
 * 1. South-West Eastern Ghats ridge (Koraput, Deomali peaking at +8.5)
 * 2. North-East Similipal / Mayurbhanj massif (+6.2)
 * 3. Central Western plateau (Bargarh, Bolangir, Sambalpur) (+3.8)
 * 4. Carved Mahanadi / Brahmani river valley through the center
 * 5. Coastal plains in East gently meeting the Bay of Bengal (+0.4)
 * 6. Non-Odisha areas drop to submarine ocean depth (-2.5) or recessed dark pedestal (-1.4)
 */
export function getTerrainElevation(x: number, z: number): number {
  const { lat, lng } = worldToLatLng(x, z);
  const inside = isInsideOdishaMask(lat, lng);

  // If outside Odisha landmass:
  if (!inside) {
    // East / South-East is the Bay of Bengal ocean
    if (lng > 84.8 && lat < 21.6) {
      return -2.5; // Submarine ocean floor
    }
    // Surrounding neighboring states (pedestal base)
    return -1.35;
  }

  // Inside Odisha:
  // Base elevation for fertile coastal plain & river deltas
  let elevation = 0.85;

  // Chilika Lake lagoon indentation
  const distToChilika = Math.hypot(lat - 19.72, lng - 85.32);
  if (distToChilika < 0.28) {
    return 0.12 + distToChilika * 0.4; // Lagoon surface
  }

  // 1. South-West Eastern Ghats (Koraput, Rayagada, Deomali peak)
  const distToDeomali = Math.hypot(lat - 18.67, lng - 82.98);
  if (distToDeomali < 1.45) {
    const falloff = 1 - distToDeomali / 1.45;
    elevation += falloff * falloff * 8.5; // High peak
  }
  const swRidge = Math.hypot(lat - 18.9, lng - 83.2);
  if (swRidge < 2.1) {
    elevation += (1 - swRidge / 2.1) * 4.6;
  }

  // 2. North-East Similipal Massif (Mayurbhanj highlands)
  const distToSimilipal = Math.hypot(lat - 21.65, lng - 86.35);
  if (distToSimilipal < 1.25) {
    const falloff = 1 - distToSimilipal / 1.25;
    elevation += falloff * 6.3;
  }

  // 3. Central-West Barapahad / Sambalpur / Bargarh hills
  const distToWesternHills = Math.hypot(lat - 21.5, lng - 83.7);
  if (distToWesternHills < 1.35) {
    elevation += (1 - distToWesternHills / 1.35) * 3.8;
  }

  // 4. Central Mahanadi River Valley depression:
  const mahanadiAxis = Math.abs(lat - (20.3 + (lng - 83.5) * 0.08));
  if (mahanadiAxis < 0.35 && lng > 83.5 && lng < 86.2) {
    const gorgeDamp = 1 - mahanadiAxis / 0.35;
    elevation = Math.max(0.65, elevation - gorgeDamp * 2.1);
  }

  // 5. Eastern coastal plain gentle slope towards the sea
  if (lng > 85.5) {
    const coastalFactor = Math.min(1, Math.max(0, (lng - 85.5) / 1.8));
    elevation = elevation * (1 - coastalFactor * 0.72) + 0.45 * coastalFactor;
  }

  // Micro terrain ripple for natural realism
  const ripple =
    Math.sin(x * 0.18) * Math.cos(z * 0.22) * 0.38 +
    Math.sin(x * 0.36 + z * 0.28) * 0.2;

  return Math.max(0.35, elevation + ripple);
}
