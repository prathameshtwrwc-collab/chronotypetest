export function Footer() {
  return (
    <footer className="bg-[#0A1421] text-[#64748B] pt-20 pb-16 text-xs">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-12 gap-y-14">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/90 rounded-xl flex items-center justify-center">
              <span className="text-[#0A1421] text-lg">☾</span>
            </div>
            <div className="text-white text-xl tracking-tight font-medium">Chronotype</div>
          </div>
          <div className="max-w-[300px]">A premium sleep awareness ecosystem. Built for organizations committed to human performance and long-term wellbeing.</div>
        </div>

        <div className="md:col-span-3 text-[13px] space-y-px">
          <div className="font-medium text-[#A5B4C2] mb-2.5 tracking-[1px]">FOR ORGANIZATIONS</div>
          <div>Enterprise Programs</div>
          <div>Clinical Partnerships</div>
          <div>University Licensing</div>
          <div>Corporate Wellness</div>
        </div>

        <div className="md:col-span-4">
          <div className="text-[#A5B4C2] mb-3 tracking-[1px] text-xs">FOOTER DISCLAIMER</div>
          <div className="text-[#A5B4C2] leading-[1.65] max-w-md">
            Chronotype provides educational content and general wellness information. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition or sleep concerns.
          </div>
          <div className="mt-9 text-[10px] tracking-widest">© {new Date().getFullYear()} CHRONOTYPE PLATFORM. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}
