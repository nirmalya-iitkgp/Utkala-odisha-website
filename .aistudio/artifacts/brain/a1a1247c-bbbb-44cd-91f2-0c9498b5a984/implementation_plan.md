# Utkala: 3D Topographical Heritage Map of Odisha

A complete architectural refactor transforming Utkala into an immersive, interactive 3D spatial map of Odisha powered by Three.js. The application models the geographic topography of Odisha—its Eastern Ghat mountain ridges, Mahanadi river basins, coastal plains, Chilika lagoon, and Bay of Bengal shoreline—populated with interactive 3D heritage pins, district boundary layers, automated guided scenic flythroughs, and rich Wikimedia Commons photography.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed in Phase 1 and govern the core application architecture:

- **Confirmed: Visual Style**: Stylized topographical 3D terrain with physical elevation, contoured hill ranges (Eastern Ghats, Deomali, Gandhamardan), carved river systems (Mahanadi, Brahmani), coastal plains, and animated Bay of Bengal ocean shader.
- **Confirmed: Navigation & Exploration**: Guided region tour with auto-playing scenic camera flythroughs, accompanied by free orbit/zoom controls and click-to-fly pin inspection.
- **Confirmed: Pin & Media Presentation**: Heritage locations organized into distinct category layers (Built Heritage, Natural Wonders, Cultural Centers), integrated with district boundary lines and high-resolution Wikimedia Commons photographic galleries.

---

## 1. Overview & Core Concept

### What It Does
Utkala 3D provides a spatial exploration of Odisha's 2,000-year heritage. Users can soar through the state via curated scenic flythrough tours or freely orbit, rotate, and zoom into individual landmarks. Each site is pinned in accurate geo-spatial coordinates with category-coded beacons. Clicking a pin smoothly glides the camera to the landmark and opens a media-rich panel pulling live descriptions and imagery from Wikimedia Commons and Wikipedia.

### Target Audience & Persona
- Heritage travelers, students, researchers, and culture enthusiasts exploring Odisha's architectural, cultural, and ecological treasures.
- Users seeking a visceral sense of Odisha's geography—understanding how coastal ports, river valleys, and mountain forts shaped historic trade and kingdoms.

### Key Value
Replaces flat card lists with a living 3D terrain sandbox that makes Odisha's geography and heritage immediately intuitive, memorable, and visually breathtaking.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Arrival & Cinematic Intro**:
   - The scene loads with an elevated orbital view of Odisha illuminated by warm golden-hour coastal sunlight and deep navy ocean waters.
   - A welcome badge and tour invitation prompt the user to start the "Odisha Grand Tour" or begin free exploration.

2. **Guided Scenic Tour**:
   - Selecting a tour (e.g. *Golden Triangle*, *Diamond Buddhist Circuit*, *Wild Northern Highlands*, *Western Riverlands*, *Southern Ghats*) initiates a smooth camera flyover along a Bézier spline.
   - The bottom HUD provides playback controls: Previous Stop, Play/Pause, Next Stop, Tour selector, and Playback Speed.
   - At each stop, the camera decelerates into a scenic orbit, highlighting the landmark while the stop drawer presents verified history and Wikimedia Commons photography.

3. **Free Flight & Pin Exploration**:
   - Users can drag to rotate, pinch/scroll to zoom, and pan across the terrain.
   - Hovering over a 3D pin elevates its beacon and reveals a floating location tag with district name.
   - Clicking a pin smoothly transitions the camera (exponential damping) to focus on the monument, opening the comprehensive details modal.

4. **District & Category Layer Filtering**:
   - The collapsible bottom dock allows toggling district boundaries (e.g., Puri, Khordha, Cuttack, Mayurbhanj, Koraput, Sambalpur) and filtering pin categories (All, Temples & Architecture, Wildlife & Nature, Arts & Culture).
   - An instant search bar enables jumping directly to any of the 60+ key sites.

