import { motion } from 'framer-motion';

const impacts = [
  { metric: "2.8×", label: "Increased risk of type 2 diabetes", detail: "Even with 6 hours of sleep" },
  { metric: "1.7×", label: "Higher cardiovascular events", detail: "Chronic short sleepers" },
  { metric: "40%", label: "Reduced emotional regulation", detail: "After one night of poor sleep" },
  { metric: "23%", label: "Decline in work productivity", detail: "Measured across industries" },
];

export function Impact() {
  return (
    <section id="impact" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-[#0F766E] tracking-[3px] text-xs mb-3">THE HIDDEN COST</div>
          <h2 className="font-semibold text-[#0A1421] text-[52px] leading-[0.94] tracking-[-0.04em]">Impact of Poor Sleep</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {impacts.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.01 }} className="rounded-3xl bg-white p-9 border border-[#EDE8E0]">
              <div className="font-mono text-[#0F766E] text-6xl tracking-[-4px] font-semibold mb-6">{item.metric}</div>
              <div className="font-medium text-xl tracking-tight text-[#0A1421] mb-2">{item.label}</div>
              <div className="text-xs text-[#64748B]">{item.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
