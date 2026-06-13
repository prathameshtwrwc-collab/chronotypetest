import { motion } from 'framer-motion';
import { ArrowRight, Play, Moon, Sparkles, Stars } from 'lucide-react';

interface HeroProps {
  content: { heroTitle: string; heroSubtitle: string };
  onExplore: () => void;
}

export function Hero({ content, onExplore }: HeroProps) {
  return (
    <section id="hero" className="min-h-[100dvh] relative flex flex-col justify-center pt-20 pb-48 bg-[#FAF8F5] overflow-hidden">
      {/* Premium celestial background with sophisticated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#EDE8E0_0.8px,transparent_1px)] bg-[length:5px_5px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0A1421_0%,transparent_45%)] opacity-4" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(165deg,#FAF8F5_0%,transparent_30%,transparent_70%,#FAF8F5_100%)]" />
      </div>
      
      {/* Sophisticated animated ambient layers */}
      <motion.div 
        className="absolute top-1/6 right-1/5 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#0F766E]/1.5 to-transparent blur-3xl"
        animate={{ scale: [1, 1.06, 1], opacity: [0.015, 0.035, 0.015] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/7 w-80 h-80 rounded-full bg-gradient-to-tl from-[#67E8F9]/2 to-transparent blur-2xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-[26rem] h-[26rem] border-l border-l-[#EDE8E0] opacity-15" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-t border-t-[#EDE8E0] opacity-12" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-9">
        {/* Premium floating badge */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/85 backdrop-blur-xl border border-[#EDE8E0] text-xs tracking-[4px] font-medium text-[#0F766E] shadow-lg">
            <Sparkles className="w-4 h-4" />
            A PREMIUM SLEEP AWARENESS ECOSYSTEM
            <Stars className="w-3 h-3 opacity-60" />
          </div>
        </motion.div>
        
        {/* Display headline with premium layered typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-14"
        >
          <h1 className="text-display text-[#0A1421] tracking-[-0.045em] mb-3 leading-[0.92]">
            {content.heroTitle}
          </h1>
          <div className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-semibold tracking-[-0.01em] text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#67E8F9]">
            {content.heroSubtitle}
          </div>
        </motion.div>
        
        {/* Premium description with enhanced glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="glass rounded-3xl p-10 border border-[#EDE8E0]/60 bg-white/90 text-center shadow-xl">
            <p className="text-hero-sub text-[#334155] leading-relaxed font-medium">
              Understand your biology. Align your life. Master the one process that determines everything.
            </p>
          </div>
        </motion.div>

        {/* Premium CTA buttons with refined styling */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
        >
          <button 
            onClick={onExplore}
            className="btn-premium group relative inline-flex items-center justify-center gap-4 px-16 h-16 rounded-full bg-[#0A1421] text-white font-semibold text-[15px] tracking-[2px] hover:bg-gradient-to-r hover:from-[#0F766E] hover:to-[#0D9488] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(15,118,110,0.25)] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">BEGIN YOUR JOURNEY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#67E8F9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
            />
          </button>
          <button 
            onClick={() => document.getElementById('cycles')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium group inline-flex items-center justify-center gap-4 px-14 h-16 rounded-full border-2 border-[#0A1421]/20 text-[#0A1421] font-semibold text-[15px] tracking-[2px] bg-white/95 hover:bg-white hover:border-[#0F766E]/50 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>WATCH THE SCIENCE</span>
          </button>
        </motion.div>

        {/* Premium trust indicator with elegant divider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-10"
        >
          <div className="text-xs font-semibold tracking-[2.5px] text-[#0A1421] text-center">TRUSTED BY</div>
          <div className="w-20 h-px bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#67E8F9] rounded-full shadow-sm" />
          <div className="text-xs font-semibold tracking-[2.5px] text-[#0A1421] text-center">LEADING INSTITUTIONS</div>
        </motion.div>
      </div>

      {/* Premium scroll indicator with distinctive design */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[12px] tracking-[3.5px] font-medium text-[#64748B] uppercase">SCROLL TO BEGIN</span>
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="relative"
        >
          <div className="w-12 h-14 rounded-full border-2 border-[#EDE8E0] flex items-center justify-center bg-white/60 backdrop-blur-md">
            <motion.div 
              animate={{ y: [0, 22, 0], opacity: [0.8, 1, 0.8] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2.5 rounded-full bg-gradient-to-b from-[#0F766E] to-[#67E8F9]" 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle rotating moon accent */}
      <motion.div 
        className="absolute top-20 left-20 w-20 h-20 rounded-3xl opacity-5"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Moon className="w-full h-full text-[#0F766E]" />
      </motion.div>
    </section>
  );
}