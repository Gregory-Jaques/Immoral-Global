"use client";

import React from "react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative bg-deep-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-deep-navy via-graphite to-deep-navy opacity-90"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-24 pt-32 pb-12 text-center">
        <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-text-primary mb-8 text-5xl lg:text-8xl leading-[0.9] font-black tracking-tight">
                Multiplica tus ventas<br />{" "}
                <span className="text-accent-cobalt">
                  este Black Friday
                </span>{" "}
                
              </h1>
              <p className="font-sans font-thin text-3xl">No dejes que tu diseño te frene</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="border-2 border-accent-cobalt text-[rgba(255,255,255,1)] bg-transparent px-8 py-4 rounded-lg text-lg hover:bg-accent-cobalt hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-cobalt transition-all duration-200 active:bg-accent-cobalt/80 active:text-white shadow-immoral text-center"
              >
                ¡Quiero saber más!
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-8 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-accent-cobalt text-2xl">
                  ★★★★★
                </span>
                <span className="text-text-secondary text-sm">
                  100% de satisfacción
                </span>
              </div>
              <div className="w-px h-6 bg-divider"></div>
              <div className="text-text-secondary text-sm">
                +200 campañas exitosas
              </div>
            </motion.div>
        </div>


      </div>
    </section>
  );
}