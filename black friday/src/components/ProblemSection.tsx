'use client';

import React from 'react';
import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <p className="text-text-primary text-2xl lg:text-5xl leading-tight lg:leading-[0.9] font-black tracking-tight">
              El 80% de las marcas no preparan sus campañas a tiempo… y pierden ventas.
            </p>
            
            <p className="text-[rgba(255,255,255,1)] text-lg lg:text-xl leading-relaxed">
              ¿Vas a dejar pasar el evento de ventas más fuerte del año sin prepararte?
            </p>
          </div>
          
          <div className="mt-16 w-full h-px bg-divider"></div>
        </motion.div>
      </div>
    </section>
  );
}