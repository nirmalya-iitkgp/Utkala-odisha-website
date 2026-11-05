import { describe, it, expect } from 'vitest';
import { latLngToWorld, worldToLatLng, getTerrainElevation, GEO_BOUNDS } from '../components/Map3D/geoUtils';
import { PLACES_GEO_DATA } from '../data/placesGeoData';
import { ODISHA_DISTRICTS } from '../data/districtsGeo';
import { GUIDED_TOURS } from '../data/toursData';

describe('Utkala 3D Map - Projection & Topography', () => {
  it('correctly maps center coordinates to near (0, 0)', () => {
    const { x, z } = latLngToWorld(GEO_BOUNDS.centerLat, GEO_BOUNDS.centerLng);
    expect(Math.abs(x)).toBeLessThan(0.001);
    expect(Math.abs(z)).toBeLessThan(0.001);
  });

  it('preserves coordinate roundtrip fidelity between world and lat/lng', () => {
    const originalLat = 20.24;
    const originalLng = 85.83;
    const { x, z } = latLngToWorld(originalLat, originalLng);
    const roundtrip = worldToLatLng(x, z);

    expect(roundtrip.lat).toBeCloseTo(originalLat, 2);
    expect(roundtrip.lng).toBeCloseTo(originalLng, 2);
  });

  it('computes higher elevation for Deomali peak than coastal plains', () => {
    const deomali = latLngToWorld(18.6667, 82.9833);
    const konark = latLngToWorld(19.8876, 86.0945);

    const deomaliElev = getTerrainElevation(deomali.x, deomali.z);
    const konarkElev = getTerrainElevation(konark.x, konark.z);

    expect(deomaliElev).toBeGreaterThan(konarkElev);
    expect(deomaliElev).toBeGreaterThan(6.0); // Majestic mountain height
  });

  it('correctly sinks deep ocean points east of Odisha', () => {
    const deepOcean = latLngToWorld(19.0, 87.4);
    const oceanElev = getTerrainElevation(deepOcean.x, deepOcean.z);
    expect(oceanElev).toBeLessThanOrEqual(0.1);
  });
});

describe('Authentic Odisha Geographic Silhouette & Mask', () => {
  it('contains hundreds of high-fidelity perimeter coordinates forming a closed boundary', async () => {
    const { ODISHA_PERIMETER_COORDS } = await import('../data/odishaOutlineGeo');
    expect(ODISHA_PERIMETER_COORDS.length).toBeGreaterThan(500);

    for (const [lat, lng] of ODISHA_PERIMETER_COORDS) {
      expect(lat).toBeGreaterThanOrEqual(17.5);
      expect(lat).toBeLessThanOrEqual(23.0);
      expect(lng).toBeGreaterThanOrEqual(81.0);
      expect(lng).toBeLessThanOrEqual(88.0);
    }
  });

  it('correctly identifies key inland cities as inside the mask and deep sea as outside', async () => {
    const { isInsideOdishaMask } = await import('../data/odishaOutlineGeo');
    // Bhubaneswar
    expect(isInsideOdishaMask(20.2961, 85.8245)).toBe(true);
    // Puri
    expect(isInsideOdishaMask(19.8135, 85.8312)).toBe(true);
    // Deomali peak in Koraput
    expect(isInsideOdishaMask(18.6667, 82.9833)).toBe(true);
    // Similipal in Mayurbhanj
    expect(isInsideOdishaMask(21.65, 86.35)).toBe(true);
    // Sambalpur
    expect(isInsideOdishaMask(21.4669, 83.9812)).toBe(true);

    // Deep sea point in Bay of Bengal
    expect(isInsideOdishaMask(19.0, 87.5)).toBe(false);
    // Far outside point
    expect(isInsideOdishaMask(25.0, 80.0)).toBe(false);
  });

  it('places all 60 curated heritage pins inside the Odisha landmass mask', async () => {
    const { isInsideOdishaMask } = await import('../data/odishaOutlineGeo');
    expect(PLACES_GEO_DATA.length).toBe(60);
    for (const place of PLACES_GEO_DATA) {
      expect(isInsideOdishaMask(place.lat, place.lng)).toBe(true);
    }
  });
});

describe('Utkala Heritage Places Dataset Integrity', () => {
  it('contains at least 20 curated heritage sites across categories', () => {
    expect(PLACES_GEO_DATA.length).toBeGreaterThanOrEqual(20);
  });

  it('has valid geographical coordinates within Odisha bounding box for all places', () => {
    for (const place of PLACES_GEO_DATA) {
      expect(place.lat).toBeGreaterThanOrEqual(17.5);
      expect(place.lat).toBeLessThanOrEqual(23.0);
      expect(place.lng).toBeGreaterThanOrEqual(81.0);
      expect(place.lng).toBeLessThanOrEqual(88.0);
      expect(place.name.length).toBeGreaterThan(2);
      expect(place.odiaName.length).toBeGreaterThan(1);
      expect(['built', 'natural', 'cultural']).toContain(place.category);
      expect(place.wikiUrl).toMatch(/^https:\/\/[a-z.]*wikipedia\.org\//);
    }
  });

  it('has unique IDs for every heritage place', () => {
    const idSet = new Set(PLACES_GEO_DATA.map((p) => p.id));
    expect(idSet.size).toBe(PLACES_GEO_DATA.length);
  });
});

describe('Odisha Administrative Districts Dataset', () => {
  it('contains all 30 districts of Odisha', () => {
    expect(ODISHA_DISTRICTS.length).toBe(30);
  });

  it('each district has valid boundary coordinates', () => {
    for (const d of ODISHA_DISTRICTS) {
      expect(d.boundary.length).toBeGreaterThanOrEqual(3);
      for (const [lat, lng] of d.boundary) {
        expect(lat).toBeGreaterThan(17.0);
        expect(lat).toBeLessThan(23.5);
        expect(lng).toBeGreaterThan(80.5);
        expect(lng).toBeLessThan(88.5);
      }
    }
  });
});

describe('Guided Tours & Waypoint Integrity', () => {
  it('all tour stop place references point to existing places in PLACES_GEO_DATA', () => {
    const placeIdSet = new Set(PLACES_GEO_DATA.map((p) => p.id));
    for (const tour of GUIDED_TOURS) {
      expect(tour.stops.length).toBeGreaterThan(1);
      for (const stop of tour.stops) {
        expect(placeIdSet.has(stop.placeId)).toBe(true);
      }
    }
  });
});

describe('Security & Input Sanitization (Red-Pill / Blue-Pill)', () => {
  it('sanitizes script injection payloads in descriptions', () => {
    const maliciousPayload = "<script>alert('xss')</script>Hello <b>World</b>";
    const cleaned = maliciousPayload
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]+>/g, '')
      .trim();
    expect(cleaned).toBe('Hello World');
    expect(cleaned).not.toContain('<script>');
  });

  it('validates all external Wikipedia URLs use HTTPS', () => {
    for (const place of PLACES_GEO_DATA) {
      expect(place.wikiUrl.startsWith('https://')).toBe(true);
      expect(place.wikiUrl).not.toContain('javascript:');
    }
  });
});
