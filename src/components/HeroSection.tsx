import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352530566_0cc5f7ab.webp')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Innovira Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 font-medium">
            Turning Ideas into Impactful Software
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build custom digital solutions for businesses of all sizes – from startups to research projects. 
            Transform your vision into reality with our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="min-w-48">
              View Our Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-blue-600">
              Get a Free Quote
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;