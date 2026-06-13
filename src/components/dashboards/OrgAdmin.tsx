import { useState } from 'react';
import { LogOut, Users, Palette, BarChart3, FileText, UserPlus } from 'lucide-react';

interface OrgAdminProps {
  onExit: () => void;
}

export function OrgAdmin({ onExit }: OrgAdminProps) {
  const [branding, setBranding] = useState({ name: 'The Sleep Institute', color: '#0F766E', accent: '#67E8F9', email: 'care@thesleepinstitute.org' });
  const [team] = useState([
    { id: 1, name: 'Dr. Sofia Patel', role: 'Lead Sleep Physician', email: 'spatel@tsi.org' },
    { id: 2, name: 'Marcus Hale', role: 'Clinical Psychologist', email: 'mhale@tsi.org' },
  ]);
  const [leads] = useState([
    { name: 'Elise Moreau', date: 'Mar 4', interest: 'Corporate' },
    { name: 'Dr. Thomas Lin', date: 'Mar 2', interest: 'Assessment Program' },
  ]);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Premium Glass Navbar */}
      <div className="dashboard-nav sticky top-0 z-50 border-b border-[#EDE8E0]">
        <div className="max-w-6xl mx-auto px-9 h-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="font-semibold tracking-[-0.5px] text-2xl" style={{ color: branding.color }}>{branding.name}</div>
            <div className="text-[10px] px-3 py-px rounded-full border text-[#64748B] tracking-widest">ORG ADMIN</div>
          </div>
          <button onClick={onExit} className="flex items-center gap-2 text-sm px-5 py-2 rounded-2xl hover:bg-white border"><LogOut size={16} /> Exit</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-9 py-10">
        <div className="flex items-center gap-3 mb-8 text-sm">
          <button className="bg-[#0A1421] text-white px-5 py-2 rounded-2xl flex items-center gap-2 text-sm"><Palette size={15} /> Branding</button>
          <button className="px-5 py-2 border rounded-2xl flex items-center gap-2 text-sm hover:bg-white"><Users size={15} /> Team</button>
          <button className="px-5 py-2 border rounded-2xl flex items-center gap-2 text-sm hover:bg-white"><FileText size={15} /> Content</button>
          <button className="px-5 py-2 border rounded-2xl flex items-center gap-2 text-sm hover:bg-white"><BarChart3 size={15} /> Reports</button>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Branding Panel */}
          <div className="md:col-span-5 bg-white border border-[#EDE8E0] rounded-3xl p-9">
            <div className="font-medium text-xl tracking-tight mb-6">Organization Branding</div>
            
            <div className="space-y-6">
              <div>
                <div className="text-xs tracking-widest mb-2 text-[#64748B]">ORGANIZATION NAME</div>
                <input value={branding.name} onChange={e => setBranding({ ...branding, name: e.target.value })} className="input-premium w-full px-5 py-3 rounded-2xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs tracking-widest mb-2 text-[#64748B]">PRIMARY COLOR</div>
                  <div className="flex items-center gap-3">
                    <input type="color" value={branding.color} onChange={e => setBranding({ ...branding, color: e.target.value })} className="w-11 h-11 p-1 rounded-xl border" />
                    <div className="font-mono text-sm">{branding.color}</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-widest mb-2 text-[#64748B]">ACCENT</div>
                  <div className="flex items-center gap-3">
                    <input type="color" value={branding.accent} onChange={e => setBranding({ ...branding, accent: e.target.value })} className="w-11 h-11 p-1 rounded-xl border" />
                    <div className="font-mono text-sm">{branding.accent}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs tracking-widest mb-2 text-[#64748B]">PRIMARY CONTACT EMAIL</div>
                <input value={branding.email} onChange={e => setBranding({ ...branding, email: e.target.value })} className="input-premium w-full px-5 py-3 rounded-2xl" />
              </div>
            </div>
            <div className="text-xs mt-7 text-[#0F766E]">Changes are saved automatically in this demo.</div>
          </div>

          {/* Team Management */}
          <div className="md:col-span-7 bg-white border border-[#EDE8E0] rounded-3xl p-9">
            <div className="flex justify-between items-center mb-6">
              <div className="font-medium text-xl tracking-tight">Team &amp; Specialists</div>
              <button className="flex items-center gap-2 text-xs px-5 py-2 bg-[#0A1421] text-white rounded-2xl"><UserPlus size={15} /> INVITE MEMBER</button>
            </div>

            <div className="space-y-2 text-sm">
              {team.map(t => (
                <div key={t.id} className="flex items-center justify-between py-3.5 px-5 border border-[#EDE8E0] rounded-2xl">
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-[#64748B]">{t.role}</div>
                  </div>
                  <div className="text-[#64748B] text-xs">{t.email}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leads & Clinic Info */}
          <div className="md:col-span-7 bg-white border border-[#EDE8E0] rounded-3xl p-9">
            <div className="font-medium text-xl tracking-tight mb-6">Recent Leads</div>
            <div className="divide-y text-sm">
              {leads.map((l, i) => (
                <div key={i} className="py-[17px] flex justify-between">
                  <div>{l.name}</div>
                  <div className="text-[#64748B]">{l.date} · {l.interest}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinic Info Card */}
          <div className="md:col-span-5 bg-white border border-[#EDE8E0] rounded-3xl p-9">
            <div className="uppercase tracking-widest text-xs text-[#0F766E] mb-2">CLINIC INFORMATION</div>
            <div className="font-medium mb-1">The Sleep Institute • Santa Monica</div>
            <div className="text-sm text-[#64748B]">1420 Ocean Avenue<br />Santa Monica, CA 90401<br />+1 (310) 555-0142</div>
            <div className="text-xs mt-6 text-[#0F766E]">QR code and referral links can be generated here in production.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
