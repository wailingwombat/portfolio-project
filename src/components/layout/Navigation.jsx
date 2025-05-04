'use client'
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { mainNavItems } from '@/constants/navigation';

export default function Navigation({ activeTab, setActiveTab }) {
  const { darkMode } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`fixed w-full ${darkMode ? "bg-[#202124]" : "bg-[#F6F3EF]"} shadow-sm z-50`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold font-source-sans-pro ${darkMode ? "text-white" : "text-[#333]"}`}>
          Hanh Nguyen
        </h1>
        
        <div className="hidden md:flex space-x-8">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-source-sans-pro ${
                activeTab === item.id
                  ? darkMode ? "text-white" : "text-[#333]"
                  : darkMode ? "text-gray-300" : "text-[#666]"
              } hover:${darkMode ? "text-white" : "text-[#333]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`md:hidden ${darkMode ? "text-white" : "text-[#333]"}`}
        >
          <i className={`fas ${showMenu ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {showMenu && (
        <div className={`md:hidden ${darkMode ? "bg-[#282C10]" : "bg-[#F6F3EF]"} p-4`}>
          <div className="flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setShowMenu(false);
                }}
                className={`font-source-sans-pro ${
                  activeTab === item.id
                    ? darkMode ? "text-white" : "text-[#333]"
                    : darkMode ? "text-gray-300" : "text-[#666]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}