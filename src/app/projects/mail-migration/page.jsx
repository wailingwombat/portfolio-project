'use client'
import ProjectLayout from '@/components/Projects/ProjectLayout';
import { projects } from '@/constants/projects';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const project = projects.find(p => p.id === 'mail-migration');

  const handleSetActiveTab = (tab) => {
    router.push(`/${tab === 'work' ? '' : tab}`);
  };

  return <ProjectLayout project={project} setActiveTab={handleSetActiveTab} />;
} 