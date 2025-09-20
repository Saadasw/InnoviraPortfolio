import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites that drive business growth and engage your audience.',
      features: ['Business websites', 'E-commerce platforms', 'Booking systems', 'Portfolio sites']
    },
    {
      icon: '⚙️',
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Hospital management', 'School systems', 'Pharmacy solutions', 'Logistics platforms']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Business apps', 'Delivery platforms', 'Customer portals', 'Coming soon!']
    },
    {
      icon: '🔬',
      title: 'Research & Data Solutions',
      description: 'Advanced AI/ML projects and data visualization for research and analytics.',
      features: ['AI/ML development', 'Blockchain solutions', 'Data visualization', 'Research tools']
    },
    {
      icon: '📈',
      title: 'Digital Presence',
      description: 'Complete digital transformation to establish your online presence.',
      features: ['SEO optimization', 'Google Maps integration', 'WhatsApp ordering', 'Social media setup']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive digital solutions 
            that transform your business and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;