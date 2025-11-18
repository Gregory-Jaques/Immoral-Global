'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import image1 from 'figma:asset/37a4a1f753090bf1ac2fa4742c85e88113ee31a6.png';
import image2 from 'figma:asset/4ba5aaa916fc82ca07287603d0d2b360551e93a8.png';
import image3 from 'figma:asset/159bece97d39f9b6f3b7ffe340ba3496e60e137b.png';
import image4 from 'figma:asset/9575c07b6fc6edd8f85df45fe47fc0bc120ec82c.png';
import image5 from 'figma:asset/27734c24764701ec90a81948e74d7ffee5891bee.png';
import image6 from 'figma:asset/32b7369a4b7f011f33175d2f9bab7b0ee4bc6da4.png';

const images = [
  {
    src: image1,
    alt: "Etiqueta de descuento Black Friday 65% off",
    title: "Descuentos Black Friday"
  },
  {
    src: image2,
    alt: "Campaña Black Friday con modelo femenina",
    title: "Campañas de Moda"
  },
  {
    src: image3,
    alt: "Sushi Black Friday promoción especial con descuentos",
    title: "Publicidad Gastronómica"
  },
  {
    src: image4,
    alt: "Promoción sorteo Black Friday con megáfono",
    title: "Sorteos y Promociones"
  },
  {
    src: image5,
    alt: "Laptop Black Friday con grandes descuentos tecnología",
    title: "Promociones de Tecnología"
  },
  {
    src: image6,
    alt: "Black Friday ofertas hasta 50% off con bolsa roja",
    title: "Campañas de Descuentos"
  }
];

export function CanvaPackCarousel() {
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
      <div className="relative aspect-[3/4] bg-surface-dark rounded-2xl overflow-hidden shadow-immoral border border-divider">
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