### Visual Identity & Theme
- **Dominant Canvas**: Dark slate-blue maritime atmospheric backdrop (`#0B132B`, `#1C2541`) evoking the Bay of Bengal coastline.
- **Terrain Palette**: Terracotta red laterite soils (`#8D5B4C`), verdant Eastern Ghats forest greens (`#2D5A27`), sandstone temple gold (`#D4A373`), and iridescent coastal waters (`#1E3A5F`).
- **Accent Budget**: Temple marigold orange (`#F27D26`) and solar amber (`#F59E0B`) for active pins, selection rings, and primary action affordances.
- **Typography**:
  - Display / Headings: `Plus Jakarta Sans` / `Cinzel` serif for majestic heritage titles.
  - Body & Metadata: `Plus Jakarta Sans` for UI readability, with tabular numerals (`tabular-nums`) for coordinates and metrics.

### Motion & Interaction Budgets
- Camera movements glide using frame-rate independent exponential damping (`THREE.MathUtils.damp`) with zero jarring cuts.
- UI overlay transitions finish within 180ms with smooth easing.
- Compliant with `prefers-reduced-motion`—falls back to instant gentle pans when enabled.

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Procedural Geo-Topographical Mesh vs. Heavy External DEM File
- **Chosen Approach**: Generate a stylized mathematical heightmap terrain mesh directly in Three.js, accurately scaled to Odisha's boundary polygon, elevation profiles (Eastern Ghats ridge in SW/central, coastal flatlands in E/SE, Similipal massif in NE), and river estuaries.
- **Why**: Zero 404 dependencies, instant loading (<100ms), 60 FPS performance on all devices (including software WebGL), and total artistic control over styling and material shaders.
- **Alternative Considered**: Loading a 20MB raw GeoTIFF or `.glb` mesh; rejected due to latency, potential network failures, and poor mobile WebGL memory budgets.

### Decision 2: Wikimedia Commons Live API & Curated Wikimedia Cache
- **Chosen Approach**: Hybrid strategy—curate high-fidelity Wikimedia Commons image URLs and verified image licenses for all featured landmarks, with an automatic Wikipedia REST API fallback query (`/api/rest_v1/page/summary/{title}`) to fetch live summaries and high-resolution thumbnail sets.
- **Why**: Guarantees instant offline-capable visual cards while still dynamically importing fresh full-size photography from Wikimedia Commons.
- **Alternative Considered**: Relying strictly on external unverified URLs; rejected because broken external images violate the Zero-Broken-Image Policy.

### Decision 3: Ergonomic Collapsible Bottom Dock (Zero Viewport Occlusion)
- **Chosen Approach**: In alignment with the Three.js skill directives, all map controls (tour playback, category toggles, district overlay, search) are consolidated into a sleek, glassmorphic collapsible bottom dock.
- **Why**: Leaves 90% of the screen completely unobstructed for 3D exploration without cluttered side panels blocking the map.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              Utkala 3D App                             │
│                                                                        │
│  ┌───────────────────────┐             ┌────────────────────────────┐  │
│  │   Top Header Zone     │             │    Details / Media Modal   │  │
│  │  - Wordmark & Logo    │             │  - Wikimedia Photography   │  │
│  │  - Quick Search Bar   │             │  - Odia/Eng Descriptions   │  │
│  │  - Language Selector  │             │  - Wikipedia Deep Link     │  │
│  └───────────────────────┘             └────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                Three.js 3D WebGL Canvas Viewport                 │  │
│  │                                                                  │  │
│  │   ┌─────────────────────┐   ┌────────────────────────────────┐   │  │
│  │   │ Topographical Mesh  │   │  Animated Bay of Bengal Ocean  │   │  │
│  │   │ - Eastern Ghats     │   │  - Wave shaders & foam rim     │   │  │
│  │   │ - River Valleys     │   │  - Shoreline boundary line     │   │  │
│  │   └─────────────────────┘   └────────────────────────────────┘   │  │
│  │                                                                  │  │
│  │   ┌─────────────────────┐   ┌────────────────────────────────┐   │  │
│  │   │ District Boundaries │   │  Interactive 3D Heritage Pins  │   │  │
│  │   │ - 30 district lines │   │  - Category-coded beacons      │   │  │
│  │   │ - Hover highlights  │   │  - Instanced pulsing rings     │   │  │
│  │   └─────────────────────┘   └────────────────────────────────┘   │  │
│  │                                                                  │  │
│  │   ┌──────────────────────────────────────────────────────────┐   │  │
│  │   │ Camera Choreographer (OrbitControls + Damped Flythrough) │   │  │
│  │   └──────────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                 Collapsible Bottom Tour & Control Dock           │  │
│  │  - Guided Tour Player: [◀ Prev] [▶ Play / Pause] [Next ▶] [Speed]│  │
│  │  - Layer Toggles: [All Sites] [Temples] [Nature] [Culture]       │  │
│  │  - District Lines: [ON / OFF]                                    │  │
│  │  - Dock Drawer Toggle: [▾ Hide / ▴ Show]                         │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Module Breakdown & Component Strategy
1. **`src/components/Map3D/`**:
   - `MapContainer.tsx`: React wrapper with isolated WebGL canvas ref, lifecycle management, resize observer, and raycasting event dispatchers.
   - `terrainBuilder.ts`: Procedural generation of Odisha's boundary shape, elevation displacement geometry, vertex coloring, and coastal shorelines.
   - `oceanShader.ts`: Stylized water mesh for the Bay of Bengal with gentle wave vertex motion and depth coloring.
   - `pinsManager.ts`: 3D pin beacon markers with glow rings, category materials, and spatial coordinate projection (lat/lng to Three.js coordinates).
   - `districtLines.ts`: Geo-vector district boundary outlines projected onto the 3D terrain surface.
   - `cameraChoreographer.ts`: Spline-based cinematic camera tours, fly-to-target transitions, and smooth exponential damping.
