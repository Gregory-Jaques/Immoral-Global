'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle } from 'lucide-react';

const faqs = [
  
  {
    question: "¿Cuánto tiempo tardan en entregar la campaña completa?",
    answer: "CanvaPack Express y Landing Page en 5 días. Para Black Friday garantizamos entrega antes del 25 de noviembre si contratas antes del 20."
  },
  {
    question: "¿Puedo hacer cambios después de la entrega?",
    answer: "Sí, incluimos 2 rondas de cambios menores sin costo adicional. Cambios mayores se cobrán por separado según el alcance."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-0 pb-0 lg:pt-0 lg:pb-0 bg-graphite">
      
    </section>
  );
}