import { motion } from 'framer-motion';
import { CheckCircle2, Moon, Sparkles, Sunrise, type LucideIcon } from 'lucide-react';
import { eagleStrengths, larkStrengths, owlStrengths } from '../../lib/content';

type ChronotypeVariant = 'lark' | 'eagle' | 'owl';

type ChronoCardData = {
  variant: ChronotypeVariant;
  label: string;
  Icon: LucideIcon;
  title: string;
  sleepWindow: string;
  peak: string;
  strengths: string[];
  bars: number[];
  curve: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    soft: string;
    glow: string;
  };
};

const energyLabels = ['6AM', 'NOON', '6PM', '12AM'];

const cards: ChronoCardData[] = [
  {
    variant: 'lark',
    label: 'LARK ☀️',
    Icon: Sunrise,
    title: 'Early riser • Morning peak',
    sleepWindow: '9:30 PM — 5:30 AM',
    peak: '7 AM – 11 AM',
    strengths: larkStrengths,
    bars: [96, 88, 54, 19, 28, 42, 62, 74],
    curve: 'M18 118 C72 42, 128 34, 184 66 S292 120, 362 150',
    colors: {
      primary: '#E8B86D',
      secondary: '#0F766E',
      tertiary: '#F4D9B0',
      soft: 'rgba(232, 184, 109, 0.16)',
      glow: 'rgba(232, 184, 109, 0.55)',
    },
  },
  {
    variant: 'eagle',
    label: 'EAGLE ✧',
    Icon: Sparkles,
    title: 'Adaptive • Balanced energy',
    sleepWindow: '11:30 PM — 7:30 AM',
    peak: '10 AM – 4 PM',
    strengths: eagleStrengths,
    bars: [38, 64, 94, 86, 78, 58, 42, 34],
    curve: 'M18 132 C82 110, 118 72, 174 62 C230 52, 258 78, 302 84 C334 88, 346 118, 362 138',
    colors: {
      primary: '#0F766E',
      secondary: '#67E8F9',
      tertiary: '#A5F3FC',
      soft: 'rgba(15, 118, 110, 0.14)',
      glow: 'rgba(103, 232, 249, 0.55)',
    },
  },
  {
    variant: 'owl',
    label: 'OWL 🌙',
    Icon: Moon,
    title: 'Late peak • Night energy',
    sleepWindow: '1:45 AM — 9:45 AM',
    peak: '6 PM – 12 AM',
    strengths: owlStrengths,
    bars: [17, 28, 42, 48, 62, 78, 94, 87],
    curve: 'M18 146 C86 150, 142 138, 190 116 C246 90, 272 48, 362 42',
    colors: {
      primary: '#4C3F6E',
      secondary: '#67E8F9',
      tertiary: '#C5A46E',
      soft: 'rgba(76, 63, 110, 0.16)',
      glow: 'rgba(76, 63, 110, 0.58)',
    },
  },
];

const particles = [
  { left: 10, top: 22, duration: 8, delay: 0.2 },
  { left: 34, top: 66, duration: 9, delay: 1.1 },
  { left: 68, top: 18, duration: 8, delay: 0.7 },
  { left: 88, top: 60, duration: 9, delay: 1.5 },
];

