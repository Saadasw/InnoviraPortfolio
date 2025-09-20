import React from 'react';
import Button from './Button';

const VisionSection: React.FC = () => {
  const roadmapItems = [
    {
      icon: '🤖',
      title: 'AI Agents',
      description: 'Intelligent automation solutions for business processes',
      timeline: '2024 Q2'
    },
    {
      icon: '🌐',
      title: 'IoT Solutions',
      description: 'Connected device integration and smart system development',
      timeline: '2024 Q3'
    },
    {
      icon: '⚙️',
      title: 'Digital Automation',
      description: 'End-to-end business process automation platforms',
      timeline: '2024 Q4'
    },
    {
      icon: '🌍',
      title: 'Global Outreach',
      description: 'Expanding services to international markets',
      timeline: '2025'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vision & Future
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our goal is to become the go-to digital partner for SMEs in Bangladesh and globally, 
            pioneering innovative solutions that shape the future of business technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              We envision a future where every business, regardless of size, has access to cutting-edge 
              technology solutions that drive growth, efficiency, and innovation. Our mission extends 
              beyond just software development - we're building the digital infrastructure for tomorrow's economy.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                <span className="text-blue-100">Democratizing access to advanced technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                <span className="text-blue-100">Fostering innovation in emerging markets</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-blue-100">Building sustainable digital ecosystems</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-xl font-bold mb-6 text-center">2024-2025 Roadmap</h4>
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold">{item.title}</h5>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{item.timeline}</span>
                    </div>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Join Us on This Journey
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the digital transformation revolution. Whether you're a startup with a big idea 
            or an established business looking to innovate, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;