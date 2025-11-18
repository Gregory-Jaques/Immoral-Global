import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UrgencySection } from './components/UrgencySection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ContactForm } from './components/ContactForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';


export default function App() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      
      <main>
        <Hero />
        <ContactForm />
        <UrgencySection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <SocialProofSection />
        <FinalCTA />
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}