import { defaultSleepFacts } from '../../lib/content';

export function SleepFacts() {
  return (
    <section id="facts" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="uppercase text-[#0F766E] text-xs tracking-[3px]">FOR YOUR REFERENCE</div>
            <h2 className="text-[#0A1421] font-semibold text-[52px] tracking-[-0.04em]">Shareable Sleep Facts</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {defaultSleepFacts.map((fact, idx) => (
            <div key={idx} className="rounded-3xl border border-[#EDE8E0] bg-white p-8 flex flex-col">
              <div className="text-lg tracking-tight font-medium leading-tight text-[#0A1421] flex-1 pr-4">{fact.fact}</div>
              <div className="mt-8 pt-5 border-t border-[#EDE8E0] flex items-center justify-between text-xs">
                <div className="text-[#0F766E] font-medium">{fact.category}</div>
                <div className="text-[#64748B]">{fact.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
