# 🗺️ Utkala (ଉତ୍କଳ) — 3D Topographical Heritage Explorer of Odisha

An interactive, spatial 3D web application honoring the civilizational soul, living arts, and biodiversity of **Odisha** (ancient *Kalinga* and *Utkala*). Built with **Three.js**, **React 19**, and **Tailwind CSS**, Utkala turns geographic data into a living topographical relief map featuring guided scenic flythroughs, interactive 3D beacons, and real-time Wikimedia Commons media.

---

## 🌟 Highlights & Key Features

- **🏔️ Authentic 3D Topographical Terrain & Fine State Silhouette**
  - Physically grounded elevation model spanning the exact GIS bounds: 17.60°N–22.67°N and 81.13°E–87.78°E.
  - Derived directly from the official Wikimedia Commons Odisha silhouette (`1280px-Odisha_map_for_WLM-IN.svg.webp`), capturing every natural contour: the northern Mayurbhanj dome, the carved Mahanadi delta, the Chilika Lake lagoon indentation, and the deep southwestern Malkangiri projection.
  - Realistic elevation sculpting: soaring **Deomali** peak (+8.5) and **Eastern Ghats** in the southwest, the **Similipal** massif (+6.3) in the north, western plateaus (Sambalpur/Bargarh at +3.8), and coastal alluvial plains sloping down to the **Bay of Bengal**.
  - Non-Odisha areas recede into a museum-grade architectural pedestal (-1.35) and deep ocean abyss (-2.5), causing Odisha to emerge as a prominent 3D relief centerpiece.

- **✨ Glowing 3D State Perimeter Boundary Line**
  - Over 600 high-fidelity vector coordinates tracing the exact outer perimeter of Odisha in 3D space (`src/data/odishaOutlineGeo.ts`).
  - Rendered with an animated, glowing saffron-gold line (`stateBoundaryLine.ts`) draped over the terrain edge with a subtle secondary halo.

- **📍 Interactive 3D Heritage Beacons**
  - 3D beacons with category-coded glowing crystal heads, vertical light stalks, and pulsing ground sonar rings.
  - **Built Heritage** (Amber): Konark Sun Temple, Jagannath Temple Puri, Lingaraja, Mukteswara, Dhauli Shanti Stupa, Ratnagiri Buddhist Monastery, Barabati Citadel, Chausath Yogini.
  - **Natural Heritage** (Emerald): Similipal UNESCO Biosphere Reserve, Bhitarkanika Mangroves, Chilika Lake & Nalabana, Gahirmatha Olive Ridley Sanctuary, Duduma & Barehipani Waterfalls.
  - **Cultural & Living Traditions** (Rose): Raghurajpur Pattachitra Village, Pipli Appliqué, Sambalpuri Ikat Handlooms, Cuttack Silver Filigree (Tarakasi), Dhanu Jatra, and Mayurbhanj Chhau Dance.

- **🚁 5 Scenic Guided Tours with Auto-Playing Flythroughs**
  - **The Golden Triangle**: Sun chariots, sacred vimanas, and ancient monasteries across Puri and Khurda.
  - **Diamond Buddhist Circuit**: Ancient Vajrayana monasteries, green chlorite portals, and river citadels.
  - **Wild Northern Highlands**: Tiger sanctuaries, cascades, and tidal mangrove labyrinths.
  - **Western Heritage & Folk Trail**: Sambalpuri ikat, world's longest earthen dam (Hirakud), and living open-air theatres.
  - **Southern Ghats & Chilika Waters**: High shola peaks, Irrawaddy dolphins, and tribal river canyons.

- **🖼️ Real-Time Wikimedia Commons & Wikipedia Integration**
  - Dynamic photography and summaries fetched from Wikipedia REST API with in-memory caching and graceful fallback.
  - Zero external asset 404 dependencies: the 3D map engine functions completely offline with fallback photography and procedural shaders.

- **🏛️ 30 Administrative District Boundary Layers**
  - Toggleable 3D boundary lines draped over the terrain height for all 30 districts of Odisha.

- **🛡️ Red-Pill / Blue-Pill Security Architecture**
  - Strict input sanitization stripping script tags and malicious HTML entities from external Wikipedia content.
  - HTTPS enforcement and prevention of `javascript:` protocol exploits.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** v18+ or v20+
- Modern browser with WebGL 2.0 or WebGL 1.0 support

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/utkala.git
cd utkala

# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev
```

### 3. Testing & Verification
```bash
# Run Vitest unit tests (projection bounds, elevation checks, tour integrity, XSS sanitization)
npm run test

# Type-check and lint
npm run lint

