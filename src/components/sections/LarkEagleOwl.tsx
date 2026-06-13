import { motion } from 'framer-motion';
import { larkStrengths, eagleStrengths, owlStrengths } from '../../lib/content';

interface ChronoCardProps {
  type: 'LARK' | 'EAGLE' | 'OWL';
  title: string;
  subtitle: string;
  timing: string;
  peak: string;
  strengths: string[];
  palette: { bg: string; accent: string; text: string };
  graphData: number[];
}

function ChronoCard({ type, title, subtitle, timing, peak, strengths, palette, graphData }: ChronoCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      className="rounded-3xl overflow-hidden border shadow-xl flex flex-col h-full"
      style={{ background: palette.bg, borderColor: palette.accent + '30' }}
    >
      {/* 3D-Inspired Header with Illustration Area */}
      <div className="relative h-[218px] flex items-center justify-center overflow-hidden" style={{ background: palette.bg }}>
        {/* Custom 3D-like celestial illustration */}
        <div className="relative w-40 h-40">
          {type === 'LARK' && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F4D9B0] to-[#E8B86D] opacity-70" />
              <div className="absolute inset-[22px] rounded-full bg-[#FEF9F0] flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#E8B86D] relative">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 text-4xl">☀︎</div>
            </>
          )}
          {type === 'EAGLE' && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EDE8E0] via-[#D8C9A9] to-[#B97D3A] opacity-60" />
              <div className="absolute inset-[18px] rounded-full bg-[#F8F6F1] flex items-center justify-center">
                <div className="w-11 h-[2px] bg-[#B97D3A] rotate-45" />
                <div className="w-11 h-[2px] bg-[#B97D3A] -rotate-45 absolute" />
              </div>
            </>
          )}
          {type === 'OWL' && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4C3F6E] to-[#2D2542] opacity-80" />
              <div className="absolute inset-[25px] rounded-full border border-[#C5A46E]/70 flex items-center justify-center">
                <div className="text-[#C5A46E] text-5xl tracking-[-3px] font-light">✧</div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-px">
                {Array.from({ length: 5 }).map((_, i) => <div key={i} className="w-[3px] h-1 bg-[#C5A46E]/60 rounded" />)}
              </div>
            </>
          )}
        </div>
        
        <div className="absolute top-8 right-8 text-[11px] tracking-[1.5px] px-4 py-1 rounded-full border" style={{ borderColor: palette.accent + '40', color: palette.text }}>
          {type}
        </div>
      </div>

      <div className="px-9 pb-9 pt-6 flex-1 flex flex-col bg-white/70" style={{ background: type === 'OWL' ? '#F2F1F8' : undefined }}>
        <div>
          <div className="font-semibold tracking-[-1px] text-[38px] text-[#0A1421] leading-none mb-1">{title}</div>
          <div className="text-sm tracking-[1px] text-[#64748B] mb-6">{subtitle}</div>
        </div>

        {/* Sleep Timing */}
        <div className="mb-8">
          <div className="text-xs tracking-widest mb-2 text-[#64748B]">SLEEP WINDOW</div>
          <div className="font-mono text-2xl tracking-[-1px] text-[#0A1421]">{timing}</div>
          <div className="text-xs mt-0.5 text-[#64748B]">{peak}</div>
        </div>

        {/* Energy Graph — Completely Unique per Card */}
        <div className="mb-8">
          <div className="flex justify-between items-end h-20 mb-1 gap-1">
            {graphData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center">
                <div 
                  className="w-full rounded-t transition-all" 
                  style={{ 
                    height: `${val}%`, 
                    background: type === 'LARK' ? '#E8B86D' : type === 'EAGLE' ? '#B97D3A' : '#4C3F6E',
                    opacity: 0.85 + (i * 0.03) 
                  }} 
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-[#64748B] font-mono tracking-widest pt-1">
            <div>6AM</div><div>NOON</div><div>6PM</div><div>12AM</div>
          </div>
        </div>

        <div>
          <div className="uppercase tracking-[2px] text-xs text-[#64748B] mb-3.5">STRENGTHS</div>
          <ul className="space-y-[11px] text-sm">
            {strengths.map((s, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[#0A1421]">
                <span className="block w-px h-[17px] mt-1.5" style={{ background: palette.accent }} /> 
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function LarkEagleOwl() {
  return (
    <section className="section-light py-20 border-b border-[#EDE8E0]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="uppercase text-[#0F766E] text-xs tracking-[4px]">THREE PRIMARY ARCHETYPES</div>
          <h3 className="font-semibold text-[46px] tracking-[-0.04em] text-[#0A1421] mt-1">Lark / Eagle / Owl</h3>
          <p className="text-[#64748B] max-w-xs mx-auto mt-4 text-sm">Choose the rhythm that matches your biology. Every person has a dominant chronotype.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <ChronoCard 
            type="LARK"
            title="Lark"
            subtitle="Early riser • Morning peak"
            timing="9:30pm — 5:30am"
            peak="Peak: 7am – 11am"
            strengths={larkStrengths}
            palette={{ bg: '#FEF9F0', accent: '#E8B86D', text: '#B97D3A' }}
            graphData={[96, 88, 54, 19]}
          />
          <ChronoCard 
            type="EAGLE"
            title="Eagle"
            subtitle="Adaptive • Balanced energy"
            timing="11:30pm — 7:30am"
            peak="Peak: 10am – 4pm"
            strengths={eagleStrengths}
            palette={{ bg: '#F8F6F1', accent: '#B97D3A', text: '#8C6640' }}
            graphData={[38, 94, 79, 42]}
          />
          <ChronoCard 
            type="OWL"
            title="Owl"
            subtitle="Late peak • Night energy"
            timing="1:45am — 9:45am"
            peak="Peak: 6pm – 12am"
            strengths={owlStrengths}
            palette={{ bg: '#F2F1F8', accent: '#4C3F6E', text: '#3C3158' }}
            graphData={[17, 48, 94, 87]}
          />
        </div>
      </div>
    </section>
  );
}
