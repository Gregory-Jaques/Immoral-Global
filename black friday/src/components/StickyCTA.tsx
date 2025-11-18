'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Show when scrolling up and past hero section
      setIsVisible(scrollDirection === 'up' && currentScrollY > 600);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-surface-dark/95 backdrop-blur-sm border-t border-divider shadow-immoral"
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-24 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-text-secondary text-center sm:text-left">
                No dejes que tu competencia se adelante en Black Friday
              </p>
              
              <button 
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-accent-cobalt text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-cobalt/90 focus:outline-none focus:ring-2 focus:ring-accent-cobalt transition-all duration-200 active:bg-accent-cobalt/80 whitespace-nowrap">
                Quiero mi campaña Black Friday
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}