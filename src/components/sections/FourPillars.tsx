import { useState } from 'react';

const pillars = [
  { 
    num: "01", title: "Light Timing", desc: "Morning sunlight and evening dimness are the primary levers of circadian health.", detail: "Get bright light within 60 minutes of waking. Avoid bright light 3 hours before bed." 
  },
  { 
    num: "02", title: "Sleep Consistency", desc: "Going to bed and waking at nearly the same time every day is more powerful than total sleep hours.", detail: "A ±30-minute window preserves metabolic and cognitive performance." 
  },
  { 
    num: "03", title: "Temperature", desc: "A 1–2°C drop in core body temperature is required to initiate and sustain deep sleep.", detail: "Keep your bedroom between 60–67°F (15–19°C). Consider a warm bath before bed to accelerate cooling." 
  },
  { 
    num: "04", title: "Wind-Down Ritual", desc: "The brain needs a predictable transition signal from wakefulness to rest.", detail: "90 minutes of reduced stimulation: no screens, journaling, reading, or breathing practices." 
  },
];

export function FourPillars() {
  const [active, setActive] = useState(0);

  return (
    <section id="pillars" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-5/12">
            <div className="sticky top-24">
              <div className="uppercase text-xs tracking-[4px] text-[#0F766E]">THE FOUNDATIONAL FRAMEWORK</div>
              <h2 className="text-[#0A1421] text-[52px] font-semibold tracking-[-0.04em] mt-3 leading-none">Four Pillars of Daily Energy</h2>
              <p className="mt-5 text-[#64748B]">Master these four levers and everything else becomes easier.</p>
              
              <div className="mt-9 text-sm text-[#0F766E] tracking-widest">TAP EACH PILLAR TO EXPLORE</div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="space-y-3">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-full text-left p-9 rounded-3xl transition-all border flex flex-col ${active === index 
                    ? 'bg-[#0A1421] text-white border-[#0A1421]' 
                    : 'border-[#EDE8E0] hover:border-[#C9C2B5] bg-white'}`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className={`font-mono text-sm tracking-[3px] ${active === index ? 'text-[#67E8F9]' : 'text-[#0F766E]'}`}>{pillar.num}</div>
                    <div className={`font-semibold text-3xl tracking-[-1.2px] ${active === index ? 'text-white' : 'text-[#0A1421]'}`}>{pillar.title}</div>
                  </div>
                  <div className={`mt-5 pr-2 text-[15px] leading-snug ${active === index ? 'text-[#A5B4C2]' : 'text-[#334155]'}`}>{pillar.desc}</div>
                  
                  {active === index && (
                    <div className="mt-7 pt-6 border-t border-white/15 text-sm text-[#67E8F9] leading-relaxed">{pillar.detail}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
