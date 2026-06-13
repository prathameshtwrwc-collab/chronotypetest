import { useState } from 'react';
import { Plus, Users, BarChart3, FileText, Activity, Building2, LogOut } from 'lucide-react';
import { defaultOrganizations } from '../../lib/content';
import { Organization, ContactRequest, AuditLog } from '../../types';

interface SuperAdminProps {
  onExit: () => void;
  onUpdateContent: (key: string, value: string) => void;
}

export function SuperAdmin({ onExit, onUpdateContent }: SuperAdminProps) {
  const [orgs, setOrgs] = useState<Organization[]>(defaultOrganizations);
  const [requests] = useState<ContactRequest[]>([
    { id: 'cr1', name: 'Dr. Lena Voss', email: 'lena@apexclinic.com', organization: 'Apex Clinic', message: 'We are interested in enterprise rollout for our 210 staff.', type: 'Corporate Program', createdAt: '2025-03-02T14:22:00Z', status: 'new' },
    { id: 'cr2', name: 'Prof. Michael Hale', email: 'mhale@stanford.edu', organization: 'Stanford Human Performance Lab', message: 'Requesting research partnership access.', type: 'University Licensing', createdAt: '2025-03-01T09:14:00Z', status: 'reviewed' },
  ]);
  const [auditLogs] = useState<AuditLog[]>([
    { id: 'a1', action: 'Organization activated', user: 'Super Admin', timestamp: '2h ago', details: 'Meridian Wellness' },
    { id: 'a2', action: 'FAQ updated', user: 'Super Admin', timestamp: 'Yesterday', details: 'Added chronotype question' },
  ]);
  const [activeTab, setActiveTab] = useState<'orgs' | 'requests' | 'content' | 'analytics' | 'audit'>('orgs');
  const [newOrg, setNewOrg] = useState({ name: '', email: '' });

  const toggleActive = (id: string) => {
    setOrgs(orgs.map(o => o.id === id ? { ...o, active: !o.active } : o));
  };

  const addOrganization = () => {
    if (!newOrg.name) return;
    const org: Organization = {
      id: 'org' + Date.now(),
      name: newOrg.name,
      slug: newOrg.name.toLowerCase().replace(/\s+/g, '-'),
      logoText: newOrg.name.slice(0, 2).toUpperCase(),
      primaryColor: '#0F766E',
      accentColor: '#67E8F9',
      contactEmail: newOrg.email || 'contact@' + newOrg.name.toLowerCase().replace(/\s+/g, '') + '.org',
      contactPhone: '+1 (555) 010-0000',
      clinicAddress: 'To be updated',
      website: newOrg.name.toLowerCase().replace(/\s+/g, '') + '.org',
      active: true,
    };
    setOrgs([...orgs, org]);
    setNewOrg({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0A1421]">
      <div className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-9 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-semibold tracking-tight text-2xl">Chronotype</div>
            <div className="px-3 py-px rounded text-[10px] font-medium tracking-[1.5px] bg-[#0A1421] text-white">SUPER ADMIN</div>
          </div>
          <button onClick={onExit} className="flex items-center gap-2 text-sm px-5 py-2 rounded-xl border hover:bg-[#F5F2ED]"><LogOut size={16} /> Exit to Public</button>
        </div>

        <div className="max-w-7xl mx-auto px-9 border-t flex gap-8 text-sm">
          {[
            { id: 'orgs', label: 'Organizations', icon: Building2 },
            { id: 'requests', label: 'Leads & Requests', icon: Users },
            { id: 'content', label: 'CMS & Content', icon: FileText },
            { id: 'analytics', label: 'Platform Analytics', icon: BarChart3 },
            { id: 'audit', label: 'Audit Logs', icon: Activity },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`py-4 border-b-2 flex items-center gap-2 font-medium text-sm ${activeTab === tab.id ? 'border-[#0A1421] text-[#0A1421]' : 'border-transparent text-[#64748B]'}`}>
              <tab.icon size={15} /> {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-9 py-12">
        {/* ORGANIZATIONS */}
        {activeTab === 'orgs' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div><div className="font-semibold text-3xl tracking-[-1px]">Organizations</div><div className="text-sm text-[#64748B]">White-label control across all clients</div></div>
              <div className="flex items-center gap-3">
                <input value={newOrg.name} onChange={e => setNewOrg({ ...newOrg, name: e.target.value })} placeholder="New organization name" className="input-premium px-5 py-2.5 rounded-2xl text-sm w-72" />
                <input value={newOrg.email} onChange={e => setNewOrg({ ...newOrg, email: e.target.value })} placeholder="Primary email" className="input-premium px-5 py-2.5 rounded-2xl text-sm w-60" />
                <button onClick={addOrganization} className="bg-[#0A1421] text-white px-7 py-2.5 rounded-2xl text-sm flex items-center gap-2"><Plus size={16} /> CREATE</button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border overflow-hidden">
              <table className="w-full table-premium text-sm">
                <thead><tr className="text-left bg-[#FAF8F5]"><th className="pl-9 py-4">Organization</th><th>Contact</th><th>Branding</th><th>Status</th><th className="pr-9">Actions</th></tr></thead>
                <tbody>
                  {orgs.map(org => (
                    <tr key={org.id} className="border-t">
                      <td className="pl-9 py-6 font-medium">{org.name}<div className="text-xs text-[#64748B] font-normal">{org.website}</div></td>
                      <td className="text-[#64748B]">{org.contactEmail}<br /><span className="text-xs">{org.contactPhone}</span></td>
                      <td><span style={{ background: org.primaryColor }} className="inline-block w-5 h-5 rounded mr-2 align-middle" /> {org.primaryColor}</td>
                      <td><span className={`px-3 py-px rounded-full text-[10px] ${org.active ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-200 text-zinc-600'}`}>{org.active ? 'ACTIVE' : 'INACTIVE'}</span></td>
                      <td className="pr-9"><button onClick={() => toggleActive(org.id)} className="text-xs px-4 py-1 border rounded-full hover:bg-[#FAF8F5]">{org.active ? 'Deactivate' : 'Activate'}</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* LEADS */}
        {activeTab === 'requests' && (
          <div>
            <div className="font-semibold text-3xl tracking-[-1px] mb-8">Contact Requests & Leads</div>
            <div className="bg-white border rounded-3xl overflow-hidden">
              {requests.map((r, i) => (
                <div key={i} className="p-8 border-b last:border-b-0 grid md:grid-cols-12 gap-y-3">
                  <div className="md:col-span-3"><div className="font-medium">{r.name}</div><div className="text-xs text-[#64748B]">{r.email}</div></div>
                  <div className="md:col-span-3 text-sm"><span className="text-[#0F766E] font-medium">{r.type}</span><br />{r.organization}</div>
                  <div className="md:col-span-5 text-sm text-[#334155] pr-3">{r.message}</div>
                  <div className="md:col-span-1 text-right text-xs text-[#64748B]">{new Date(r.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CMS - Content Editor */}
        {activeTab === 'content' && (
          <div className="max-w-3xl">
            <div className="font-semibold text-3xl tracking-[-1px] mb-3">CMS Content Editor</div>
            <p className="text-sm text-[#64748B] mb-9">All public site text is editable here. Changes are reflected live in preview mode.</p>
            
            <div className="space-y-8">
              {[
                ['heroTitle', 'Hero Title'], ['heroSubtitle', 'Hero Subtitle'],
                ['whySleepTitle', 'Why Sleep Title'], ['whySleepBody', 'Why Sleep Body'],
                ['cyclesTitle', 'Cycles Section Title'],
                ['chronotypesTitle', 'Chronotypes Title'],
                ['pillarsTitle', 'Pillars Title'],
                ['faqTitle', 'FAQ Title']
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="block text-xs tracking-widest text-[#0F766E] mb-2">{label}</label>
                  <input 
                    className="w-full input-premium px-6 py-4 rounded-3xl text-lg" 
                    defaultValue={localStorage.getItem('cms_' + key) || ''} 
                    placeholder="Enter content..." 
                    onBlur={(e) => onUpdateContent(key, e.target.value)} 
                  />
                </div>
              ))}
            </div>
            <div className="text-[11px] mt-10 text-[#64748B]">All changes are stored in browser session and will be reflected immediately on the public site.</div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <div className="font-semibold text-3xl tracking-[-1px] mb-8">Platform Analytics</div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { val: "184", label: "Active Organizations" },
                { val: "41,290", label: "Registered Users" },
                { val: "92.4k", label: "Monthly Assessments" },
              ].map((m, i) => (
                <div key={i} className="bg-white border rounded-3xl p-9">
                  <div className="text-[68px] font-semibold tracking-[-5px] leading-none mb-2 text-[#0A1421]">{m.val}</div>
                  <div className="uppercase tracking-[2px] text-xs text-[#64748B]">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-white border rounded-3xl p-9 text-sm text-[#64748B]">Full analytics dashboard, retention cohorts, and conversion funnels available in production.</div>
          </div>
        )}

        {activeTab === 'audit' && (
          <div>
            <div className="font-semibold text-3xl tracking-[-1px] mb-7">Audit Logs</div>
            <div className="bg-white rounded-3xl overflow-hidden border text-sm">
              {auditLogs.map((log, idx) => (
                <div key={idx} className="px-9 py-5 border-b last:border-0 flex justify-between items-center">
                  <div><span className="font-medium text-[#0A1421]">{log.action}</span> — {log.details}</div>
                  <div className="text-xs text-[#64748B]">{log.user} · {log.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
