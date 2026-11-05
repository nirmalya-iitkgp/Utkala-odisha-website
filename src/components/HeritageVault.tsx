import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, Landmark, ChevronRight, Hash, Filter } from 'lucide-react';
import { HeritageItem, Lang } from '../data/heritage';

interface HeritageVaultProps {
  items: HeritageItem[];
  lang: Lang;
  title: string;
}

export default function HeritageVault({ items, lang, title }: HeritageVaultProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return items.filter(item => 
      item.name[lang].toLowerCase().includes(q) ||
      item.name.en.toLowerCase().includes(q)
    );
  }, [items, lang, searchQuery]);

  return (
    <div className="p-6 md:p-12 pb-32 max-w-7xl mx-auto h-full flex flex-col">
      <header className="mb-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <p className="text-[10px] font-serif italic tracking-[0.4em] text-[#F27D26] uppercase">Collections of Antiquity</p>
            <h1 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-[0.85]">
              {title}
            </h1>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity" size={16} />
            <input 
              type="text"
              placeholder={lang === 'or' ? 'ଅନୁସନ୍ଧାନ କରନ୍ତୁ...' : lang === 'hi' ? 'खोजें...' : 'Filter registry...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-b border-black/10 py-3 pl-12 pr-6 w-full md:w-80 font-serif italic text-lg focus:outline-none focus:border-[#F27D26] transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
           <div className="flex items-center gap-3">
             <Hash size={12} className="text-[#F27D26]" />
             <span>Folios: {items.length}</span>
           </div>
           <div className="flex items-center gap-3">
             <Filter size={12} className="text-[#F27D26]" />
             <span>Filtered: {filteredItems.length}</span>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/5">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                const url = item.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.en)}`;
                window.open(url, '_blank');
              }}
              className="group bg-transparent border-r border-b border-black/5 p-10 hover:bg-[#F27D26] hover:text-white transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[9px] font-serif italic opacity-20">
                {item.category.toUpperCase().slice(0, 3)}—{idx + 100}
              </div>
              
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full border border-black/5 group-hover:border-white/20 flex items-center justify-center transition-colors">
                   <Landmark size={18} className="opacity-30 group-hover:opacity-100" />
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-serif font-bold leading-tight tracking-tight ${lang !== 'en' ? 'text-xl' : ''}`}>
                  {item.name[lang]}
                </h3>
                
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Read Archive <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 opacity-20 text-center">
          <Info size={48} className="mb-4" />
          <p className="text-xl font-bold uppercase tracking-widest">No Records Match Query</p>
        </div>
      )}
    </div>
  );
}
