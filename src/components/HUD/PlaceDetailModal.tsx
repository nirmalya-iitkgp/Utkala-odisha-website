import React, { useEffect, useState } from 'react';
import { X, ExternalLink, MapPin, Mountain, Calendar, Sparkles, Navigation } from 'lucide-react';
import { HeritagePlace } from '../../data/placesGeoData';
import { fetchWikiSummary, WikiSummaryResult } from '../../services/wikimediaService';

export interface PlaceDetailModalProps {
  place: HeritagePlace | null;
  onClose: () => void;
  onFlyTo: (place: HeritagePlace) => void;
}

export default function PlaceDetailModal({ place, onClose, onFlyTo }: PlaceDetailModalProps) {
  const [wikiData, setWikiData] = useState<WikiSummaryResult | null>(null);
  const [isLoadingWiki, setIsLoadingWiki] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!place) {
      setWikiData(null);
      setImgError(false);
      return;
    }

    setImgError(false);
    setIsLoadingWiki(true);
    let isCancelled = false;

    fetchWikiSummary(place.wikiTitle)
      .then((data) => {
        if (!isCancelled) {
          setWikiData(data);
          setIsLoadingWiki(false);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setIsLoadingWiki(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [place]);

  if (!place) return null;

  // Use Wikimedia Commons picture from API if available, else curated verified URL
  const displayImageUrl =
    !imgError && (wikiData?.originalImageUrl || wikiData?.thumbnailUrl || place.commonsImgUrl);

  return (
    <aside
      className="fixed inset-y-0 right-0 w-full sm:w-[440px] z-40 bg-slate-900/95 backdrop-blur-2xl border-l border-slate-700/60 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-250 select-text"
      role="dialog"
      aria-labelledby="place-modal-title"
    >
      {/* Top Banner & Photo */}
      <div className="relative w-full h-52 sm:h-56 bg-slate-950 shrink-0 overflow-hidden">
        {displayImageUrl ? (
          <img
            src={displayImageUrl}
            alt={place.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 text-center">
            <Sparkles className="w-8 h-8 text-amber-400 mb-2" />
            <span className="text-xs text-amber-200/80 font-medium">
              Odisha Cultural & Natural Heritage Archive
            </span>
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-lg transition-transform active:scale-95"
          title="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Region Badge */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-semibold border backdrop-blur-md ${
              place.category === 'built'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : place.category === 'natural'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-pink-500/20 text-pink-300 border-pink-500/40'
            }`}
          >
            {place.subcategory}
          </span>

          <button
            onClick={() => onFlyTo(place)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg transition-all active:scale-95"
            title="Focus 3D camera on this location"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Focus 3D</span>
          </button>
        </div>
      </div>

      {/* Details Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {/* Title & Odia Name */}
        <div>
          <h2 id="place-modal-title" className="text-xl font-bold text-white tracking-tight">
            {place.name}
          </h2>
          <div className="text-base text-amber-400 font-serif font-medium mt-0.5">
            {place.odiaName}
          </div>
        </div>

        {/* Geographic Meta Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">District: <strong className="text-white">{place.district}</strong></span>
          </div>

          <div className="flex items-center space-x-2 text-slate-300">
            <Mountain className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Elev: <strong className="text-white">{place.elevationMeters}m</strong> ASL</span>
          </div>

          {place.eraOrPeriod && (
            <div className="col-span-2 flex items-center space-x-2 text-slate-300 pt-1 border-t border-slate-800/60">
              <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Era / Period: <strong className="text-white">{place.eraOrPeriod}</strong></span>
            </div>
          )}
        </div>

        {/* Description / Wikipedia Extract */}
        <div className="space-y-1.5">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Historical Overview
          </h3>
          <p className="text-xs text-slate-200 leading-relaxed">
            {wikiData?.extract || place.description}
          </p>
        </div>

        {/* Key Highlights */}
        {place.highlights && place.highlights.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Key Highlights
            </h3>
            <ul className="space-y-1.5">
              {place.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Wikipedia Outbound Citation */}
        <div className="pt-2 border-t border-slate-800">
          <a
            href={place.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-xs text-slate-300 hover:text-white transition-all group"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif italic font-semibold text-amber-300 text-sm">W</span>
              <span>Read Full Article on Wikipedia</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300" />
          </a>
        </div>
      </div>
    </aside>
  );
}
