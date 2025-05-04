'use client'
import About from '@/components/sections/About';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleSetActiveTab = (tab) => {
    router.push(`/${tab === 'work' ? '' : tab}`);
  };

  return <About setActiveTab={handleSetActiveTab} />;
} 