# Build production bundle
npm run build
```

---

## 🎮 Spatial Controls & Navigation

| Action | Mouse / Touch Gesture | Keyboard Shortcut |
| :--- | :--- | :--- |
| **Orbit / Rotate** | Click + Drag | — |
| **Pan Terrain** | Right-Click + Drag / Shift + Drag | — |
| **Zoom In / Out** | Mouse Wheel / Pinch Gesture | — |
| **Inspect Place** | Click any 3D Pin / Click Search Item | — |
| **Play / Pause Tour**| Bottom Dock Play Button | `Space` |
| **Next / Prev Stop** | Skip Buttons in Bottom Dock | `→` / `←` |
| **Close Panel** | Close Button (X) | `Esc` |
| **Reset to Overview** | Bird's-Eye Compass Button (Top Bar) | — |

---

## 📂 Architecture & Directory Structure

```
src/
├── components/
│   ├── Map3D/
│   │   ├── geoUtils.ts           # Lat/Lng to 3D world projection & elevation height model
│   │   ├── terrainMesh.ts        # Procedural 3D mesh with elevation vertex coloration
│   │   ├── oceanMesh.ts          # Animated Bay of Bengal water plane with wave vertex shader
│   │   ├── districtLines.ts      # 3D line overlays for 30 administrative districts
│   │   ├── pinsManager.ts        # 3D glowing beacons, hover effects, and raycast hit tests
│   │   ├── cameraController.ts   # Smooth camera glide, spline tour flights, and orbit damping
│   │   └── MapCanvas.tsx         # WebGL canvas container with resize observer and event loops
│   ├── HUD/
│   │   ├── TopBar.tsx            # Header, search bar, tour selector, and reset button
│   │   ├── TourDock.tsx          # Collapsible bottom dock with tour playback and layer filters
│   │   └── PlaceDetailModal.tsx  # Slide-in drawer with Wikimedia photos and Wikipedia briefs
│   └── OdishaLogo.tsx            # SVG vector outline of the map of Odisha
├── data/
│   ├── placesGeoData.ts          # Curated geo-coordinates, elevation, and verified media
│   ├── districtsGeo.ts           # Centroids and perimeter vectors for all 30 districts
│   └── toursData.ts              # 5 scenic guided tours with camera altitudes and narratives
├── services/
│   └── wikimediaService.ts       # Secure REST fetcher for Wikipedia and Wikimedia Commons
├── test/
│   └── utkala.test.ts            # Vitest unit tests for projection, data, and security
└── App.tsx                       # Root orchestrator connecting 3D spatial viewport with HUD
```

---

## 🤝 Developer Contribution Guide

Contributions from developers, historians, cartographers, and cultural researchers are warmly welcomed!

### 1. Adding a New Heritage Location
1. Open `src/data/placesGeoData.ts`.
2. Add a new object following the `HeritagePlace` interface:
   ```typescript
   {
     id: 'new-site-id',
     name: 'English Name',
     odiaName: 'ଓଡ଼ିଆ ନାମ',
     category: 'built' | 'natural' | 'cultural',
     subcategory: 'e.g. Classical Sanctuary',
     lat: 20.1234,
     lng: 85.5678,
     district: 'District Name',
     elevationMeters: 45,
     wikiTitle: 'Wikipedia_Article_Title',
     wikiUrl: 'https://en.wikipedia.org/wiki/...',
     commonsImgUrl: 'https://upload.wikimedia.org/...',
     description: 'Short historical summary...',
     highlights: ['Highlight 1', 'Highlight 2'],
     eraOrPeriod: 'Century or Epoch'
   }
   ```
3. Run `npm run test` to verify your new location satisfies coordinate and schema checks.

### 2. Crafting a New Guided Tour
1. Open `src/data/toursData.ts`.
2. Add a new `GuidedTour` entry with scenic stops, specifying `targetLat`, `targetLng`, `cameraElevation`, and scenic `headingDeg` / `pitchAngleDeg`.
3. Test your tour visually in the browser by selecting it from the *Guided Tours* dropdown.

### 3. Adding Architectural or 3D Shader Layers
- The 3D engine is modular: create a builder in `src/components/Map3D/` and mount it inside `MapCanvas.tsx`.
- Follow Three.js best practices: reuse geometries and materials, enable `depthWrite: false` on transparent sprites, and dispose of resources on unmount.

---

## 📜 License & Acknowledgments

- Dedicated to the people of Odisha and the custodians of Kalinga heritage.
- Photography and historical excerpts courtesy of **Wikimedia Commons** and **Wikipedia** under Creative Commons Attribution-ShareAlike licenses.
