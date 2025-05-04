'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React from 'react';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    const route = pathname.split('/')[1] || 'work';
    setActiveTab(route);
  }, [pathname]);

  const handleSetActiveTab = (tab) => {
    console.log('ClientLayout setting active tab to:', tab);
    setActiveTab(tab);
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setActiveTab: handleSetActiveTab });
    }
    return child;
  });

  return (
    <div className="min-h-screen font-source-sans-pro flex flex-col">
      <Header activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <main className="flex-grow pt-16">
        {childrenWithProps}
      </main>
      <Footer />
    </div>
  );
} 