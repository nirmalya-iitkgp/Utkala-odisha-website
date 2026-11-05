import { motion } from 'motion/react';
import { HERO_HOOKS, UI_STRINGS, Lang } from '../data/heritage';
import { ArrowRight } from 'lucide-react';
import OdishaLogo from './OdishaLogo';

export default function Hero({ lang }: { lang: Lang }) {
  const isOdia = lang === 'or';
  const isHindi = lang === 'hi';

  return (
    <div className={`min-h-screen flex flex-col justify-center p-12 bg-[#0A0A0A] text-white overflow-hidden relative ${isOdia ? 'font-odia' : isHindi ? 'font-hindi' : ''}`}>
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,rgba(242,125,38,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-6 mb-12">
          <OdishaLogo className="w-16 h-16" />
          <div className="h-px w-24 bg-white/20" />
        </div>
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#F27D26] mb-6 font-bold"
          >
            {lang === 'en' ? 'The Immortal Odyssey' : lang === 'or' ? 'ମହାନ୍ ଐତିହ୍ୟ ଅଭିଯାନ' : 'महान विरासत यात्रा'}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-[12vw] md:text-[8vw] font-serif font-black leading-[0.85] uppercase tracking-tighter ${isOdia ? 'leading-[1.1]' : ''}`}
          >
            {UI_STRINGS.hero.title[lang]} <br />
            <span className="text-[#F27D26] italic font-normal normal-case tracking-normal">{UI_STRINGS.hero.subtitle[lang]}</span>
          </motion.h1>

          <div className="mt-16 max-w-2xl border-l-[1px] border-white/20 pl-8 py-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-4 font-black text-[#F27D26]">The Archivist's Note</h3>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-serif italic font-light">
              {lang === 'en' 
                ? "This archive is a digital sanctuary for a civilization spanning millennia—uniting the silent stone of temples with the vibrant resonance of living traditions. Here, history is not a collection of dates, but a living topography of the human spirit."
                : lang === 'or'
                ? "ଏହି ସୂଚୀ କଳିଙ୍ଗର ପୁରାତନ ମନ୍ଦିର ଓ କୀର୍ତ୍ତିରାଜିର ଏକ ସମନ୍ୱିତ ତଥ୍ୟ କୋଷ । ଏଠାରେ ସ୍ଥାପତ୍ୟକଳା, ଜନଶ୍ରୁତି ଏବଂ ପ୍ରତ୍ନତାତ୍ତ୍ୱିକ ପ୍ରମାଣ ଏକତ୍ରିତ କରାଯାଇଛି ।"
                : "यह संग्रह हजारों वर्षों की सभ्यता के लिए एक डिजिटल अभयारण्य है—मंदिरों के मौन पत्थर को जीवित परंपराओं की जीवंत प्रतिध्वनि के साथ जोड़ता है।"}
            </p>
          </div>
        </header>

        <section className="mb-32 flex flex-wrap gap-12 md:gap-32">
           <div className="space-y-2">
             <p className="text-[9px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">Entries in Vault</p>
             <p className="text-3xl md:text-5xl font-serif italic text-white/90">290</p>
           </div>
           <div className="space-y-2">
             <p className="text-[9px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">Shrines Audited</p>
             <p className="text-3xl md:text-5xl font-serif italic text-white/90">150</p>
           </div>
           <div className="space-y-2">
             <p className="text-[9px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">Epochs Mapped</p>
             <p className="text-3xl md:text-5xl font-serif italic text-white/90">21</p>
           </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          {HERO_HOOKS.map((hook, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-6 group"
            >
              <div className="flex items-center gap-4">
                 <span className="text-[10px] font-mono text-[#F27D26]">0{index + 1}</span>
                 <div className="h-[1px] flex-1 bg-white/20 group-hover:bg-[#F27D26] transition-colors" />
              </div>
              <div>
                <p className={`text-xl font-medium leading-tight mb-4 italic ${isOdia || isHindi ? '' : 'font-serif'}`}>
                  "{hook.fact[lang]}"
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                  <ArrowRight size={12} className="text-[#F27D26]" />
                  <span>{hook.context[lang]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      <div className="absolute right-12 bottom-12 text-[10px] uppercase tracking-[0.2em] opacity-30 text-right">
        {lang === 'en' ? 'Odisha\'s Living Legacy' : lang === 'or' ? 'ଓଡ଼ିଶାର ଜୀବନ୍ତ ଐତିହ୍ୟ' : 'ओडिशा की जीवंत विरासत'} <br />
        © MMXXVI
      </div>
    </div>
  );
}
