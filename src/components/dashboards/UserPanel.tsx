import { useState } from 'react';
import { LogOut, Bookmark, User as UserIcon, Calendar, Heart, FileText } from 'lucide-react';

interface UserPanelProps {
  onExit: () => void;
}

export function UserPanel({ onExit }: UserPanelProps) {
  const [profile] = useState({ name: 'Alex Rivera', email: 'alex.rivera@personal.com', chronotype: 'EAGLE' as const });
  const [bookmarks, setBookmarks] = useState([
    { id: 'a1', title: 'The Architecture of Restorative Sleep', saved: 'Feb 28' },
    { id: 'a2', title: 'Light as Medicine: Circadian Timing', saved: 'Mar 1' },
  ]);
  const [showAssessment, setShowAssessment] = useState(false);

  const toggleBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-2xl bg-[#0A1421] flex items-center justify-center"><Heart className="w-4.5 h-4.5 text-[#67E8F9]" /></div>
            <div>
              <div className="font-semibold tracking-tight text-xl">Chronotype</div>
              <div className="text-[10px] text-[#64748B] -mt-1">YOUR PERSONAL SPACE</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="px-4 py-1.5 rounded-full bg-[#F5F2ED] text-xs tracking-widest">WELCOME, {profile.name.split(' ')[0].toUpperCase()}</div>
            <button onClick={onExit} className="px-5 py-[9px] rounded-2xl border text-sm flex items-center gap-2 hover:bg-[#FAF8F5]"><LogOut size={15} /> Exit</button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-12 gap-7">
          {/* Profile Card */}
          <div className="md:col-span-5 rounded-3xl bg-white p-9 border">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#EDE8E0] flex items-center justify-center"><UserIcon size={28} className="text-[#64748B]" /></div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">{profile.name}</div>
                <div className="text-sm text-[#64748B]">{profile.email}</div>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[1.5px] text-[#0F766E] mb-1.5">YOUR CHRONOTYPE</div>
              <div className="inline-block px-7 py-1.5 text-lg tracking-[-0.3px] font-medium rounded-2xl border" style={{ borderColor: '#0F766E20' }}>{profile.chronotype}</div>
            </div>

            <div className="mt-9 text-sm">
              <button onClick={() => setShowAssessment(true)} className="w-full py-4 rounded-2xl bg-[#0A1421] text-white text-sm tracking-wider">TAKE SLEEP ASSESSMENT →</button>
              <div className="mt-3 text-xs text-center text-[#64748B]">Future-ready. Generates a personalized report.</div>
            </div>
          </div>

          {/* Bookmarks */}
          <div className="md:col-span-7 rounded-3xl bg-white border p-9">
            <div className="flex items-center gap-3 mb-7"><Bookmark size={18} /><div className="font-medium tracking-tight">Saved Articles &amp; Insights</div></div>
            
            {bookmarks.length > 0 ? (
              <div className="space-y-3">
                {bookmarks.map(b => (
                  <div key={b.id} className="flex justify-between items-center bg-[#FAF8F5] px-6 py-5 rounded-2xl text-sm">
                    <div>
                      <div className="font-medium tracking-tight">{b.title}</div>
                      <div className="text-xs text-[#64748B] mt-px">Saved {b.saved}</div>
                    </div>
                    <button onClick={() => toggleBookmark(b.id)} className="text-xs px-5 py-1 border rounded-full">Remove</button>
                  </div>
                ))}
              </div>
            ) : <div className="text-[#64748B] text-sm">No saved articles yet. Browse the public site to save content.</div>}
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-12 grid md:grid-cols-3 gap-5 pt-4">
            {[
              { icon: Calendar, title: "Sleep Log", desc: "Track nightly rhythms. Coming soon." },
              { icon: FileText, title: "Download Reports", desc: "PDF summaries of your data." },
              { icon: Heart, title: "Connect Specialist", desc: "Book a consultation." },
            ].map((a, idx) => (
              <div key={idx} className="bg-white border rounded-3xl p-8">
                <a.icon className="text-[#0F766E]" />
                <div className="font-medium tracking-tight mt-4 mb-1 text-lg">{a.title}</div>
                <div className="text-sm text-[#64748B]">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-5 z-[200]">
          <div className="bg-white rounded-3xl max-w-md w-full p-9">
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#EDE8E0] flex items-center justify-center"><FileText className="text-[#0F766E]" /></div>
              <div className="text-2xl tracking-tight font-semibold">Sleep Assessment</div>
              <p className="text-sm text-[#64748B] mt-2">This module is ready for future integration. A personalized chronotype report will be generated here.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button onClick={() => setShowAssessment(false)} className="h-12 border rounded-2xl">CLOSE</button>
              <button onClick={() => { alert('Assessment complete. In production this would generate a tailored PDF report.'); setShowAssessment(false); }} className="h-12 bg-[#0A1421] text-white rounded-2xl">COMPLETE DEMO ASSESSMENT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
