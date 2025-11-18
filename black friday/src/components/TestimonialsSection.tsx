'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, TrendingUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Ruiz",
    company: "",
    role: "CEO",
    result: "+220% tráfico",
    quote: "Los Motion Ads marcaron la diferencia: los videos parecían hechos a medida para vuestra marca. Captaron la atención al instante y logramos un aumento real en conversiones.",
    image: "AR",
    rating: 5,
    revenue: "€9,800"
  },
  {
    name: "Lucía Fernández",
    company: "",
    role: "Head of E-commerce",
    result: "+220% tráfico",
    quote: "Con los Motion Ads evitamos hacer photoshooting y producciones costosas. Los videos se generaron rápido, con calidad profesional, y el resultado fue increíble.",
    image: "AR",
    rating: 5,
    revenue: "€9,800"
  },
  {
    name: "María González",
    company: "",
    role: "Fundadora",
    result: "+340% ventas",
    quote: "El Canva Pack nos ahorró días de trabajo. Todo estaba en tono, listo para publicar, y funcionó muy bien en ads. Nos ayudó a mantener coherencia y destacar en una época saturada.",
    image: "MG",
    rating: 5,
    revenue: "€18,500"
  },
  {
    name: "David Martín",
    company: "",
    role: "Director Marketing",
    result: "+280% ROI",
    quote: "La landing fue clave. El diseño estaba súper optimizado para mobile y el copy tenía foco claro en conversión. Notamos mejora en el tiempo en página y en el ratio de clics a compra.",
    image: "DM",
    rating: 5,
    revenue: "€32,100"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-text-primary mb-6 font-black tracking-light leading-tight lg:leading-[0.9] text-[30px] lg:text-[42px] px-[15px] lg:px-[64px] py-[0px]">
            Marcas reales. Resultados reales.
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Así vivieron su Black Friday con IMMORAL
          </p>
        </motion.div>

        {/* Desktop/Tablet Grid - No cambios */}
        <div className="hidden md:grid lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-surface-dark rounded-xl p-6 lg:p-7 shadow-immoral relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent-cobalt/30 mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-cobalt text-accent-cobalt" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-text-primary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-cobalt/10 rounded-full flex items-center justify-center">
                  <span className="text-accent-cobalt font-semibold">{testimonial.image}</span>
                </div>
                <div>
                  <div className="text-text-primary font-semibold">{testimonial.name}</div>
                  <div className="text-text-secondary text-small">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevSlide}
                className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
              </button>
              
              <span className="text-text-secondary text-sm">
                {currentIndex + 1} de {testimonials.length}
              </span>
              
              <button
                onClick={nextSlide}
                className="p-2 text-text-secondary hover:text-accent-cobalt transition-colors duration-200 focus:outline-none focus:text-accent-cobalt"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Single Testimonial Display */}
            <div className="px-4">
              <motion.div
                key={currentIndex}
                className="bg-surface-dark rounded-xl p-6 shadow-immoral relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent-cobalt/30 mb-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-cobalt text-accent-cobalt" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-text-primary mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-cobalt/10 rounded-full flex items-center justify-center">
                    <span className="text-accent-cobalt font-semibold">{testimonials[currentIndex].image}</span>
                  </div>
                  <div>
                    <div className="text-text-primary font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-text-secondary text-small">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-accent-cobalt' : 'bg-divider'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Signal */}
        <motion.div
          className="text-center mt-16"
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