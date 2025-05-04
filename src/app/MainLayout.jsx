'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    const route = pathname.split('/')[1] || 'work';
    setActiveTab(route);
  }, [pathname]);

  return (
    <div className="min-h-screen font-source-sans-pro flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
} 