function ChronotypeIllustration({ card }: { card: ChronoCardData }) {
  const gradientId = `illustration-gradient-${card.variant}`;

  return (
    <svg viewBox="0 0 420 220" className="h-[190px] w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={card.colors.tertiary} />
          <stop offset="54%" stopColor={card.colors.primary} />
          <stop offset="100%" stopColor={card.colors.secondary} />
        </linearGradient>
      </defs>
      <rect x="24" y="18" width="372" height="184" rx="28" fill="#FFFFFF" stroke="#EDE8E0" />
      <rect x="48" y="42" width="142" height="104" rx="18" fill="#FAF8F5" stroke="#EDE8E0" />
      <rect x="214" y="42" width="158" height="104" rx="18" fill={`url(#${gradientId})`} opacity="0.88" />

      {card.variant === 'lark' && (
        <>
          <circle cx="342" cy="78" r="20" fill={card.colors.primary} />
          <path d="M60 192 C116 156, 150 204, 204 168 C260 132, 308 158, 360 126" fill="none" stroke={card.colors.secondary} strokeWidth="3" opacity="0.45" />
          <circle cx="204" cy="166" r="13" fill="#F5F2ED" stroke={card.colors.secondary} strokeWidth="3" />
          <path d="M202 181 C188 196, 178 208, 170 222 M204 181 C220 194, 230 208, 238 222 M192 182 L166 158 M216 182 L242 158" stroke="#0A1421" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
          <path d="M76 66 l7 -8 l7 8 M100 66 l7 -8 l7 8 M124 66 l7 -8 l7 8" fill="none" stroke={card.colors.primary} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="78" y="178" width="74" height="16" rx="8" fill="#FFFFFF" stroke={card.colors.secondary} opacity="0.75" />
          <circle cx="94" cy="168" r="7" fill={card.colors.primary} />
          <circle cx="124" cy="168" r="7" fill={card.colors.secondary} />
        </>
      )}

      {card.variant === 'eagle' && (
        <>
          <circle cx="342" cy="78" r="20" fill={card.colors.secondary} opacity="0.86" />
          <path d="M60 192 C112 168, 156 208, 206 180 C264 148, 310 170, 360 140" fill="none" stroke={card.colors.secondary} strokeWidth="3" opacity="0.45" />
          <rect x="188" y="118" width="92" height="58" rx="12" fill="#FFFFFF" stroke={card.colors.secondary} strokeWidth="3" />
          <path d="M206 136 H264 M206 152 H250 M206 168 H236" stroke="#0A1421" strokeWidth="4" strokeLinecap="round" opacity="0.62" />
          <path d="M234 176 V200" stroke="#0A1421" strokeWidth="5" strokeLinecap="round" opacity="0.62" />
          <path d="M82 194 C106 168, 128 168, 152 194" fill="none" stroke={card.colors.primary} strokeWidth="4" strokeLinecap="round" />
          <path d="M116 194 V166" stroke={card.colors.primary} strokeWidth="4" strokeLinecap="round" />
          <path d="M116 178 C108 170, 104 160, 108 150 M124 178 C132 170, 136 160, 132 150" stroke={card.colors.secondary} strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {card.variant === 'owl' && (
        <>
          <circle cx="342" cy="72" r="19" fill="#FFFFFF" opacity="0.9" />
          <circle cx="334" cy="66" r="19" fill="#0D1624" opacity="0.88" />
          <path d="M60 192 C112 160, 158 204, 208 174 C264 140, 310 168, 360 136" fill="none" stroke={card.colors.secondary} strokeWidth="3" opacity="0.45" />
          <rect x="188" y="108" width="92" height="66" rx="12" fill="#FFFFFF" stroke={card.colors.secondary} strokeWidth="3" />
          <path d="M206 130 H262 M206 146 H250 M206 162 H236" stroke="#0A1421" strokeWidth="4" strokeLinecap="round" opacity="0.62" />
          <path d="M286 108 C306 94, 324 102, 326 124 C328 146, 308 154, 286 160" fill="none" stroke={card.colors.primary} strokeWidth="4" strokeLinecap="round" />
          <path d="M306 160 V194" stroke={card.colors.primary} strokeWidth="5" strokeLinecap="round" />
          <circle cx="306" cy="198" r="22" fill={card.colors.primary} opacity="0.16" />
          <path d="M80 62 l7 -9 l7 9 M104 62 l7 -9 l7 9 M128 62 l7 -9 l7 9 M152 62 l7 -9 l7 9" stroke={card.colors.secondary} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        </>
      )}

      <path d="M44 214 H376" stroke="rgba(15,118,110,0.16)" strokeWidth="2" />
    </svg>
  );
}

function EnergyTimeline({ card }: { card: ChronoCardData }) {
  return (
    <div className="rounded-3xl border border-[#EDE8E0] bg-[#FAF8F5]/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[9px] font-medium uppercase tracking-[2px] text-[#64748B]">Energy timeline</div>
          <div className="mt-0.5 font-medium tracking-tight text-[#0A1421]">6AM → NOON → 6PM → 12AM</div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#EDE8E0]">
          <card.Icon className="h-4 w-4" style={{ color: card.colors.primary }} />
        </div>
      </div>

      <div className="relative h-[96px] overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-[#EDE8E0]">
        <div className="absolute inset-x-4 bottom-7 h-px bg-[#EDE8E0]" />
        <svg viewBox="0 0 380 140" className="absolute inset-x-2 bottom-4 h-[110px] w-[calc(100%-16px)] overflow-visible">
          <path d="M20 118 V20" stroke="rgba(237,232,224,0.95)" strokeWidth="1" />
          <path d="M120 118 V20" stroke="rgba(237,232,224,0.72)" strokeWidth="1" />
          <path d="M220 118 V20" stroke="rgba(237,232,224,0.72)" strokeWidth="1" />
          <path d="M320 118 V20" stroke="rgba(237,232,224,0.72)" strokeWidth="1" />
          <motion.path
            d={card.curve}
            fill="none"
            stroke={card.colors.primary}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.45 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{ filter: `drop-shadow(0 0 10px ${card.colors.glow})` }}
          />
          <path d={card.curve} fill="none" stroke={card.colors.secondary} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        </svg>

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 px-3 text-[8px] font-medium uppercase tracking-[1.5px] text-[#64748B]">
          {energyLabels.map(label => (
            <div key={label} className="text-center">{label}</div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-8 items-end gap-1">
        {card.bars.map((bar, index) => (
          <div
            key={index}
            className="w-full rounded-full"
            style={{
              height: `${Math.max(12, bar * 0.34)}px`,
              background: `linear-gradient(180deg, ${card.colors.secondary}, ${card.colors.primary})`,
              opacity: index > 2 && index < 6 ? 0.95 : 0.62,
              boxShadow: index > 2 && index < 6 ? `0 0 12px ${card.colors.glow}` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChronoCard({ card }: { card: ChronoCardData }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.18 }}
      className="group relative rounded-[1.5rem] p-px bg-gradient-to-br from-white via-[#EDE8E0] to-[#0F766E]/25 shadow-[0_18px_60px_rgba(15,118,110,0.09)] hover:shadow-[0_24px_70px_rgba(15,118,110,0.14)]"
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-white/85 p-6 backdrop-blur-sm">
        <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full" style={{ background: card.colors.soft }} />
        <div className="absolute left-6 top-6 right-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-white"
            style={{ background: `linear-gradient(135deg, ${card.colors.primary}, ${card.colors.secondary})` }}
          >
            {card.label}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, rotate: 8 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF8F5] shadow-sm ring-1 ring-[#EDE8E0]"
          >
            <card.Icon className="h-4 w-4" style={{ color: card.colors.primary }} />
          </motion.div>
        </div>

        <div className="pt-14">
          <ChronotypeIllustration card={card} />
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#0A1421]">{card.title}</h3>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-[#FAF8F5] p-4 ring-1 ring-[#EDE8E0]">
            <div className="text-[9px] font-medium uppercase tracking-[2px] text-[#64748B]">Sleep window</div>
            <div className="mt-1 font-mono text-xs font-semibold tracking-[-0.02em] text-[#0A1421]">{card.sleepWindow}</div>
          </div>
          <div className="rounded-2xl bg-[#FAF8F5] p-4 ring-1 ring-[#EDE8E0]">
            <div className="text-[9px] font-medium uppercase tracking-[2px] text-[#64748B]">Peak</div>
            <div className="mt-1 font-mono text-xs font-semibold tracking-[-0.02em] text-[#0A1421]">{card.peak}</div>
          </div>
        </div>

        <div className="mt-4">
          <EnergyTimeline card={card} />
        </div>

        <div className="mt-4 space-y-2">
          {card.strengths.map(strength => (
            <div key={strength} className="flex items-start gap-2 text-xs leading-relaxed text-[#334155]">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: card.colors.primary }} />
              <span>{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function LarkEagleOwl() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: '-60px' }}
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,118,110,0.08),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(103,232,249,0.10),transparent_32%),radial-gradient(circle_at_50%_92%,rgba(232,184,109,0.08),transparent_34%)]" />

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute z-10 h-2 w-2 rounded-full bg-[#67E8F9]/40"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.16, 0.55, 0.16] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-6xl px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#EDE8E0] bg-white/85 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[3px] text-[#0F766E] shadow-sm"
          >
            Biological Rhythm Profiles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-[clamp(2.4rem,5.4vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#0A1421]"
          >
            Three Primary Chronotypes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mx-auto mt-4 max-w-2xl text-lg font-medium tracking-tight text-[#0F766E]"
          >
            Lark • Eagle • Owl
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base"
          >
            Choose the rhythm that matches your biology. Every person has a dominant chronotype.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.variant}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <ChronoCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
