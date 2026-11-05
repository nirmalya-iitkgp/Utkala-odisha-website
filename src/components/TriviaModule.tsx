import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRIVIA_DATA, UI_STRINGS, Lang } from '../data/heritage';
import { BrainCircuit, CheckCircle2, XCircle, Info, RotateCcw } from 'lucide-react';

export default function TriviaModule({ lang }: { lang: Lang }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showDive, setShowDive] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const isOdia = lang === 'or';
  const isHindi = lang === 'hi';
  const fontClass = isOdia ? 'font-odia' : isHindi ? 'font-hindi' : '';

  const current = TRIVIA_DATA[currentIdx];

  const handleSelect = (optEn: string) => {
    if (selectedOption || isFinished) return;
    setSelectedOption(optEn);
    if (optEn === current.answer.en) setScore(s => s + 1);
    setShowDive(true);
  };

  const next = () => {
    if (currentIdx < TRIVIA_DATA.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setShowDive(false);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowDive(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className={`max-w-2xl mx-auto text-center py-24 px-6 bg-white rounded-3xl border border-[#1414141a] shadow-xl ${fontClass}`}>
        <BrainCircuit size={48} className="mx-auto mb-8 text-[#F27D26]" />
        <h2 className={`text-4xl font-black uppercase tracking-tighter mb-4 ${isOdia || isHindi ? '' : 'font-serif'}`}>
          {lang === 'en' ? 'Journey Complete' : lang === 'or' ? 'ଅଭିଯାନ ସମ୍ପୂର୍ଣ୍ଣ' : 'यात्रा पूर्ण'}
        </h2>
        <p className="text-xl opacity-60 mb-12">
          {lang === 'en' 
            ? `You discovered ${score} out of ${TRIVIA_DATA.length} heritage insights correctly.` 
            : lang === 'or' 
              ? `ଆପଣ ${TRIVIA_DATA.length} ରୁ ${score} ଟି ପ୍ରଶ୍ନର ସଠିକ୍ ଉତ୍ତର ଦେଇଛନ୍ତି ।` 
              : `आपने ${TRIVIA_DATA.length} में से ${score} सही उत्तर दिए हैं।`}
        </p>
        <button 
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] text-white rounded-full text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          <RotateCcw size={14} />
          {lang === 'en' ? 'Start Over' : lang === 'or' ? 'ପୁଣି ଆରମ୍ଭ କରନ୍ତୁ' : 'पुनः आरंभ करें'}
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl mx-auto ${fontClass}`}>
      <header className="mb-20 border-b border-[#1414141a] pb-10">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <p className="text-[10px] uppercase font-serif italic font-bold tracking-[0.4em] text-[#F27D26]">
              {lang === 'en' ? 'The Scholar\'s Quest' : lang === 'or' ? 'ଜିଜ୍ଞାସା' : 'खोज'}
            </p>
            <h2 className={`text-6xl font-serif font-black uppercase tracking-tighter`}>
              {lang === 'en' ? 'Trivia' : lang === 'or' ? 'ପ୍ରଶ୍ନୋତ୍ତର' : 'प्रश्नोत्तरी'}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">{lang === 'en' ? 'Manuscript Progress' : lang === 'or' ? 'ପ୍ରଗତି' : 'प्रगति'}</span>
            <div className="text-3xl font-serif italic font-black text-[#F27D26]">{currentIdx + 1}<span className="text-sm opacity-20 mx-1">/</span>{TRIVIA_DATA.length}</div>
          </div>
        </div>
      </header>

      <div className="space-y-16">
        <motion.h3 
          key={currentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-3xl md:text-4xl font-serif font-medium leading-[1.2] italic opacity-90`}
        >
          {current.question[lang]}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black/5">
          {current.options.en.map((optEn, idx) => {
            const optDisplay = current.options[lang][idx];
            const isCorrect = optEn === current.answer.en;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(optEn)}
                className={`p-8 text-left border-r border-b border-black/5 transition-all duration-500 group relative overflow-hidden h-32 flex items-center ${
                  selectedOption === optEn 
                    ? isCorrect 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                    : selectedOption && isCorrect
                      ? 'bg-green-50'
                      : 'bg-transparent hover:bg-[#F27D26] hover:text-white'
                }`}
              >
                 <div className="flex items-center gap-6 relative z-10 w-full">
                    <div className={`w-10 h-10 rounded-full border border-current flex items-center justify-center text-[10px] font-black ${selectedOption === optEn ? 'opacity-100' : 'opacity-20'}`}>
                       {isCorrect && selectedOption ? <CheckCircle2 size={20} /> : selectedOption === optEn ? <XCircle size={20} /> : (idx + 1)}
                    </div>
                    <span className={`text-xl font-serif font-bold`}>{optDisplay}</span>
                 </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showDive && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white border border-black/10 p-12 space-y-8 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] rotate-12 -translate-y-8 translate-x-8">
                 <Info size={120} />
              </div>
              
              <div className="flex items-center gap-4 text-[10px] uppercase font-serif italic font-bold tracking-[0.4em] text-[#F27D26]">
                <div className="w-8 h-px bg-[#F27D26]/30" />
                {UI_STRINGS.common.deepDive[lang]}
              </div>
              <p className={`text-2xl leading-relaxed italic text-black/70 font-serif border-l border-black/10 pl-10 h-min flex flex-col justify-center`}>
                {current.dive[lang]}
              </p>
              <button 
                onClick={next}
                className="mt-12 w-full py-6 bg-[#141414] text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-[#F27D26] transition-all"
              >
                {lang === 'en' ? 'Continue Chronicle →' : lang === 'or' ? 'ଆଗକୁ ବଢ଼ନ୍ତୁ →' : 'अगला बिंदु →'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
