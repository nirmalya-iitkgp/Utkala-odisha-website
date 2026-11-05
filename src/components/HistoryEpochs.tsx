import React, { useMemo } from 'react';
import { HISTORY_TIMELINE, UI_STRINGS, Lang } from '../data/heritage';
import { motion } from 'motion/react';
import { Clock, Calendar } from 'lucide-react';

const ERAS = [
  { id: 'ancient', title: { en: 'Ancient Eras (Pre-1500)', or: 'ପ୍ରାଚୀନ ଯୁଗ', hi: 'प्राचीन काल' } },
  { id: 'medieval', title: { en: 'Medieval Eras (1500-1900)', or: 'ମଧ୍ୟ ଯୁଗ', hi: 'मध्यकालीन काल' } },
  { id: 'recent', title: { en: 'Recent Eras (Post-1900)', or: 'ଆଧୁନିକ ଯୁଗ', hi: 'हाल के काल' } }
];

export default function HistoryEpochs({ lang }: { lang: Lang }) {
  const isOdia = lang === 'or';
  const isHindi = lang === 'hi';
  const fontClass = isOdia ? 'font-odia' : isHindi ? 'font-hindi' : '';

  const timelineByEra = useMemo(() => {
    return ERAS.map(era => ({
      ...era,
      events: HISTORY_TIMELINE.filter(item => item.era === era.id)
    }));
  }, []);

  return (
    <div className={`max-w-7xl mx-auto py-12 md:py-24 px-6 md:px-12 ${fontClass}`}>
      <header className="mb-12 md:mb-24 border-b border-[#1414141a] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F27D26]/10 text-[#F27D26] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
          <Clock size={12} />
          {lang === 'en' ? 'The Archival Timeline' : lang === 'or' ? 'କାଳଗଣନା' : 'अभिलेखागार समयरेखा'}
        </div>
        <h2 className={`text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] ${isOdia || isHindi ? '' : 'font-serif'}`}>
          {UI_STRINGS.tabs.history[lang]}
        </h2>
      </header>

      <div className="space-y-32">
        {timelineByEra.map((era) => (
          <section key={era.id} className="space-y-16">
            <header className="flex items-center gap-6">
              <div className="h-px flex-1 bg-black/10" />
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#F27D26]">
                {era.title[lang]}
              </h3>
              <div className="h-px flex-1 bg-black/10" />
            </header>

            <div className="grid grid-cols-1 gap-0 border-t border-black/5">
              {era.events.map((event, idx) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    const url = event.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(event.name.en)}`;
                    window.open(url, '_blank');
                  }}
                  className="group flex flex-col md:flex-row items-baseline gap-12 py-12 px-8 border-b border-black/5 hover:bg-white transition-colors cursor-pointer"
                >
                  <div className="w-48 shrink-0 space-y-2">
                    <span className="text-[10px] font-serif italic opacity-30 block">Chronicle_{idx + 1}</span>
                    <span className="text-4xl font-serif font-black text-[#F27D26] italic">
                      {event.year || '---'}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h4 className="text-3xl md:text-4xl font-serif font-bold tracking-tight group-hover:text-[#F27D26] transition-colors leading-none">
                      {event.name[lang]}
                    </h4>
                  </div>

                  <div className="hidden md:block">
                    <div className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center group-hover:border-[#F27D26] transition-colors">
                      <Calendar size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
