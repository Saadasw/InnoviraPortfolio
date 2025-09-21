import React, { useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ProcessSection from './ProcessSection';
import PricingSection from './PricingSection';
import TechnologySection from './TechnologySection';
import TestimonialsSection from './TestimonialsSection';
import TeamSection from './TeamSection';
import VisionSection from './VisionSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Listen for navigation events
  React.useEffect(() => {
    const handleNavigateToContact = () => setActiveTab('contact');
    window.addEventListener('navigate-to-contact', handleNavigateToContact);
    return () => window.removeEventListener('navigate-to-contact', handleNavigateToContact);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'process':
        return <ProcessSection />;
      case 'pricing':
        return <PricingSection />;
      case 'technologies':
        return <TechnologySection />;
      case 'testimonials':
        return <TestimonialsSection />;
      case 'team':
        return <TeamSection />;
      case 'vision':
        return <VisionSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="min-h-screen">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;