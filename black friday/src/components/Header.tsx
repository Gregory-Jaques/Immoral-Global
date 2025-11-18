'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/863a4d581deb9748032676c1d97ee17993dbf130.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-deep-navy/95 backdrop-blur-sm shadow-immoral py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="bg-accent-cobalt text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-cobalt/90 focus:outline-none focus:ring-2 focus:ring-accent-cobalt transition-all duration-200 active:bg-accent-cobalt/80"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </motion.header>
  );
}