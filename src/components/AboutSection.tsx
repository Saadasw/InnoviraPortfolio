import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Column - Text Content - Mobile First */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Our Company
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mb-4 sm:mb-6"></div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Innovira Solutions began in 2019 with a simple goal: to create strong technology solutions for visionary businesses. In just five years, we've built a team of highly skilled professionals with industry-leading expertise and experience, successfully completing 100+ projects for 50+ clients.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              With a blend of local and international expertise, each solution we provide is backed by the qualifications and knowledge needed to drive your business forward. We don't just build software—we craft experiences that transform businesses and accelerate growth.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white group shadow-lg hover:shadow-xl transition-all"
            >
              Explore Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>

          {/* Right Column - Stats/Values - Mobile First */}
          <div className="relative order-1 lg:order-2">
            {/* Background Decoration - Smaller on mobile */}
            <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-100 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">100+</div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Projects Completed</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">Successful deliveries across industries</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-1 sm:mb-2">50+</div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Happy Clients</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">Building partnerships worldwide</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">5+</div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Years Experience</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">Track record since 2019</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-1 sm:mb-2">24/7</div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Support Available</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;