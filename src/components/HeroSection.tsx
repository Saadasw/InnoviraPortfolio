import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements - optimized for mobile */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="text-center animate-fade-in-up">
          {/* Full Width Animated Logo Background */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
            <img 
              src="/innoviraMP4 (online-video-cutter.com).gif" 
              alt="Innovira Solutions" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span>Transforming Ideas into Reality</span>
          </div>

          {/* Main Headline - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            We specialize in crafting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              intelligent solutions
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Blending AI-powered SaaS, elegant UI/UX design, and lean MVP development to accelerate innovation and impact for businesses of all sizes.
          </p>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group shadow-lg hover:shadow-xl transition-all"
            >
              Get A Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('work')}
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators - Mobile Optimized */}
          <div className="mt-8 sm:mt-16">
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 uppercase tracking-wider font-semibold">
              Trusted by Growing Businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-60">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">50+ Clients</div>
              <div className="w-px h-6 sm:h-8 bg-gray-300 hidden sm:block"></div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">100+ Projects</div>
              <div className="w-px h-6 sm:h-8 bg-gray-300 hidden sm:block"></div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">5+ Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div 
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('services')}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;