'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Crown, Package } from 'lucide-react';

const packages = [
  {
    name: "CanvaPack Express",
    icon: Package,
    price: "350€",
    originalPrice: "420€",
    description: "Perfecto para redes sociales y ads",
    features: [
      "10-15 creatividades profesionales",
      "Stories + Posts",
      "Creatividades para Meta Ads",
      "Headers para email marketing",
      "Entrega en 5 días",
      "2 rondas de cambios incluidas",
      "Archivos fuente incluidos"
    ],
    highlighted: false,
    cta: "Empezar ahora"
  },
  {
    name: "Landing + CanvaPack",
    icon: Zap,
    price: "1,400€",
    originalPrice: "1,680€",
    description: "La solución creativa",
    features: [
      "Todo lo del CanvaPack Express",
      "Landing page optimizada para vender",
      "Copy persuasivo incluido",
      "Diseño responsive",
      "Optimización para conversión",
      "Integración con herramientas",
      "Soporte técnico"
    ],
    highlighted: true,
    cta: "¡Lo quiero!"
  },
  {
    name: "Motion Ads",
    icon: Crown,
    price: "1,280€",
    originalPrice: "1,540€",
    description: "Perfecto para campañas en Meta y TikTok",
    features: [
      "5 videos tipo spot con IA especial Black Friday",
      "Formato vertical y horizontal",
      "Creatividades optimizadas para conversión",
      "Entrega en 5 días",
      "2 rondas de cambios incluidas",
      "Archivos fuente incluidos"
    ],
    highlighted: false,
    cta: "Reservar plaza"
  }
];

export function PricingSection() {
  return (
    <section className="py-4 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-text-primary mb-6 text-[30px] lg:text-[42px] font-black tracking-light leading-tight lg:leading-[0.9]">
            Elige tu campaña Black Friday
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-accent-cobalt/10 border border-accent-cobalt/20 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-accent-cobalt" />
            <span className="text-accent-cobalt text-small font-semibold">20% OFF hasta el 10 de noviembre</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                className={`relative bg-surface-dark rounded-xl p-8 shadow-immoral ${
                  pkg.highlighted 
                    ? 'border-2 border-accent-cobalt lg:scale-105 lg:-mt-4' 
                    : 'border border-divider'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-cobalt text-white px-4 py-2 rounded-full text-small font-semibold">
                      MÁS POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent-cobalt/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-cobalt" />
                  </div>
                  
                  <h3 className="text-text-primary mb-2">{pkg.name}</h3>
                  <p className="text-text-secondary text-small mb-4">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-cobalt flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-small">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center gap-3 mb-6 pb-6 border-b border-divider">
                  <span className="text-text-primary text-[32px] font-black">{pkg.price}</span>
                  <span className="text-text-secondary text-[20px] line-through">{pkg.originalPrice}</span>
                </div>

                <button 
                  onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                  className={`w-full py-4 rounded-lg font-medium transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-accent-cobalt ${
                  pkg.highlighted
                    ? 'bg-accent-cobalt text-white hover:bg-accent-cobalt/90 active:bg-accent-cobalt/80'
                    : 'bg-graphite text-text-primary hover:bg-graphite/80 border border-divider'
                }`}>
                  {pkg.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          
          
        </motion.div>
      </div>
    </section>
  );
}