import { motion } from 'framer-motion';
import { sleepCycleStages } from '../../lib/content';
import { Moon, Sun, Cloud, Sparkles } from 'lucide-react';

export function SleepCycles() {
  const stageIcons = [Moon, Sun, Cloud, Sparkles];
  const stageColors = ['#67E8F9', '#A5F3FC', '#0D9488', '#0F766E'];
  
  return (
    <section id="cycles" className="section-dark py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-y-6">
          <div>
            <div className="uppercase text-[#67E8F9] tracking-[4px] text-[10px] mb-3">THE ARCHITECTURE</div>
            <h2 className="text-display tracking-[-0.04em] text-white">Understanding Sleep Cycles</h2>
          </div>
          <p className="max-w-sm text-[#A5B4C2] text-[17px] leading-relaxed">Each night we move through four distinct stages. Together they form the architecture of restoration.</p>
        </div>

        {/* Central Sleep Cycle Visualization */}
        <div className="relative mb-24">
          <div className="flex flex-col lg:flex-row gap-6">
            {sleepCycleStages.map((stage, index) => {
              const Icon = stageIcons[index];
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }} 
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="flex-1 bg-gradient-to-b from-[#121C2E] to-[#0D1624] rounded-3xl p-8 flex flex-col min-h-[280px] group border border-white/8 hover:border-[#67E8F9]/30 transition-colors"
                >
                  {/* Header with Icon and Stage Info */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#67E8F9]/10 transition-colors">
                        <Icon className="w-5 h-5" style={{ color: stageColors[index] }} />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[3px] text-[#67E8F9] uppercase">Stage {stage.name}</div>
                        <div className="text-5xl font-semibold text-white tracking-[-2px] mt-1">{stage.pct}<span className="text-xl align-super font-normal">%</span></div>
                      </div>
                    </div>
                    <div className="text-right pt-1">
                      <div className="text-[9px] tracking-[2px] text-[#64748B]">STAGE</div>
                      <div className="text-xl font-semibold text-[#A5B4C2]">{index + 1}</div>
                      <div className="text-[9px] text-[#64748B]">OF 4</div>
                    </div>
                  </div>
                  
                  {/* Description - flex-grow to fill space */}
                  <div className="flex-grow">
                    <div className="text-[#A5B4C2] leading-relaxed text-[15px]">{stage.desc}</div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-8 relative h-2 rounded-full bg-white/8 overflow-hidden">
                    <motion.div 
                      className="h-2 rounded-full"
                      style={{ background: `linear-gradient(to right, ${stageColors[index]}, ${stageColors[(index + 1) % stageColors.length]})` }}
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${stage.pct}%` }} 
                      transition={{ duration: 1.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }} 
                    />
                    <motion.div 
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
                      initial={{ left: 0 }}
                      whileInView={{ left: `${stage.pct}%` }}
                      transition={{ duration: 1.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cycle Timeline Visualization */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-[#67E8F9]/30 to-transparent mb-10" />
          <div className="flex justify-center gap-16 text-xs">
            <div>
              <div className="text-[#67E8F9] mb-2">ONE CYCLE ≈ 90 MINUTES</div>
              <div className="text-[#A5B4C2]">Complete progression through all 4 stages</div>
            </div>
            <div>
              <div className="text-[#67E8F9] mb-2">4–6 CYCLES PER NIGHT</div>
              <div className="text-[#A5B4C2]">Varies by individual sleep needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
