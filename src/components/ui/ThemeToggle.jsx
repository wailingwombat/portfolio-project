'use client'
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => {
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#202124';
      document.body.style.backgroundColor = '#202124';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#F6F3EF';
      document.body.style.backgroundColor = '#F6F3EF';
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        darkMode 
          ? "bg-[#1a1a1a] text-white hover:bg-[#282828]" 
          : "bg-white text-[#666] hover:bg-gray-100"
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <i className="fas fa-sun text-lg" />
      ) : (
        <i className="fas fa-moon text-lg" />
      )}
    </button>
  );
}