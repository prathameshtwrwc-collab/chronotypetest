import { motion } from 'framer-motion';
import { sleepCycleStages } from '../../lib/content';

export function SleepCycles() {
  return (
    <section id="cycles" className="section-dark py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-y-6">
          <div>
            <div className="uppercase text-[#67E8F9] tracking-[3px] text-xs mb-3">THE BIOLOGY</div>
            <h2 className="text-display tracking-[-0.04em] text-white">Understanding Sleep Cycles</h2>
          </div>
          <p className="max-w-sm text-[#A5B4C2] text-[15px]">Each night we move through four distinct stages. Together they form the architecture of restoration.</p>
        </div>

        {/* Animated Cycle Visual - Horizontal Storytelling */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row gap-3">
            {sleepCycleStages.map((stage, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.06 }}
                className="flex-1 bg-[#121C2E] rounded-3xl p-9 group border border-white/5"
              >
                <div className="flex items-baseline justify-between mb-9">
                  <div>
                    <div className="font-mono text-[10px] tracking-[4px] text-[#67E8F9]">{stage.name}</div>
                    <div className="text-7xl font-semibold text-white tracking-[-4.5px] mt-1">{stage.pct}<span className="text-2xl align-super font-normal">%</span></div>
                  </div>
                  <div className="text-right text-[#64748B] text-sm">{index + 1} / 4</div>
                </div>
                
                <div className="text-[#A5B4C2] leading-tight text-[15px]">{stage.desc}</div>
                
                <div className="mt-8 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div 
                    className="h-1.5 rounded-full bg-[#67E8F9]" 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${stage.pct}%` }} 
                    transition={{ duration: 1.3, delay: 0.2 }} 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-[#64748B] tracking-[1px]">ONE CYCLE ≈ 90 MINUTES • 4–6 CYCLES PER NIGHT</div>
      </div>
    </section>
  );
}
