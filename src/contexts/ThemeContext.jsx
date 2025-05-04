'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // If no saved preference, use system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleChange);

    // Update localStorage and document class
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#202124';
      document.body.style.backgroundColor = '#202124';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#F6F3EF';
      document.body.style.backgroundColor = '#F6F3EF';
    }

    // Cleanup listener
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}