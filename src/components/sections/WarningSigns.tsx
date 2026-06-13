const signs = [
  { title: "Falling asleep within 5 minutes", sub: "Extreme sleep debt" },
  { title: "Difficulty waking at consistent times", sub: "Circadian misalignment" },
  { title: "Irritability or mood instability", sub: "REM fragmentation" },
  { title: "Afternoon energy crashes", sub: "Inadequate deep sleep" },
  { title: "Reliance on caffeine after noon", sub: "Adenosine dysregulation" },
  { title: "Memory lapses or brain fog", sub: "Hippocampal impact" },
];

export function WarningSigns() {
  return (
    <section id="warning-signs" className="section-navy py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="uppercase tracking-[3px] text-[#67E8F9] text-xs mb-3">LISTEN TO YOUR BODY</div>
        <h2 className="text-white text-[52px] tracking-[-0.04em] leading-none mb-14 font-semibold">Warning Signs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {signs.map((s, idx) => (
            <div key={idx} className="bg-[#0A1421] p-9 border-r border-b border-white/10 last:border-r-0">
              <div className="font-medium text-xl text-white tracking-[-0.015em] leading-tight mb-3">{s.title}</div>
              <div className="text-[#64748B] text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
