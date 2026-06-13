import { FAQItem, SleepFact, Article, SiteContent } from '../types';

export const defaultSiteContent: SiteContent = {
  heroTitle: "Sleep is the Foundation.",
  heroSubtitle: "Chronotype is the Blueprint.",
  whySleepTitle: "Why Sleep Matters",
  whySleepBody: "Sleep is not a luxury. It is the most powerful biological process we engage in every day. It regulates hormones, repairs tissue, consolidates memory, and restores emotional balance. The quality of your sleep determines the quality of your waking life.",
  cyclesTitle: "Understanding Sleep Cycles",
  disordersTitle: "Common Sleep Disorders",
  warningTitle: "Warning Signs",
  impactTitle: "Impact of Poor Sleep",
  chronotypesTitle: "Understanding Chronotypes",
  performanceTitle: "Performance Optimization",
  pillarsTitle: "Four Pillars of Daily Energy",
  benefitsTitle: "Benefits of Good Sleep",
  factsTitle: "Shareable Sleep Facts",
  guidanceTitle: "Additional Guidance",
  faqTitle: "Frequently Asked Questions",
};

export const defaultFAQs: FAQItem[] = [
  {
    id: "f1",
    question: "What is a chronotype?",
    answer: "A chronotype is your natural biological preference for when you feel most alert and when you naturally feel sleepy. It is largely genetic and determines your optimal sleep and wake times. Understanding your chronotype allows you to align your lifestyle with your biology."
  },
  {
    id: "f2",
    question: "Can my chronotype change?",
    answer: "While chronotype is primarily genetic, it can shift slightly with age, lifestyle, and consistent behavioral changes. Most people see their natural rhythm become earlier as they age. Dramatic forced changes can harm long-term health."
  },
  {
    id: "f3",
    question: "How long is a full sleep cycle?",
    answer: "A complete sleep cycle lasts approximately 90 minutes. Most adults experience 4–6 cycles per night. Each cycle consists of light sleep, deep sleep, and REM sleep, with the proportion of REM increasing toward morning."
  },
  {
    id: "f4",
    question: "Is it possible to change my sleep schedule dramatically?",
    answer: "Abrupt changes are difficult and often unsustainable. Gradual shifts of 15–30 minutes per day, combined with consistent light exposure and wind-down routines, are the most effective way to realign your circadian rhythm."
  },
  {
    id: "f5",
    question: "Does everyone need exactly 8 hours?",
    answer: "No. While 7–9 hours is the healthy range for most adults, individual sleep need varies. Chronotype, age, activity level, and genetics all play a role. The quality and consistency of sleep often matter more than a strict hour count."
  },
];

export const defaultSleepFacts: SleepFact[] = [
  { id: "sf1", fact: "The average adult cycles through 4 to 6 complete 90-minute sleep cycles each night.", source: "American Academy of Sleep Medicine", category: "Science" },
  { id: "sf2", fact: "Your core body temperature drops 1–2°C to initiate sleep. This is why a cool bedroom accelerates sleep onset.", source: "Sleep Research Society", category: "Physiology" },
  { id: "sf3", fact: "Larks show peak cognitive performance 2–3 hours after waking. Owls peak between 8–10pm.", source: "Journal of Biological Rhythms", category: "Performance" },
  { id: "sf4", fact: "Missing just one night of quality sleep can impair cognitive function equivalent to a blood alcohol level of 0.10%.", source: "Harvard Medical School", category: "Health" },
  { id: "sf5", fact: "Consistent sleep timing (within ±30 minutes) is more important than total hours for metabolic health.", source: "National Sleep Foundation", category: "Longevity" },
];

export const defaultArticles: Article[] = [
  { id: "a1", title: "The Architecture of Restorative Sleep", excerpt: "How NREM and REM stages work together to restore the body and mind.", readTime: 11, category: "Science" },
  { id: "a2", title: "Light as Medicine: Circadian Timing", excerpt: "How morning and evening light exposure shape every aspect of your chronotype.", readTime: 8, category: "Biology" },
  { id: "a3", title: "The Cost of Social Jetlag", excerpt: "Why misalignment between biological and social clocks is quietly eroding health.", readTime: 14, category: "Lifestyle" },
];

export const defaultOrganizations = [
  {
    id: "org1",
    name: "The Sleep Institute",
    slug: "sleep-institute",
    logoText: "TSI",
    primaryColor: "#0F766E",
    accentColor: "#67E8F9",
    contactEmail: "care@thesleepinstitute.org",
    contactPhone: "+1 (310) 555-0142",
    clinicAddress: "1420 Ocean Avenue, Santa Monica, CA 90401",
    website: "thesleepinstitute.org",
    active: true,
  },
  {
    id: "org2",
    name: "Meridian Wellness",
    slug: "meridian",
    logoText: "MW",
    primaryColor: "#0D9488",
    accentColor: "#C5A46E",
    contactEmail: "hello@meridianwellness.co",
    contactPhone: "+44 20 7946 0958",
    clinicAddress: "18 Bloomsbury Square, London WC1B 3JA",
    website: "meridianwellness.co",
    active: true,
  },
];

export const larkStrengths = [
  "Highest focus & decision-making 7am–11am",
  "Natural early cortisol peak supports metabolism",
  "Better consistency with traditional schedules",
  "Stronger morning exercise performance",
];
export const eagleStrengths = [
  "Flexible adaptability across schedules",
  "Balanced energy across the full day",
  "Strong recovery and resilience",
  "Excellent for hybrid and creative work",
];
export const owlStrengths = [
  "Peak creative insight late afternoon to midnight",
  "Superior sustained attention after 6pm",
  "Often excel in research, writing & strategy",
  "Naturally resilient to late social schedules",
];

export const sleepCycleStages = [
  { name: "N1", pct: 5, desc: "Light sleep — transition" },
  { name: "N2", pct: 45, desc: "Light sleep — memory processing" },
  { name: "N3", pct: 25, desc: "Deep sleep — physical restoration" },
  { name: "REM", pct: 25, desc: "Dreaming — emotional integration" },
];
