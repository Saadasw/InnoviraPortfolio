import React from 'react';
import Button from './Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Innovira Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded by two passionate Computer Science graduates, Innovira Solutions helps businesses grow with smart, 
              affordable, and reliable digital solutions. We combine creativity and technology to make ideas a reality.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To empower businesses with modern software tailored to their needs, making technology accessible 
                and impactful for organizations of all sizes.
              </p>
            </div>

            <Button variant="primary" size="md">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Professionalism</h4>
              <p className="text-sm text-gray-600">Quality delivery with attention to detail</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">Affordability</h4>
              <p className="text-sm text-gray-600">Competitive pricing for all business sizes</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Cutting-edge solutions using latest tech</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Long-term Support</h4>
              <p className="text-sm text-gray-600">Ongoing partnership beyond project delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;