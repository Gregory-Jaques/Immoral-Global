'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function ContactForm() {
  useEffect(() => {
    // Load Calendly script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    // Load ActiveCampaign form script
    const acScript = document.createElement('script');
    acScript.src = 'https://team14962.activehosted.com/f/embed.php?id=14';
    acScript.charset = 'utf-8';
    acScript.async = true;
    document.body.appendChild(acScript);

    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
      if (document.body.contains(acScript)) {
        document.body.removeChild(acScript);
      }
    };
  }, []);

  return (
    <section id="contact-form" className="py-24 lg:py-32 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Calendly Widget */}
            <div className="w-full lg:w-1/2">
              <div className="text-center mb-8">
                <h3 className="text-text-primary mb-4">
                  Agenda tu reunión ahora
                </h3>
                <p className="text-text-secondary">
                  Elige día y horario y empecemos tu campaña sin demoras
                </p>
              </div>
              <div 
                className="calendly-inline-widget rounded-xl overflow-hidden shadow-immoral border border-divider bg-surface-dark bg-[#171b21]"
                data-url="https://calendly.com/d/cwx6-qf7-hx9/yure-y-coloma?hide_event_type_details=1&hide_gdpr_banner=1&background_color=171b21&text_color=fafafa&primary_color=1e63ff"
                style={{ minWidth: '320px', height: '602px' }}
              ></div>
            </div>

            {/* Separator Line */}
            <div className="hidden lg:block w-px bg-divider self-stretch"></div>

            {/* Custom Form */}
            <div className="w-full lg:w-1/2">
              <div className="text-center mb-8">
                <h3 className="text-text-primary mb-4">
                  Tu oportunidad Black Friday empieza aquí
                </h3>
                <p className="text-text-secondary">
                  Cuéntanos sobre tu negocio y descubre cómo podemos ayudarte
                </p>
              </div>

              {/* ActiveCampaign Form */}
              <div className="_form_14"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}