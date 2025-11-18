'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Package, Globe, Target } from 'lucide-react';
import { CanvaPackCarousel } from './CanvaPackCarousel';
import { LandingPagesCarousel } from './LandingPagesCarousel';
import { PaidAdsCarousel } from './PaidAdsCarousel';

export function SolutionSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-text-primary text-center mb-16 lg:mb-24 text-[30px] lg:text-[42px] font-black tracking-light leading-tight lg:leading-[0.9] lg:px-[132px] py-[0px]">
            Todo lo que necesitas para impactar y convertir en Black Friday
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-8">
            {/* Paid Ads Card */}
            <motion.div
              className="bg-surface-dark rounded-xl p-8 lg:p-10 shadow-immoral"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent-cobalt/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-cobalt" strokeWidth={1.5} />
                </div>
                <h3 className="text-text-primary font-bold text-[20px]">Motion Ads</h3>
              </div>

              <p className="text-text-secondary mb-8 leading-relaxed">
                Videos publicitarios creados con IA para campañas en Meta y TikTok.
 Formatos tipo spot diseñados para captar atención y aumentar conversiones.
              </p>

              {/* Paid Ads Carousel */}
              <div className="mt-4">
                <PaidAdsCarousel />
              </div>
            </motion.div>

            {/* Landing Page Card */}
            <motion.div
              className="bg-surface-dark rounded-xl p-8 lg:p-10 shadow-immoral"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent-cobalt/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent-cobalt" strokeWidth={1.5} />
                </div>
                <h3 className="text-text-primary font-bold text-[20px]">Landing Page Black Friday</h3>
              </div>

              <p className="text-text-secondary mb-8 leading-relaxed">
                Página optimizada para vender, con diseño + copy que convierte.
              </p>

              {/* Landing Pages Carousel */}
              <div className="mt-4">
                <LandingPagesCarousel />
              </div>
            </motion.div>

            {/* CanvaPack Express Card */}
            <motion.div
              className="bg-surface-dark rounded-xl p-8 lg:p-10 shadow-immoral"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent-cobalt/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-accent-cobalt" strokeWidth={1.5} />
                </div>
                <h3 className="text-text-primary text-[20px] font-bold">CanvaPack Express</h3>
              </div>

              <p className="text-text-secondary mb-8 leading-relaxed">
                10 a 15 creatividades personalizadas para tu marca y listas para redes y ads
              </p>

              {/* Canva Pack Carousel */}
              <div className="mt-4">
                <CanvaPackCarousel />
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}