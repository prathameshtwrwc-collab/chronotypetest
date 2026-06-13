import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Navbar } from './components/ui/Navbar';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ContactModal } from './components/ui/ContactModal';
import { Hero } from './components/sections/Hero';
import { WhySleep } from './components/sections/WhySleep';
import { SleepCycles } from './components/sections/SleepCycles';
import { Disorders } from './components/sections/Disorders';
import { WarningSigns } from './components/sections/WarningSigns';
import { Impact } from './components/sections/Impact';
import { ChronotypesIntro } from './components/sections/ChronotypesIntro';
import { LarkEagleOwl } from './components/sections/LarkEagleOwl';
import { Performance } from './components/sections/Performance';
import { FourPillars } from './components/sections/FourPillars';
import { Benefits } from './components/sections/Benefits';
import { SleepFacts } from './components/sections/SleepFacts';
import { Guidance } from './components/sections/Guidance';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

import { SuperAdmin } from './components/dashboards/SuperAdmin';
import { OrgAdmin } from './components/dashboards/OrgAdmin';
import { UserPanel } from './components/dashboards/UserPanel';

import { defaultSiteContent } from './lib/content';

type Mode = 'public' | 'superadmin' | 'orgadmin' | 'user';

export default function App() {
  const [mode, setMode] = useState<Mode>('public');
  const [showContact, setShowContact] = useState(false);
  const [siteContent, setSiteContent] = useState(defaultSiteContent);

  // Load CMS overrides from localStorage (simulates CMS)
  useEffect(() => {
    const loaded: any = { ...defaultSiteContent };
    Object.keys(defaultSiteContent).forEach(key => {
      const stored = localStorage.getItem('cms_' + key);
      if (stored) loaded[key] = stored;
    });
    setSiteContent(loaded);
  }, []);

  const handleUpdateContent = (key: string, value: string) => {
    const newContent = { ...siteContent, [key]: value };
    setSiteContent(newContent);
    localStorage.setItem('cms_' + key, value);
    toast.success('Content updated');
  };

  const handleContactSubmit = (data: any) => {
    toast.success('Thank you. A specialist will contact you within one business day.');
    console.log('Contact request submitted:', data);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render different experiences
  if (mode === 'superadmin') {
    return (
      <>
        <SuperAdmin onExit={() => setMode('public')} onUpdateContent={handleUpdateContent} />
        <Toaster position="top-center" richColors closeButton />
      </>
    );
  }

  if (mode === 'orgadmin') {
    return (
      <>
        <OrgAdmin onExit={() => setMode('public')} />
        <Toaster position="top-center" richColors closeButton />
      </>
    );
  }

  if (mode === 'user') {
    return (
      <>
        <UserPanel onExit={() => setMode('public')} />
        <Toaster position="top-center" richColors closeButton />
      </>
    );
  }

  // === PUBLIC LONG-SCROLL PREMIUM EXPERIENCE ===
  return (
    <div className="bg-[#FAF8F5] text-[#0A1421] overflow-x-hidden">
      <ScrollProgress />
      <Navbar 
        currentMode={mode} 
        onModeChange={(newMode) => setMode(newMode as Mode)} 
        onNavigate={scrollTo} 
      />

      <Hero content={{ heroTitle: siteContent.heroTitle, heroSubtitle: siteContent.heroSubtitle }} onExplore={() => scrollTo('why-sleep')} />

      <WhySleep title={siteContent.whySleepTitle} body={siteContent.whySleepBody} />

      <SleepCycles />

      <Disorders />

      <WarningSigns />

      <Impact />

      <ChronotypesIntro />

      <LarkEagleOwl />

      <Performance />

      <FourPillars />

      <Benefits />

      <SleepFacts />

      <Guidance />

      <FAQ />

      <Footer />

      {/* Floating CTA */}
      <button 
        onClick={() => setShowContact(true)}
        className="fixed bottom-8 right-8 z-[160] px-8 h-14 rounded-2xl shadow-xl bg-[#0A1421] text-white flex items-center gap-3 text-sm tracking-[1.5px] font-medium hover:bg-[#0F766E] transition-all active:scale-[0.985]"
      >
        SPEAK WITH A SPECIALIST
      </button>

      {/* Contact Modal */}
      {showContact && (
        <ContactModal 
          onClose={() => setShowContact(false)} 
          onSubmit={handleContactSubmit} 
        />
      )}

      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}
