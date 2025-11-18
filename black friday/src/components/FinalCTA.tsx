'use client';

import React from 'react';
import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-surface-dark hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-text-primary mb-12">
            Haz que tu Black Friday sea imposible de ignorar
          </h3>
          
          <button 
            onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
            className="bg-accent-cobalt text-white px-10 py-5 rounded-lg font-medium hover:bg-accent-cobalt/90 focus:outline-none focus:ring-2 focus:ring-accent-cobalt transition-all duration-200 active:bg-accent-cobalt/80 text-lg">
            Quiero mi campaña Black Friday
          </button>
        </motion.div>
      </div>
    </section>
  );
}