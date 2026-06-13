import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressPercent = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setProgress(Math.min(progressPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-[#0A1421]/5">
      <div 
        className="h-full bg-gradient-to-r from-[#0F766E] via-[#67E8F9] to-[#0F766E] transition-all duration-75" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}
