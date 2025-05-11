'use client'
import { useTheme } from '@/contexts/ThemeContext';

export default function WritingPost({ params }) {
  const { darkMode } = useTheme();
  const { slug } = params;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1A1A1A]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className={`prose ${darkMode ? 'prose-invert' : ''} lg:prose-xl`}>
          <h1 className={`text-4xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            {slug.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h1>
          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {/* Content will go here */}
            <p>Coming soon...</p>
          </div>
        </article>
      </div>
    </div>
  );
} 