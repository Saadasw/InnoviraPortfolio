import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: '💬',
      title: 'Free Consultation',
      description: 'We discuss your project requirements, goals, and timeline to understand your vision.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '🎨',
      title: 'Prototype / MVP Delivery',
      description: 'Quick development of a working prototype to validate concepts and gather early feedback.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: '🔄',
      title: 'Feedback & Revision',
      description: 'Iterative refinement based on your feedback to ensure the solution meets your needs.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '🚀',
      title: 'Launch & Ongoing Support',
      description: 'Final deployment with comprehensive support and maintenance for long-term success.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures successful project delivery 
            from initial consultation to ongoing support.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-200">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-md`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;