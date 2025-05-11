'use client'
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@/utils/scroll';
import Button from '../ui/Button'; // Import the new Button component
import { useRouter } from 'next/navigation';

export default function ProjectLayout({ project, setActiveTab }) {
  const { darkMode } = useTheme();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('overview');

  const parseMarkdownBoldAndParagraphs = (text) => {
    return text.split('\n\n').map((para, i) => (
      <p key={i} style={{ marginBottom: '1em' }}>
        {para.split('**').map((part, index) =>
          index % 2 === 0 ? part : <strong key={index}>{part}</strong>
        )}
      </p>
    ));
  };

  const generateTableOfContents = () => {
    return project.contentSections
      .filter(section => section.title) // Only include sections with titles
      .map(section => ({
        id: section.id,
        label: section.title
      }));
  };

  const sections = generateTableOfContents();
  
  const metaData = [
    { label: 'Timeline', value: project.timeline },
    { label: 'Role', value: project.role },
    { label: 'Team Size', value: project.team }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToWork = () => {
    setActiveTab('work');
    router.push('/');
  };

  // Render different section types
  const renderSection = (section) => {
    switch (section.type) {
      case 'text-with-image':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            {section.title && (
              <h2 className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-[#333]"
              } mb-4`}>
                {section.title}
              </h2>
            )}
            <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
              {parseMarkdownBoldAndParagraphs(section.content)}
            </div>
            {section.image && (
              <div className="mt-8 w-full rounded-lg overflow-hidden">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                  <Image
                    src={section.image}
                    alt={section.alt || section.title || 'Project image'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    {...section.imageProps}
                    onError={(e) => {
                      if (section.imageFallback) {
                        e.target.src = section.imageFallback;
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'image-grid':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            <h2 className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-[#333]"
            } mb-8`}>
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, index) => (
                <div key={index} className="relative">
                  <div className="relative h-[400px] w-full mb-4">
                    <Image
                      src={item.image}
                      alt={item.alt || item.description || ''}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        if (item.imageFallback) {
                          e.target.src = item.imageFallback;
                        }
                      }}
                    />
                  </div>
                  {item.description && (
                    <div className={`text-base ${
                      darkMode ? "text-gray-300" : "text-[#666]"
                    }`}>
                      {parseMarkdownBoldAndParagraphs(item.description)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'text-with-stats':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            <h2 className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-[#333]"
            } mb-4`}>
              {section.title}
            </h2>
            <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
              {parseMarkdownBoldAndParagraphs(section.content)}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? "bg-[#3A3F42]" : "bg-white"
                  } p-6 rounded-lg text-center shadow-sm`}
                >
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: project.companyColor }}
                  >
                    {stat.value}
                  </div>
                  <div className={`${
                    darkMode ? "text-gray-300" : "text-[#666]"
                  }`}>
                    {parseMarkdownBoldAndParagraphs(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'text-image-split':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            {section.title && (
              <h2 className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-[#333]"
              } mb-4`}>
                {section.title}
              </h2>
            )}
            <div className={`flex flex-col gap-6 md:gap-8 ${section.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Text Content */}
              <div className={`w-full md:w-1/2 ${section.centerText ? 'flex items-center' : ''}`}>
                <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
                  {parseMarkdownBoldAndParagraphs(section.content)}
                </div>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    paddingTop: section.imageHeight ? undefined : '75%',
                    height: section.imageHeight || undefined,
                    borderRadius: '20px'
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.alt || section.title || 'Project image'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    {...section.imageProps}
                    onError={(e) => {
                      if (section.imageFallback) {
                        e.target.src = section.imageFallback;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'quote':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16 py-12">
            <div className="relative">
              {/* Opening quote image */}
              <div className="absolute -top-6 -left-8">
                <Image
                  src="/images/quote-open.png"
                  alt="Opening quote"
                  width={40}
                  height={40}
                  style={{ width: 'auto' }}
                />
              </div>
              
              {/* Quote content */}
              <blockquote className={`text-xl leading-relaxed italic px-12 ${
                darkMode ? "text-gray-300" : "text-[#666]"
              }`}>
                {parseMarkdownBoldAndParagraphs(section.content)}
              </blockquote>
              
              {/* Closing quote image */}
              <div className="absolute -bottom-6 -right-8">
                <Image
                  src="/images/quote-close.png"
                  alt="Closing quote"
                  width={40}
                  height={40}
                  style={{ width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Attribution */}
            {section.attribution && (
              <div className={`mt-6 text-right ${
                darkMode ? "text-gray-400" : "text-[#888]"
              }`}>
                — {section.attribution}
              </div>
            )}
          </div>
        );

      case 'text-only':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            {section.title && (
              <h2 className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-[#333]"
              } mb-4`}>
                {section.title}
              </h2>
            )}
            <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
              {parseMarkdownBoldAndParagraphs(section.content)}
            </div>
          </div>
        );

      case 'text-side-by-side':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-[#333]"
                } mb-4`}>
                  {section.title}
                </h2>
              </div>
              <div>
                <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
                  {parseMarkdownBoldAndParagraphs(section.content)}
                </div>
              </div>
            </div>
          </div>
        );

      case 'image-only':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            {section.title && (
              <h2 className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-[#333]"
              } mb-4`}>
                {section.title}
              </h2>
            )}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
              <Image
                src={section.image}
                alt={section.alt || section.title || 'Project image'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                {...section.imageProps}
                onError={(e) => {
                  if (section.imageFallback) {
                    e.target.src = section.imageFallback;
                  }
                }}
              />
            </div>
          </div>
        );

      case 'icon-text-row':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {section.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4">
                    <i className={`${item.icon} text-4xl ${darkMode ? "text-white" : "text-[#333]"}`}></i>
                  </div>
                  <div className="w-full">
                    <h3 className={`text-xl font-semibold mb-2 text-center ${
                      darkMode ? "text-white" : "text-[#333]"
                    }`}>
                      {item.title}
                    </h3>
                    <div className={`text-base text-left ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
                      {parseMarkdownBoldAndParagraphs(item.content)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'image-with-caption':
        return (
          <div id={section.id} className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
              <Image
                src={section.image}
                alt={section.alt || section.title || 'Project image'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                {...section.imageProps}
                onError={(e) => {
                  if (section.imageFallback) {
                    e.target.src = section.imageFallback;
                  }
                }}
              />
            </div>
            <div className={`mt-4 text-base text-center ${darkMode ? "text-gray-400" : "text-[#666]"}`}>
              {parseMarkdownBoldAndParagraphs(section.caption)}
            </div>
          </div>
        );

      case 'title-image-split':
        return (
          <div id={section.id} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Image and Title */}
            <div className="flex items-center w-full md:w-1/2">
              <div className="relative object-contain mr-4 w-[20px] h-[20px]">
                <Image
                  src={section.image}
                  alt={section.alt || section.title || 'Section image'}
                  fill
                  sizes="(max-width: 768px) 100vw, 20px"
                  className="object-contain"
                  {...section.imageProps}
                  onError={(e) => {
                    if (section.imageFallback) {
                      e.target.src = section.imageFallback;
                    }
                  }}
                />
              </div>
              <span className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                {section.title}
              </span>
            </div>
            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <span className={`mt-4 text-base text-left ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
                {section.text}
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 relative">
      {/* Table of Contents - Fixed on right */}
      <div className="hidden lg:block fixed right-8 top-25 w-48">
        <div className={`p-4 rounded-lg ${
          darkMode ? "bg-[#3A3F42]" : "bg-white"
        } shadow-sm`}>
          <h3 className={`text-sm font-medium mb-4 ${
            darkMode ? "text-white" : "text-[#333]"
          }`}>
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors ${
                  activeSection === section.id
                    ? `${darkMode ? "text-white" : "text-[#333]"} font-medium`
                    : `${darkMode ? "text-gray-400" : "text-[#666]"} hover:${
                        darkMode ? "text-white" : "text-[#333]"
                      }`
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pr-64 xl:pl-24">
      {/* Back Button / Breadcrumb */}
      <div className="fixed left-8 top-25 hidden xl:block">
        <Button
          onClick={handleBackToWork}
          className="inline-flex items-center"
          text="Back to Work"
          icon={<i className="fas fa-arrow-left"></i>}
        />
      </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-2 flex items-baseline gap-2">
              <span className="font-bold text-lg md:text-xl" style={{ color: project.companyColor }}>
                {project.company}
              </span>
              <span className={`font-bold text-lg md:text-xl ${darkMode ? "text-white" : "text-black"}`}>
                {project.title}
              </span>
            </div>
            <div>
              <h1 className={`text-2xl md:text-4xl font-semibold leading-tight mt-4 mb-12 ${darkMode ? "text-white" : "text-black"}`}>
                {project.description}
              </h1>
            </div>
          </div>

          {/* Keep your image and metadata below */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
              onError={(e) => {
                if (project.imageFallback) {
                  e.target.src = project.imageFallback;
                }
              }}
            />
          </div>
        </div>

        {/* Place the metadata section on its own, outside of the removed block */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metaData.map((item, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-[#3A3F42]" : "bg-white"
                } p-6 rounded-lg text-center shadow-sm`}
              >
                <div className={`text-sm mb-2 ${
                  darkMode ? "text-gray-400" : "text-[#888]"
                }`}>
                  {item.label}
                </div>
                <div className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-[#666]"
                }`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render all sections */}
        {project.contentSections.map((section, idx) => (
          <div key={section.id || idx}>
            {renderSection(section)}
          </div>
        ))}
      </div>
    </div>
  );
}