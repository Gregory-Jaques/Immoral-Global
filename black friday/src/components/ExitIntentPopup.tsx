'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Clock } from 'lucide-react';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Also show after 60 seconds if user hasn't left
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaim = () => {
    setIsVisible(false);
    // Here you would typically scroll to contact form or open a modal
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-surface-dark border border-accent-cobalt/30 rounded-xl p-8 max-w-md w-full relative shadow-immoral"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-cobalt/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-accent-cobalt" />
              </div>

              <h3 className="text-text-primary mb-4">
                ¡Espera! Te regalamos una guía exclusiva
              </h3>

              <p className="text-text-secondary mb-6 leading-relaxed">
                Descarga gratis nuestra <span className="text-accent-cobalt font-semibold">"Guía de Black Friday 2025"</span> con las 15 estrategias que más ventas generan.
              </p>

              {/* Urgency element */}
              <div className="bg-accent-cobalt/10 border border-accent-cobalt/20 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-accent-cobalt text-small font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Solo disponible por tiempo limitado</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleClaim}
                  className="w-full bg-accent-cobalt text-white py-3 rounded-lg font-medium hover:bg-accent-cobalt/90 transition-all duration-200"
                >
                  Sí, quiero la guía gratis
                </button>
                
                <button
                  onClick={handleClose}
                  className="w-full text-text-secondary hover:text-text-primary text-small transition-colors"
                >
                  No gracias, continuar sin la guía
                </button>
              </div>

              {/* Social proof */}
              <p className="text-text-secondary text-small mt-4">
                +2,847 marcas ya la descargaron
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}