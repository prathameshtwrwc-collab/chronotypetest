export function ChronotypesIntro() {
  return (
    <section id="chronotypes" className="section-dark py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase tracking-[3.5px] text-xs text-[#67E8F9] mb-3">YOUR BIOLOGICAL BLUEPRINT</div>
            <h2 className="text-white text-[58px] leading-[0.9] tracking-[-0.045em] font-semibold">Understanding Chronotypes</h2>
          </div>
          <p className="max-w-sm text-[#A5B4C2] hidden md:block text-[15px]">Chronotypes are not personality types. They are deeply biological rhythms governed by the suprachiasmatic nucleus.</p>
        </div>

        <div className="text-[#A5B4C2] max-w-3xl text-[15px] leading-relaxed">
          Your chronotype determines when you feel naturally alert, when you should sleep, and when your cognitive performance peaks. It is largely fixed at birth and stable across your lifetime. Working against it creates chronic misalignment.
        </div>
      </div>
    </section>
  );
}
