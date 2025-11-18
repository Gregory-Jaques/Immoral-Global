'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import video1 from 'figma:asset/671aa4536e3d2f8a946aaeca99810d01bad085d2.png';
import video2 from 'figma:asset/96455e293a32000e31f845c255ff0833e3b4a8f5.png';
import video3 from 'figma:asset/7023b4e8b4ace5339ec0fa5fd1fa8db320ac2cb1.png';

const images = [
  {
    src: video1,
    alt: "Video creativo para campañas publicitarias",
    title: "Motion Ad 1"
  },
  {
    src: video2,
    alt: "Video creativo lifestyle para redes sociales",
    title: "Motion Ad 2"
  },
  {
    src: video3,
    alt: "Video creativo minimalista para publicidad",
    title: "Motion Ad 3"
  }
];

export function PaidAdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel Container */}
      <div className="relative aspect-[9/16] bg-surface-dark rounded-2xl overflow-hidden shadow-immoral border border-divider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-dark/80 backdrop-blur-sm rounded-lg p-4 border border-accent-cobalt/20"
          >
            <p className="text-text-primary font-medium text-center">
              {images[currentIndex].title}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent-cobalt w-8' 
                : 'bg-divider hover:bg-text-secondary'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
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
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>
    </div>
  );
}