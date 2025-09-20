import React from 'react';
import Button from './Button';

const WhyChooseSection: React.FC = () => {
  const advantages = [
    {
      icon: '💰',
      title: 'Affordable & Flexible Pricing',
      description: 'Competitive rates designed specifically for SMEs with flexible payment options.',
      highlight: 'Starting from ৳15,000'
    },
    {
      icon: '⚡',
      title: 'Fast Prototype Delivery',
      description: 'Quick turnaround on initial prototypes to validate your ideas rapidly.',
      highlight: 'MVP in 1-2 weeks'
    },
    {
      icon: '🤖',
      title: 'Tech-Driven Solutions',
      description: 'Cutting-edge technology including AI, blockchain, and automation.',
      highlight: 'Latest Technology'
    },
    {
      icon: '👥',
      title: 'Direct Founder Access',
      description: 'Work directly with our founders - no middlemen, clear communication.',
      highlight: 'Personal Attention'
    },
    {
      icon: '🇧🇩',
      title: 'Local Business Focus',
      description: 'Deep understanding of Bangladesh market with global quality standards.',
      highlight: 'Local Expertise'
    },
    {
      icon: '🛡️',
      title: 'Trusted Partnership',
      description: 'Long-term support and maintenance to ensure your continued success.',
      highlight: 'Ongoing Support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Innovira Solutions?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just developers - we're your technology partners committed 
            to your business success with personalized solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-3">
                <span className="text-blue-700 font-semibold text-sm">{advantage.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Innovira Solutions 
            for their digital transformation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="secondary" size="lg">
              View Our Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;