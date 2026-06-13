import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function ContactModal({ onClose, onSubmit }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', organization: '', type: 'Consultation', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    onSubmit({ ...form, createdAt: new Date().toISOString(), id: 'cr' + Date.now() });
    onClose();
  };

  return (
    <div id="contact-modal" className="fixed inset-0 bg-black/70 backdrop-blur z-[200] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center px-8 py-6 border-b">
          <div>
            <div className="font-medium text-xl tracking-tight">Speak with a Specialist</div>
            <div className="text-xs text-[#64748B]">Our team will respond within 1 business day</div>
          </div>
          <button onClick={onClose} className="text-[#64748B]"><X size={21} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input className="input-premium px-5 py-3.5 rounded-2xl text-sm" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input className="input-premium px-5 py-3.5 rounded-2xl text-sm" type="email" placeholder="Work email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <input className="input-premium px-5 py-3.5 rounded-2xl w-full text-sm" placeholder="Organization / Clinic (optional)" value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} />
          
          <select className="input-premium px-5 py-3.5 rounded-2xl w-full text-sm text-[#334155]" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
            <option>Consultation</option>
            <option>Corporate Program</option>
            <option>Clinical Partnership</option>
            <option>University Licensing</option>
            <option>General Inquiry</option>
          </select>

          <textarea className="input-premium px-5 py-4 rounded-3xl w-full text-sm min-h-[114px]" placeholder="Tell us about your goals or concerns..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />

          <button type="submit" className="mt-3 w-full h-14 rounded-2xl bg-[#0A1421] text-white font-medium tracking-wider text-sm">SUBMIT REQUEST</button>
          <div className="text-[10px] text-center text-[#64748B]">Your information is confidential and will never be shared.</div>
        </form>
      </div>
    </div>
  );
}
