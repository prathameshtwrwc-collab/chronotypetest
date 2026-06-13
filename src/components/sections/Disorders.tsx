import { motion } from 'framer-motion';

const disorders = [
  { name: "Insomnia", desc: "Difficulty initiating or maintaining sleep. Affects 10–30% of adults. Chronic cases are often driven by circadian misalignment.", icon: "◌" },
  { name: "Sleep Apnea", desc: "Repeated airway obstruction during sleep. Leads to fragmented sleep, oxygen desaturation, and long-term cardiovascular strain.", icon: "◉" },
  { name: "Restless Legs Syndrome", desc: "Uncomfortable sensations that create an urge to move the legs, most severe during periods of rest and at night.", icon: "∿" },
  { name: "Delayed Sleep Phase", desc: "A circadian disorder where sleep onset is delayed by two or more hours beyond socially acceptable bedtime.", icon: "◐" },
];

export function Disorders() {
  return (
    <section id="disorders" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#0F766E]">CLINICAL LANDSCAPE</div>
            <h2 className="text-[52px] leading-none font-semibold tracking-[-0.04em] mt-2 text-[#0A1421]">Common Sleep Disorders</h2>
          </div>
          <p className="max-w-xs text-sm text-[#64748B] hidden md:block">Many are treatable once properly diagnosed. Misalignment is often the root cause.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {disorders.map((d, i) => (
            <motion.div key={i} whileHover={{ y: -3 }} className="group bg-white rounded-3xl p-9 border border-[#EDE8E0] flex gap-8">
              <div className="text-[58px] text-[#EDE8E0] font-light leading-none select-none pt-1">{d.icon}</div>
              <div>
                <div className="text-2xl font-semibold tracking-[-0.01em] mb-3 text-[#0A1421]">{d.name}</div>
                <p className="text-[15px] leading-relaxed text-[#475569]">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
