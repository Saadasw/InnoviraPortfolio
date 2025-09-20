import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ProcessSection from './ProcessSection';
import WhyChooseSection from './WhyChooseSection';
import PricingSection from './PricingSection';
import TechnologySection from './TechnologySection';
import TestimonialsSection from './TestimonialsSection';
import TeamSection from './TeamSection';
import VisionSection from './VisionSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
      <PricingSection />
      <TechnologySection />
      <TestimonialsSection />
      <TeamSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AppLayout;