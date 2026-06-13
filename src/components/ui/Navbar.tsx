import { useState } from 'react';
import { Menu, X, Moon, Users, User, Shield } from 'lucide-react';

interface NavbarProps {
  currentMode: string;
  onModeChange: (mode: string) => void;
  onNavigate: (id: string) => void;
}

export function Navbar({ currentMode, onModeChange, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Why Sleep', id: 'why-sleep' },
    { label: 'Cycles', id: 'cycles' },
    { label: 'Chronotypes', id: 'chronotypes' },
    { label: 'Pillars', id: 'pillars' },
    { label: 'FAQ', id: 'faq' },
  ];

  const modes = [
    { id: 'public', label: 'Public', icon: Moon },
    { id: 'superadmin', label: 'Super Admin', icon: Shield },
    { id: 'orgadmin', label: 'Org Admin', icon: Users },
    { id: 'user', label: 'User Panel', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[150] bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#EDE8E0]">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
          <div className="w-9 h-9 rounded-xl bg-[#0A1421] flex items-center justify-center">
            <Moon className="w-5 h-5 text-[#67E8F9]" />
          </div>
          <div>
            <div className="font-semibold tracking-[-0.02em] text-xl text-[#0A1421]">Chronotype</div>
            <div className="text-[10px] text-[#64748B] -mt-1">SLEEP SCIENCE</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-[#0A1421]">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="hover:text-[#0F766E] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mode Switcher */}
          <div className="hidden lg:flex items-center bg-[#0A1421]/5 rounded-full p-1 text-xs">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const active = currentMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => onModeChange(mode.id)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${active 
                    ? 'bg-white shadow text-[#0A1421]' 
                    : 'text-[#64748B] hover:text-[#0A1421]'}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-medium tracking-tight">{mode.label}</span>
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => onModeChange('superadmin')}
            className="hidden md:block text-xs tracking-[0.5px] font-medium px-5 py-2.5 rounded-xl bg-[#0A1421] text-white hover:bg-[#0F766E] transition-colors"
          >
            ACCESS PLATFORM
          </button>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden p-2"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-[#FAF8F5] px-8 py-6 flex flex-col gap-y-4 text-sm">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => { onNavigate(link.id); setMobileOpen(false); }} className="text-left py-1">
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t flex flex-wrap gap-2">
            {modes.map(m => (
              <button key={m.id} onClick={() => { onModeChange(m.id); setMobileOpen(false); }} 
                className="text-xs px-4 py-2 rounded-full border border-[#EDE8E0]">{m.label}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
