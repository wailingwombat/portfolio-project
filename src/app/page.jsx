'use client'
import Work from '@/components/Sections/Work';
import About from '@/components/Sections/About';
import Resume from '@/components/Sections/Resume';
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