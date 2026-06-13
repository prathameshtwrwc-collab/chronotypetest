import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  content: { heroTitle: string; heroSubtitle: string };
  onExplore: () => void;
}

export function Hero({ content, onExplore }: HeroProps) {
  return (
    <section id="hero" className="min-h-[100dvh] relative flex items-center justify-center pt-20 bg-[#FAF8F5] overflow-hidden">
      {/* Subtle celestial background */}
      <div className="absolute inset-0 bg-[radial-gradient(#EDE8E0_0.8px,transparent_1px)] bg-[length:5px_5px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <div className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/70 text-xs tracking-[3px] font-medium text-[#0F766E] border border-[#EDE8E0]">
          A PREMIUM SLEEP AWARENESS ECOSYSTEM
        </div>
        
        <h1 className="text-display text-[#0A1421] tracking-[-0.045em] mb-6">
          {content.heroTitle}<br />
          <span className="text-[#0F766E]">{content.heroSubtitle}</span>
        </h1>
        
        <p className="text-hero-sub max-w-[620px] mx-auto text-[#334155] mb-12">
          Understand your biology. Align your life. Master the one process that determines everything.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExplore}
            className="btn-premium group inline-flex items-center justify-center gap-3 px-10 h-14 rounded-2xl bg-[#0A1421] text-white font-medium text-sm tracking-wide"
          >
            BEGIN YOUR JOURNEY <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </button>
          <button 
            onClick={() => document.getElementById('cycles')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium inline-flex items-center justify-center gap-3 px-9 h-14 rounded-2xl border border-[#C9C2B5] text-[#0A1421] font-medium text-sm tracking-wide hover:bg-white"
          >
            <Play className="w-4 h-4" /> WATCH THE SCIENCE
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-8 text-xs text-[#64748B] tracking-widest">
            <div>TRUSTED BY</div>
            <div className="h-px w-6 bg-[#C9C2B5]" />
            <div>LEADING INSTITUTIONS</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] tracking-[2px] text-[#64748B]">
        SCROLL TO BEGIN <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-px w-px bg-[#0F766E]" />
      </div>
    </section>
  );
}
