import { useState } from 'react';
import { defaultFAQs } from '../../lib/content';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="text-[#0F766E] text-xs tracking-[4px]">CLARITY</div>
          <h2 className="mt-2 font-semibold text-[52px] tracking-[-0.04em] text-[#0A1421]">Frequently Asked Questions</h2>
        </div>

        <div className="divide-y divide-[#EDE8E0]">
          {defaultFAQs.map((item) => (
            <div key={item.id} className="py-7">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)} 
                className="faq-question w-full flex justify-between items-center text-left text-xl font-medium tracking-tight text-[#0A1421]"
              >
                {item.question}
                <span className="text-[#0F766E] ml-3 text-3xl leading-none font-light">{openId === item.id ? '–' : '+'}</span>
              </button>
              {openId === item.id && (
                <div className="mt-4 pr-8 text-[#475569] leading-relaxed text-[15px]">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
