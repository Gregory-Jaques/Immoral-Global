'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import client logos - Puedes cambiar cada uno independientemente
import clientLogo1 from 'figma:asset/7f9325acca416103ec2e755060f9ba5a1b5196d2.png';
import clientLogo2 from 'figma:asset/562b9e00d0b38e2791ea6d81a5e8d4b076394968.png';
import clientLogo3 from 'figma:asset/5afd006fec063a2551b64d0238579f7e2602732b.png';
import clientLogo4 from 'figma:asset/88080a6e2d1a7ecc3e47bc71ecdd56a2477d8a36.png';
import clientLogo5 from 'figma:asset/f7ba010f4c1a8872c6803024c046a6e47aba3993.png';
import clientLogo6 from 'figma:asset/d64d1c9dfff66e007acfda6e37484edb6964497b.png';
import clientLogo7 from 'figma:asset/c873530bfd83f5c8cc5e16c6dfcdebb43866b4de.png';
import clientLogo8 from 'figma:asset/a0c04ff1e3b5f57f5172acdd50494220e93b0e0b.png';
import clientLogo9 from 'figma:asset/a37a1e1008b39355a5f39fd744205b42d5c89bbd.png';
import clientLogo10 from 'figma:asset/3aae843fe0de21edc4198665f9a6783f05728fc9.png';

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState(6);
  
  // Array de logos con imágenes independientes - Cambia cada src individualmente
  const logos = [
    { id: 1, name: 'Cliente 1', src: clientLogo6 },
    { id: 2, name: 'Cliente 2', src: clientLogo2 },
    { id: 3, name: 'Cliente 3', src: clientLogo3 },
    { id: 4, name: 'Cliente 4', src: clientLogo4 },
    { id: 5, name: 'Cliente 5', src: clientLogo7 },
    { id: 6, name: 'Cliente 6', src: clientLogo8 },
    { id: 7, name: 'Cliente 7', src: clientLogo9 },
    { id: 8, name: 'Cliente 8', src: clientLogo10 },
  ];

  // Hook para detectar el tamaño de pantalla
  useEffect(() => {
    const updateVisibleLogos = () => {
      if (window.innerWidth < 768) { // mobile
        setVisibleLogos(1);
      } else { // tablet y desktop
        setVisibleLogos(6);
      }
    };

    updateVisibleLogos();
    window.addEventListener('resize', updateVisibleLogos);
    return () => window.removeEventListener('resize', updateVisibleLogos);
  }, []);

  const maxIndex = Math.max(0, logos.length - visibleLogos);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Reset currentIndex when visibleLogos changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleLogos]);

  return (
    <section className="py-6 lg:py-16 bg-deep-navy">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-text-primary mb-16 max-w-3xl mx-auto text-[30px] lg:text-3xl font-black tracking-light leading-tight lg:leading-[0.9]">
            Ya hemos ayudado a +30 marcas a disparar sus ventas en fechas clave.
          </h3>

          {/* Logo Carousel */}
          <div className="relative">
            {/* Desktop/Tablet - Grid de múltiples logos (mantener como está) */}
            <div className="hidden md:flex items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                aria-label="Previous brands"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
              </button>

              {/* Logo Container */}
              <div className="flex-1 overflow-hidden">
                <motion.div
                  className="flex gap-2"
                  animate={{ x: -currentIndex * (100 / visibleLogos) + '%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ width: `${(logos.length / visibleLogos) * 100}%` }}
                >
                  {logos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                      style={{ width: `${100 / logos.length}%` }}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="w-24 h-10 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                aria-label="Next brands"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile - Un logo por vez */}
            <div className="md:hidden">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={prevSlide}
                  className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                  aria-label="Previous brand"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                </button>
                
                <span className="text-text-secondary text-sm">
                  {currentIndex + 1} de {logos.length}
                </span>
                
                <button
                  onClick={nextSlide}
                  className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                  aria-label="Next brand"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Single Logo Display */}
              <div className="flex justify-center">
                <motion.div
                  key={currentIndex}
                  className="w-40 h-20 flex items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <img 
                    src={logos[currentIndex].src} 
                    alt={logos[currentIndex].name} 
                    className="w-36 h-16 object-contain filter brightness-75"
                  />
                </motion.div>
              </div>
            </div>

            {/* Dots indicator - Solo mostrar si hay múltiples slides */}
            {maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      i === currentIndex ? 'bg-accent-cobalt' : 'bg-divider'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}