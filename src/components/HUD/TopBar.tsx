import React, { useState, useRef, useEffect } from 'react';
import { Search, Compass, RotateCcw, X, Layers } from 'lucide-react';
import OdishaLogo from '../OdishaLogo';
import { PLACES_GEO_DATA, HeritagePlace } from '../../data/placesGeoData';
import { GUIDED_TOURS, GuidedTour } from '../../data/toursData';

export interface TopBarProps {
  onSelectPlace: (place: HeritagePlace) => void;
  selectedTourId: string | null;
  onSelectTour: (tourId: string | null) => void;
  onResetView: () => void;
  placesCount: number;
}

export default function TopBar({
  onSelectPlace,
  selectedTourId,
  onSelectTour,
  onResetView,
  placesCount,
}: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const activeTour = GUIDED_TOURS.find((t) => t.id === selectedTourId);

  // Filter matching places by name, odiaName, district, or subcategory
  const filteredPlaces = searchQuery.trim()
    ? PLACES_GEO_DATA.filter((place) => {
        const query = searchQuery.toLowerCase();
        return (
          place.name.toLowerCase().includes(query) ||
          place.odiaName.includes(query) ||
          place.district.toLowerCase().includes(query) ||
          place.subcategory.toLowerCase().includes(query) ||
          place.category.toLowerCase().includes(query)
        );
      }).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-3 sm:px-6 py-3 flex items-center justify-between pointer-events-none bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-[2px]">
      {/* Brand & Identity */}
      <div className="flex items-center space-x-3 pointer-events-auto">
        <div className="p-1.5 rounded-xl bg-slate-900/80 border border-amber-500/30 shadow-lg flex items-center justify-center">
          <OdishaLogo className="w-7 h-7 sm:w-8 sm:h-8" color="#F59E0B" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-serif">
              <span>Utkala</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-sans font-medium border border-amber-500/30">
                3D Map
              </span>
            </h1>
          </div>
          <p className="text-[11px] text-slate-300 hidden sm:block tracking-wide">
            Interactive Topographical Heritage Explorer of Odisha
          </p>
        </div>
      </div>

      {/* Center & Right Controls */}
      <div className="flex items-center space-x-2 pointer-events-auto">
        {/* Quick Search */}
        <div ref={searchRef} className="relative">
          <div className="flex items-center bg-slate-900/85 border border-slate-700/60 rounded-xl px-2.5 py-1.5 shadow-md focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-1.5 shrink-0" />
            <input
              type="text"
              placeholder="Search temple, lake, art..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none w-28 sm:w-48 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-200 ml-1 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchOpen && filteredPlaces.length > 0 && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md z-40 max-h-80 overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-slate-400 border-b border-slate-800 bg-slate-950/50">
                Matching Heritage Sites ({filteredPlaces.length})
              </div>
              {filteredPlaces.map((place) => (
                <button
                  key={place.id}
                  onClick={() => {
                    onSelectPlace(place);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-amber-500/10 border-b border-slate-800/50 last:border-0 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-amber-300">
                      {place.name}
                    </div>
                    <div className="text-[11px] text-amber-400/80 font-serif">
                      {place.odiaName} · <span className="text-slate-400">{place.district}</span>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                      place.category === 'built'
                        ? 'bg-amber-500/20 text-amber-300'
                        : place.category === 'natural'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-pink-500/20 text-pink-300'
                    }`}
                  >
                    {place.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Guided Tour Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsTourDropdownOpen(!isTourDropdownOpen)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border shadow-md transition-all ${
              selectedTourId
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                : 'bg-slate-900/85 border-slate-700/60 text-slate-200 hover:border-slate-600'
            }`}
          >
            <Compass className={`w-3.5 h-3.5 ${selectedTourId ? 'text-amber-400 animate-spin-slow' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">
              {activeTour ? activeTour.name : 'Guided Tours'}
            </span>
            <span className="sm:hidden">Tours</span>
          </button>

          {isTourDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md z-40">
              <div className="px-3 py-2 text-[10px] uppercase font-semibold text-slate-400 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between">
                <span>Select Scenic 3D Tour</span>
                {selectedTourId && (
                  <button
                    onClick={() => {
                      onSelectTour(null);
                      setIsTourDropdownOpen(false);
                    }}
                    className="text-amber-400 hover:text-amber-300 text-[10px]"
                  >
                    Exit Tour
                  </button>
                )}
              </div>
              <div className="divide-y divide-slate-800/60">
                {GUIDED_TOURS.map((tour) => (
                  <button
                    key={tour.id}
                    onClick={() => {
                      onSelectTour(tour.id);
                      setIsTourDropdownOpen(false);
                    }}
                    className={`w-full text-left p-3 hover:bg-slate-800/60 transition-colors flex flex-col ${
                      selectedTourId === tour.id ? 'bg-amber-500/10 border-l-2 border-amber-400' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-100">{tour.name}</span>
                      <span className="text-[10px] text-amber-400 font-serif">{tour.odiaName}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{tour.tagline}</span>
                    <span className="text-[9px] text-slate-500 mt-1">{tour.stops.length} scenic waypoints</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bird's eye reset button */}
        <button
          onClick={onResetView}
          title="Reset to regional overview"
          className="p-2 rounded-xl bg-slate-900/85 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white shadow-md transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
