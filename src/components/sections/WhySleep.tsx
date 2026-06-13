interface WhySleepProps {
  title: string;
  body: string;
}

export function WhySleep({ title, body }: WhySleepProps) {
  return (
    <section id="why-sleep" className="section-light py-24 border-b border-[#EDE8E0]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[4px] text-xs text-[#0F766E] mb-4">THE FOUNDATION</div>
            <h2 className="text-[56px] leading-[0.92] font-semibold tracking-[-0.04em] text-[#0A1421] mb-9 pr-4">
              {title}
            </h2>
            <div className="max-w-2xl text-[17px] leading-relaxed text-[#334155]">
              {body}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="glass rounded-3xl px-9 py-9 text-sm space-y-8 border border-[#EDE8E0]">
              <div>
                <div className="text-[#0F766E] text-xs tracking-[1.5px] mb-1">THE TRUTH</div>
                <div className="font-medium text-xl tracking-tight text-[#0A1421]">One third of your life is spent asleep.<br />Every system depends on it.</div>
              </div>
              <div className="pt-6 border-t border-[#EDE8E0] grid grid-cols-2 gap-8 text-xs">
                <div><span className="font-semibold text-[#0A1421] block text-lg tracking-tighter">70%</span> of adults report suboptimal sleep</div>
                <div><span className="font-semibold text-[#0A1421] block text-lg tracking-tighter">40%</span> experience chronic misalignment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
