'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

export default function NotFound() {
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link 
          href="/"
          className={`inline-block px-6 py-3 rounded-full ${
            darkMode 
              ? "bg-white text-black hover:bg-gray-200" 
              : "bg-black text-white hover:bg-gray-800"
          } transition-colors`}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 