import { useState } from 'react';

const guidanceItems = [
  { title: "Talk to a Specialist", desc: "If you suspect a disorder or chronic misalignment, professional sleep medicine evaluation is the fastest path to clarity." },
  { title: "Use Light Strategically", desc: "Morning light is non-negotiable. Evening light hygiene is just as critical. Light is the most powerful zeitgeber we have." },
  { title: "Avoid Social Jetlag", desc: "Large differences between weekday and weekend sleep timing disrupt metabolism and mood more than moderate sleep restriction." },
  { title: "Protect the Last 90 Minutes", desc: "The final 90 minutes before bed are the most important. No screens, no high-stakes conversations, no intense exercise." },
];

export function Guidance() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="guidance" className="section-dark py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-14">
          <div className="text-[#67E8F9] text-xs tracking-[3.5px]">NEXT STEPS</div>
          <h2 className="text-white text-[52px] font-semibold tracking-[-0.04em] mt-2">Additional Guidance</h2>
        </div>

        <div className="space-y-2">
          {guidanceItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setOpen(open === idx ? null : idx)}
              className="cursor-pointer bg-[#121C2E] border border-white/10 rounded-2xl px-9 py-8 group"
            >
              <div className="flex items-start justify-between">
                <div className="font-medium tracking-tight text-[21px] text-white pr-12">{item.title}</div>
                <div className="text-[#67E8F9] text-3xl font-light transition-transform group-hover:rotate-45">{open === idx ? '−' : '+'}</div>
              </div>
              {open === idx && (
                <div className="mt-4 pr-16 text-[#A5B4C2] leading-relaxed">{item.desc}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="btn-premium text-sm tracking-[1px] px-10 h-14 rounded-2xl bg-white text-[#0A1421] font-medium"
          >
            SPEAK WITH A SPECIALIST
          </button>
        </div>
      </div>
    </section>
  );
}
