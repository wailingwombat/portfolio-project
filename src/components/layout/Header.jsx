'use client'
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { mainNavItems } from '@/constants/navigation';

export default function Header({ activeTab, setActiveTab }) {
  const { darkMode } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const NavLink = ({ item }) => (
    <Link
      href={item.path}
      onClick={() => {
        setActiveTab(item.id);
        setShowMenu(false);
      }}
      className={`text-lg md:text-xl font-source-sans-pro transition-colors ${
        activeTab === item.id
          ? darkMode
            ? "text-white"
            : "text-[#444]"
          : darkMode
          ? "text-gray-300 hover:text-white"
          : "text-[#666] hover:text-[#000]"
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <header>
      <nav
        className={`fixed w-full ${
          darkMode ? "bg-[#000]" : "bg-[#F6F3EF]"
        } shadow-sm z-50`}
      >
        <div className="max-w-10xl mx-auto px-6 md:px-20 py-4 flex justify-between items-baseline">
          {/* Logo/Name - Make it clickable */}
          <Link
            href="/"
            onClick={() => setActiveTab('work')}
            className={`text-2xl md:text-3xl lg:text-4xl flex items-center ${
              darkMode ? "text-white" : "text-[#333]"
            }`}
          >
            <Image 
              src={darkMode ? "/images/hanh_logo_white.svg" : "/images/hanh_logo.svg"}
              alt="Hạnh Logo"
              width={78}
              height={34}
              priority
              className="translate-y-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-baseline space-x-12">
            {mainNavItems.map(item => (
              <NavLink key={item.id} item={item} />
            ))}
            <div className="flex items-baseline">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`md:hidden flex items-baseline ${darkMode ? "text-white" : "text-[#333]"}`}
            aria-label="Toggle menu"
          >
            <i
              className={`fas ${showMenu ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-[#000]" : "bg-[#F6F3EF]"
            } p-4 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {mainNavItems.map(item => (
                <NavLink key={item.id} item={item} />
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}