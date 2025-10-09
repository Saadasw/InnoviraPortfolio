import React from 'react';
import { Users, Code, Smartphone, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: 'With our staff augmentation, you gain a fully managed, high-performing team to accelerate your projects without the hassle of hiring or payroll complexities.',
      features: ['Flexible teams', 'Streamlined processes', 'Cost-effective results']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'We carefully handle your software\'s full life cycle: installation, configuration, monitoring, updates, security, and troubleshooting so that you can focus on your core operations.',
      features: ['Optimal performance', 'Robust security', 'Seamless functionality']
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications designed to deliver exceptional user experiences on iOS and Android platforms.',
      features: ['Native development', 'Cross-platform apps', 'User-centric design']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions from design to deployment, helping you sell online with confidence and scale your business.',
      features: ['Custom storefronts', 'Payment integration', 'Inventory management']
    }
  ];

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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 leading-tight">
            Choose the Right Fit for Your Development Needs
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button - Mobile Optimized */}
        <div className="text-center px-4">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get A Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;