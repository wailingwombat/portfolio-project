'use client'
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';
import Image from 'next/image';
import { MarkdownContent } from '@/utils/markdown';

export default function BlogLayout({ 
  title, 
  date, 
  children,
  readingTime = '5 min read'
}) {
  const { darkMode } = useTheme();
  const [fontSize, setFontSize] = useState('base');

  const fontSizes = {
    small: 'text-base',
    base: 'text-lg',
    large: 'text-xl',
    xl: 'text-2xl'
  };

  const increaseFont = () => {
    const sizes = ['small', 'base', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFont = () => {
    const sizes = ['small', 'base', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1A1A1A]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className={`prose ${darkMode ? 'prose-invert' : ''} lg:prose-xl`}>
          {/* Header Section */}
          <div className="mb-8">
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              {title}
            </h1>
            
            {/* Meta Information */}
            <div className={`flex items-center justify-between ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <div className="flex items-center space-x-4">
                <time dateTime={date}>{date}</time>
                <span>•</span>
                <span>{readingTime}</span>
              </div>
              
              {/* Font Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFont}
                  className={`p-2 rounded-full hover:bg-opacity-10 ${
                    darkMode 
                      ? 'hover:bg-white text-white' 
                      : 'hover:bg-black text-black'
                  }`}
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={increaseFont}
                  className={`p-2 rounded-full hover:bg-opacity-10 ${
                    darkMode 
                      ? 'hover:bg-white text-white' 
                      : 'hover:bg-black text-black'
                  }`}
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${fontSizes[fontSize]} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {typeof children === 'string' ? (
              <MarkdownContent>{children}</MarkdownContent>
            ) : (
              children
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

// Image with Caption Component
export function BlogImage({ src, alt, caption }) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video mb-2">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 