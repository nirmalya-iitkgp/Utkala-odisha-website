import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Layers,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
  TreePine,
  Landmark,
} from 'lucide-react';
import { GuidedTour, TourStop } from '../../data/toursData';

export interface TourDockProps {
  activeTour: GuidedTour | null;
  currentStopIndex: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextStop: () => void;
  onPrevStop: () => void;
  onSelectStop: (index: number) => void;
  activeCategories: Set<string>;
  onToggleCategory: (category: string) => void;
  showDistricts: boolean;
  onToggleDistricts: () => void;
}

export default function TourDock({
  activeTour,
  currentStopIndex,
  isPlaying,
  onTogglePlay,
  onNextStop,
  onPrevStop,
  onSelectStop,
  activeCategories,
  onToggleCategory,
  showDistricts,
  onToggleDistricts,
}: TourDockProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const currentStop: TourStop | undefined = activeTour?.stops[currentStopIndex];

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-2xl pointer-events-none transition-all duration-300">
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
        {/* Minimize / Expand Bar */}
        <div className="px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-semibold text-slate-100">
              {activeTour ? activeTour.name : 'Odisha 3D Layers & Exploration'}
            </span>
            {activeTour && (
              <span className="text-[11px] text-amber-400/90 font-serif">
                ({activeTour.odiaName})
              </span>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800/60 transition-colors"
            title={isCollapsed ? 'Expand Controls' : 'Minimize Controls'}
          >
            {isCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Content */}
        {!isCollapsed && (
          <div className="p-3 sm:p-4 space-y-3">
            {/* Tour Story & Controls (If Tour Active) */}
            {activeTour && currentStop && (
              <div className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/20 space-y-2.5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-medium">
                        STOP {currentStopIndex + 1} OF {activeTour.stops.length}
                      </span>
                      <h3 className="text-sm font-bold text-white">{currentStop.title}</h3>
                    </div>
                    <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                      {currentStop.subtitle}
                    </p>
                  </div>

                  {/* Playback action buttons */}
                  <div className="flex items-center space-x-1 shrink-0 ml-2">
                    <button
                      onClick={onPrevStop}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Previous Stop"
                    >
                      <SkipBack className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onTogglePlay}
                      className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-transform active:scale-95 shadow-md"
                      title={isPlaying ? 'Pause Auto-Tour' : 'Start Auto-Tour'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <button
                      onClick={onNextStop}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Next Stop"
                    >
                      <SkipForward className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {currentStop.description}
                </p>

                {/* Stop Waypoint Dots */}
                <div className="flex items-center space-x-1.5 pt-1 overflow-x-auto">
                  {activeTour.stops.map((stop, idx) => (
                    <button
                      key={stop.placeId}
                      onClick={() => onSelectStop(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentStopIndex
                          ? 'w-6 bg-amber-400'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      title={stop.title}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Category Filters & District Layer Toggles */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
              {/* Category Pills */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <button
                  onClick={() => onToggleCategory('built')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    activeCategories.has('built')
                      ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 opacity-60'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5 text-amber-400" />
                  <span>Built Temples</span>
                </button>

                <button
                  onClick={() => onToggleCategory('natural')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    activeCategories.has('natural')
                      ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-200'
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 opacity-60'
                  }`}
                >
                  <TreePine className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Nature & Falls</span>
                </button>

                <button
                  onClick={() => onToggleCategory('cultural')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    activeCategories.has('cultural')
                      ? 'bg-pink-500/20 border-pink-500/60 text-pink-200'
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 opacity-60'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Culture & Craft</span>
                </button>
              </div>

              {/* District Borders Switch */}
              <button
                onClick={onToggleDistricts}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  showDistricts
                    ? 'bg-indigo-500/20 border-indigo-500/60 text-indigo-200'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>30 Districts</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
