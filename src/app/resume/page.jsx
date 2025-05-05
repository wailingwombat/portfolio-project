'use client'
import Resume from '@/components/Sections/Resume';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleSetActiveTab = (tab) => {
    router.push(`/${tab === 'work' ? '' : tab}`);
  };

  return <Resume setActiveTab={handleSetActiveTab} />;
} 