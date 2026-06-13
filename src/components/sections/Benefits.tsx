import { motion } from 'framer-motion';

const benefits = [
  { label: "Immune Function", detail: "T-cell production and cytokine regulation improve dramatically." },
  { label: "Emotional Stability", detail: "Amygdala reactivity decreases by up to 60% with consistent sleep." },
  { label: "Metabolic Health", detail: "Insulin sensitivity restored within days of sleep schedule normalization." },
  { label: "Memory Consolidation", detail: "Hippocampal replay during deep sleep cements long-term learning." },
  { label: "Creativity & Insight", detail: "REM sleep enables novel connections and problem-solving breakthroughs." },
  { label: "Longevity Markers", detail: "Consistent sleep timing is one of the strongest predictors of lifespan." },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-navy py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-12">
          <div className="text-[#67E8F9] tracking-[3px] text-xs mb-3">THE RETURN</div>
          <h2 className="text-white text-[54px] font-semibold tracking-[-0.045em]">Benefits of Good Sleep</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.01 }} className="rounded-3xl bg-[#0D1624] p-9 border border-white/10">
              <div className="text-[#67E8F9] text-sm tracking-widest mb-4">0{i + 1}</div>
              <div className="text-white text-3xl font-medium tracking-[-1.5px] mb-4">{b.label}</div>
              <div className="text-[#A5B4C2] leading-relaxed text-[15px]">{b.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
