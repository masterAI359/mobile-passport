import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface LanguageSelectorProps {
  className?: string;
  onLanguageSelect?: (language: Language) => void;
  selectedLanguage?: string;
}

const languages: Language[] = [
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
  onLanguageSelect,
  selectedLanguage = 'ja'
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getOpacity = (index: number) => {
    const itemHeight = 60; // Height of each language item
    const containerHeight = 300; // Height of visible container
    const centerY = containerHeight / 2;
    
    const itemCenterY = (index * itemHeight) + (itemHeight / 2);
    const distanceFromCenter = Math.abs(itemCenterY - centerY - scrollPosition);
    const maxDistance = containerHeight / 2;
    
    const opacity = Math.max(0.1, 1 - (distanceFromCenter / maxDistance));
    return opacity;
  };

  const handleLanguageClick = (language: Language) => {
    onLanguageSelect?.(language);
    
    // Scroll to the selected language
    const index = languages.findIndex(lang => lang.code === language.code);
    if (scrollRef.current && index !== -1) {
      const itemHeight = 60;
      const targetScrollTop = index * itemHeight;
      scrollRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn(
      "relative w-80 h-80 flex items-center justify-center",
      className
    )}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-[40px] border border-white/20" />
      
      {/* Scrollable container */}
      <div 
        ref={containerRef}
        className="relative w-full h-80 overflow-hidden"
      >
        <div 
          ref={scrollRef}
          className="h-full overflow-y-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Top padding for centering */}
          <div className="h-32" />
          
          {/* Language items */}
          <div className="flex flex-col items-center space-y-4 px-6">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageClick(language)}
                className={cn(
                  "w-full h-12 flex items-center justify-center rounded-lg transition-all duration-200",
                  "hover:bg-white/10 active:bg-white/20",
                  selectedLanguage === language.code && "bg-white/20"
                )}
                style={{
                  opacity: getOpacity(index),
                  transform: `scale(${selectedLanguage === language.code ? 1.05 : 1})`
                }}
              >
                <span className="text-white text-lg font-medium">
                  {language.nativeName}
                </span>
              </button>
            ))}
          </div>
          
          {/* Bottom padding for centering */}
          <div className="h-32" />
        </div>
      </div>
      
      {/* Center indicator */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-12 border-2 border-white/30 rounded-lg pointer-events-none" />
    </div>
  );
};

export { LanguageSelector }; 