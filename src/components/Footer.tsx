import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Innovira Solutions
            </h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-1 sm:w-4 sm:h-4" />
                <p className="text-xs sm:text-sm leading-relaxed">
                  Your Business Address<br />
                  City, Country
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="mailto:info@innovirasolutions.com" className="text-xs sm:text-sm hover:text-blue-400 transition-colors break-all">
                  info@innovirasolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="tel:+1234567890" className="text-xs sm:text-sm hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Team
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-xs sm:text-sm">Partnership</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-xs sm:text-sm">Career</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Software Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Ecommerce
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Staff Augmentation
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('blog')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Blog
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-xs sm:text-sm">Open Source Projects</a>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Case Studies
                </button>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Follow US</h4>
              <div className="flex space-x-2 sm:space-x-3">
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 transition-all">
                  <span className="text-xs">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 transition-all">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 transition-all">
                  <span className="text-xs">f</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            © 2019 - 2025 | Innovira Solutions Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;