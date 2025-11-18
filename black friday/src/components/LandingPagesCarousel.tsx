'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Smartphone } from 'lucide-react';
import laconicomDesktop from 'figma:asset/4c551a8a1b2239c4f97a5de13da09c9ffa9971d2.png';
import laconicomMobile from 'figma:asset/216f5762e5c88b963627556c28b4d9fb02050205.png';
import nutritionDesktop from 'figma:asset/91efef9c7d0f00c6697a53be84c337a4b4af7e74.png';
import nutritionMobile from 'figma:asset/fc377c9f442839952816c32c57a357d73e4cc205.png';

const landingPages = [
  {
    id: 1,
    title: "Belleza",
    industry: "Cosmética & Belleza",
    desktop: laconicomDesktop,
    mobile: laconicomMobile,
    description: "Landing optimizada para Black Friday con 50% descuento"
  },
  {
    id: 2,
    title: "Nutrición",
    industry: "Salud & Bienestar",
    desktop: nutritionDesktop,
    mobile: nutritionMobile,
    description: "Campaña de transformación en 7 días con promoción especial"
  }
];

export function LandingPagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('mobile');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % landingPages.length);
    }, 6000); // Cambia cada 6 segundos (más tiempo para apreciar las landing pages)

    return () => clearInterval(interval);
  }, []);

  const currentPage = landingPages[currentIndex];
  const currentImage = viewMode === 'desktop' ? currentPage.desktop : currentPage.mobile;

  return (
    <div className="relative w-full">
      {/* Header with controls */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-text-primary font-semibold mb-1">
            {currentPage.title}
          </h4>
          <p className="text-text-secondary text-sm">
            {currentPage.industry}
          </p>
        </div>
        
        {/* Device toggle */}
        <div className="flex bg-surface-dark rounded-lg p-1 border border-divider">
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
              viewMode === 'desktop'
                ? 'bg-accent-cobalt text-white'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Monitor className="w-4 h-4" />
            Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
              viewMode === 'mobile'
                ? 'bg-accent-cobalt text-white'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Mobile
          </button>
        </div>
      </div>

      {/* Main carousel container */}
      <div className="relative bg-surface-dark rounded-xl overflow-hidden shadow-immoral border border-divider">
        <div className={`relative ${viewMode === 'desktop' ? 'aspect-[16/10]' : 'aspect-[9/16] max-w-sm mx-auto'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${viewMode}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={`${currentPage.title} - ${viewMode} version`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-graphite flex items-center justify-center border border-divider">
                  <div className="text-center text-text-secondary">
                    <Smartphone className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Versión móvil próximamente</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/50 to-transparent p-6">
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-primary text-sm"
          >
            {currentPage.description}
          </motion.p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {landingPages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent-cobalt w-8' 
                : 'bg-divider hover:bg-text-secondary'
            }`}
            aria-label={`Ir al ejemplo ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-divider rounded-full h-1 mt-4">
        <motion.div
          key={currentIndex}
          className="h-full bg-accent-cobalt rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
}