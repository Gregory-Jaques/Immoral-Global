'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Zap } from 'lucide-react';

export function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set campaign deadline (November 10th)
    const blackFriday = new Date('2025-11-10T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = blackFriday.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-accent-cobalt/10 to-accent-cobalt/5 border-y border-accent-cobalt/20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-accent-cobalt" />
            <span className="text-accent-cobalt text-lg font-semibold">OFERTA LIMITADA</span>
          </div>
          
          
          
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Las marcas que reserven antes del 10 de noviembre obtienen <span className="text-accent-cobalt font-semibold">20% de descuento</span>.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 lg:gap-8 mb-8">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div key={unit.label} className="text-center">
                <div className="bg-surface-dark border border-accent-cobalt/30 rounded-lg p-4 lg:p-6 min-w-[80px] lg:min-w-[100px]">
                  <div className="text-2xl lg:text-3xl font-bold text-accent-cobalt">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="text-text-secondary text-small mt-2">{unit.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button  
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
              className="bg-accent-cobalt text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-cobalt/90 focus:outline-none focus:ring-2 focus:ring-accent-cobalt transition-all duration-200 text-center">
              Reservar con descuento
            </button>
            <div className="flex items-center justify-center gap-2 text-text-secondary text-small">
              <Clock className="w-4 h-4" />
              <span>Últimas 10 plazas disponibles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}