2. **`src/components/HUD/`**:
   - `TourDock.tsx`: Collapsible bottom control bar with tour playback controls, speed slider, and category filter pills.
   - `PlaceDetailModal.tsx`: High-resolution slide-in drawer showing Wikimedia Commons images, historical context, location tags, and Wikipedia links.
   - `SearchBar.tsx`: Filter-as-you-type search with instant pin focus.
3. **`src/data/`**:
   - `placesGeoData.ts`: Geo-coordinates (lat/lng), category, district, elevation, Wikipedia slug, and curated Wikimedia Commons image citations for key heritage landmarks across all districts of Odisha.
   - `toursData.ts`: Curated scenic flight paths through Odisha's regions with waypoint cameras, pitch/yaw angles, and stopover descriptions.
   - `districtsGeo.ts`: Simplified geographic polygon vectors for Odisha's districts.
4. **`src/services/`**:
   - `wikimediaService.ts`: Client-side caching and dynamic fetching from Wikimedia Commons / Wikipedia REST API.

---

## 5. Implementation Steps & Validation Plan

1. **Dependencies Installation**:
   - Install `three` and `@types/three`.
2. **Geo & Heritage Data Modeling**:
   - Build `placesGeoData.ts` mapping historical/natural/cultural landmarks with verified latitude/longitude coordinates, district associations, and Wikimedia Commons images.
   - Define curated guided tour itineraries in `toursData.ts`.
3. **Three.js 3D Map Engine**:
   - Implement terrain geometry with procedural heightmap matching Odisha's geography.
   - Add ambient/directional three-point studio lighting, RoomEnvironment reflections, and soft contact shadows.
   - Add animated ocean plane for the Bay of Bengal and Chilika lagoon basin.
   - Implement category-coded 3D pin meshes with raycaster click/hover detection.
   - Add district line overlay with toggleable visibility.
4. **Camera Choreography & Scenic Tours**:
   - Implement spline interpolation for automated flythroughs between waypoints.
   - Implement smooth click-to-fly zoom when any pin or search result is clicked.
5. **UI HUD & Wikimedia Media Drawer**:
   - Build the collapsible bottom dock with tour controls, category filters, and search bar.
   - Build the responsive detail drawer/modal rendering Wikimedia Commons photo galleries and Wikipedia summaries.
6. **Testing & Quality Assurance**:
   - Add unit tests for geo-coordinate projection, tour waypoint sequencing, and search filtering.
   - Perform security check and red-pill/blue-pill validation (input sanitation, safe external URLs).
   - Run linter and verify full compilation (`compile_applet`).
   - Conduct complete UAT walk-through of 3D scene performance and interactions.
