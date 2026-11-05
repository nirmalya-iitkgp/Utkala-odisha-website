import React, { useState, useEffect, useCallback } from 'react';
import MapCanvas from './components/Map3D/MapCanvas';
import TopBar from './components/HUD/TopBar';
import TourDock from './components/HUD/TourDock';
import PlaceDetailModal from './components/HUD/PlaceDetailModal';
import { PLACES_GEO_DATA, HeritagePlace } from './data/placesGeoData';
import { GUIDED_TOURS, GuidedTour, TourStop } from './data/toursData';

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState<HeritagePlace | null>(null);
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(['built', 'natural', 'cultural'])
  );
  const [showDistricts, setShowDistricts] = useState(true);
  const [resetViewTrigger, setResetViewTrigger] = useState(0);

  const activeTour: GuidedTour | null =
    GUIDED_TOURS.find((t) => t.id === selectedTourId) || null;

  const activeTourStop: TourStop | null =
    activeTour && activeTour.stops[currentStopIndex] ? activeTour.stops[currentStopIndex] : null;

  // Handle tour stop selection
  const handleSelectStop = useCallback((index: number) => {
    setCurrentStopIndex(index);
  }, []);

  const handleNextStop = useCallback(() => {
    if (!activeTour) return;
    setCurrentStopIndex((prev) => (prev + 1) % activeTour.stops.length);
  }, [activeTour]);

  const handlePrevStop = useCallback(() => {
    if (!activeTour) return;
    setCurrentStopIndex((prev) => (prev - 1 + activeTour.stops.length) % activeTour.stops.length);
  }, [activeTour]);

  const handleTogglePlay = useCallback(() => {
    setIsPlayingTour((prev) => !prev);
  }, []);

  // When user selects a tour from dropdown
  const handleSelectTour = useCallback((tourId: string | null) => {
    setSelectedTourId(tourId);
    setCurrentStopIndex(0);
    setIsPlayingTour(tourId !== null);
  }, []);

  // When user clicks a 3D pin or chooses a search item
  const handleSelectPlace = useCallback((place: HeritagePlace) => {
    setSelectedPlace(place);
  }, []);

  // Category filter toggle
  const handleToggleCategory = useCallback((category: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        if (next.size > 1) next.delete(category); // Keep at least one category active
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  // Reset to overview
  const handleResetView = useCallback(() => {
    setSelectedPlace(null);
    setSelectedTourId(null);
    setIsPlayingTour(false);
    setResetViewTrigger((prev) => prev + 1);
  }, []);

  // Auto-tour timer loop
  useEffect(() => {
    if (!isPlayingTour || !activeTourStop) return;

    const dwellMs = (activeTourStop.dwellDurationSeconds || 8) * 1000;
    const timer = setTimeout(() => {
      handleNextStop();
    }, dwellMs);

    return () => clearTimeout(timer);
  }, [isPlayingTour, activeTourStop, handleNextStop]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlace(null);
      } else if (e.key === ' ' && activeTour) {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.key === 'ArrowRight' && activeTour) {
        handleNextStop();
      } else if (e.key === 'ArrowLeft' && activeTour) {
        handlePrevStop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTour, handleTogglePlay, handleNextStop, handlePrevStop]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* 3D WebGL Map Scene */}
      <MapCanvas
        onSelectPlace={handleSelectPlace}
        selectedPlace={selectedPlace}
        activeCategories={activeCategories}
        showDistricts={showDistricts}
        activeTourStop={activeTourStop}
        resetViewTrigger={resetViewTrigger}
      />

      {/* Top HUD Header */}
      <TopBar
        onSelectPlace={handleSelectPlace}
        selectedTourId={selectedTourId}
        onSelectTour={handleSelectTour}
        onResetView={handleResetView}
        placesCount={PLACES_GEO_DATA.length}
      />

      {/* Bottom Floating Tour & Layer Dock */}
      <TourDock
        activeTour={activeTour}
        currentStopIndex={currentStopIndex}
        isPlaying={isPlayingTour}
        onTogglePlay={handleTogglePlay}
        onNextStop={handleNextStop}
        onPrevStop={handlePrevStop}
        onSelectStop={handleSelectStop}
        activeCategories={activeCategories}
        onToggleCategory={handleToggleCategory}
        showDistricts={showDistricts}
        onToggleDistricts={() => setShowDistricts((prev) => !prev)}
      />

      {/* Slide-in Place Detail Panel */}
      <PlaceDetailModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
        onFlyTo={(place) => setSelectedPlace(place)}
      />
    </main>
  );
}
