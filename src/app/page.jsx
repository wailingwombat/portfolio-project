'use client'
import Work from '@/components/sections/Work';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import { usePathname } from 'next/navigation';

export default function Page({ setActiveTab }) {
  const pathname = usePathname();
  const route = pathname.split('/')[1] || 'work';

  const handleSetActiveTab = (tab) => {
    if (typeof setActiveTab === 'function') {
      setActiveTab(tab);
    }
  };

  return (
    <>
      {route === "work" && <Work setActiveTab={handleSetActiveTab} />}
      {route === "about" && <About />}
      {route === "resume" && <Resume />}
    </>
  );
}