import React from 'react';
import Button from './Button';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter Website',
      price: '৳15,000 - 30,000',
      description: 'Perfect for small businesses and startups looking to establish online presence.',
      features: [
        'Responsive website design',
        'Up to 5 pages',
        'Contact form integration',
        'SEO optimization',
        'Mobile-friendly design',
        '3 months support'
      ],
      popular: false,
      color: 'border-blue-200 hover:border-blue-400'
    },
    {
      name: 'Business Systems',
      price: '৳50,000 - 1,50,000',
      description: 'Comprehensive solutions for growing businesses with custom requirements.',
      features: [
        'Custom software development',
        'Database integration',
        'Admin dashboard',
        'User management',
        'Payment integration',
        '6 months support',
        'Training included'
      ],
      popular: true,
      color: 'border-green-400 ring-2 ring-green-200'
    },
    {
      name: 'Custom/Research Projects',
      price: 'On Request',
      description: 'Advanced solutions including AI/ML, blockchain, and specialized research projects.',
      features: [
        'AI/ML development',
        'Blockchain solutions',
        'Research projects',
        'Data visualization',
        'Custom integrations',
        '12 months support',
        'Dedicated team'
      ],
      popular: false,
      color: 'border-purple-200 hover:border-purple-400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All packages include 
            consultation, development, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${plan.color} relative`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "primary" : "outline"} 
                size="md" 
                className="w-full"
              >
                Get Exact Quote
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact us for a detailed discussion about your 
            specific requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;