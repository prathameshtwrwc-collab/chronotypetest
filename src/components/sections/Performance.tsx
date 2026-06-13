import { motion } from 'framer-motion';

const optimizations = [
  { time: "0–90min", title: "Morning Light", detail: "10–30 minutes outdoors within 1 hour of waking resets circadian rhythm." },
  { time: "Midday", title: "Strategic Rest", detail: "A 20-minute non-REM nap improves afternoon performance without sleep inertia." },
  { time: "Evening", title: "Dim the Lights", detail: "Reduce overhead lighting 3 hours before bed. Use warm bulbs below 2700K." },
  { time: "Night", title: "Fixed Wake Time", detail: "Wake at the same time daily — even on weekends. This is the single highest-leverage habit." },
];

export function Performance() {
  return (
    <section id="performance" className="section-dark py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-16">
          <div className="uppercase text-[#67E8F9] tracking-[3px] text-xs mb-3">ALIGNMENT PROTOCOLS</div>
          <h2 className="text-white text-[52px] font-semibold tracking-[-0.04em]">Performance Optimization</h2>
        </div>

        <div className="space-y-px bg-white/5">
          {optimizations.map((opt, idx) => (
            <motion.div key={idx} whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }} className="grid md:grid-cols-12 gap-x-8 gap-y-2 px-9 py-[31px] bg-[#121C2E]">
              <div className="md:col-span-2 font-mono text-xs tracking-[2px] text-[#67E8F9] pt-0.5">{opt.time}</div>
              <div className="md:col-span-3 text-white font-medium tracking-tight text-xl">{opt.title}</div>
              <div className="md:col-span-7 text-[#A5B4C2] text-[15px] leading-relaxed">{opt.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
