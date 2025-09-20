import React from 'react';

const TechnologySection: React.FC = () => {
  const technologies = [
    { name: 'FastAPI', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'Next.js', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'React', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
    { name: 'Python', category: 'Backend', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'TensorFlow', category: 'AI/ML', color: 'bg-orange-100 text-orange-800' },
    { name: 'PyTorch', category: 'AI/ML', color: 'bg-red-100 text-red-800' },
    { name: 'Blockchain', category: 'Web3', color: 'bg-purple-100 text-purple-800' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-800' },
    { name: 'GitHub', category: 'DevOps', color: 'bg-gray-100 text-gray-800' },
    { name: 'Linux', category: 'Infrastructure', color: 'bg-gray-100 text-gray-800' },
    { name: 'Odoo', category: 'ERP', color: 'bg-purple-100 text-purple-800' },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-100 text-orange-800' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'DevOps', 'Cloud', 'Web3', 'ERP', 'Infrastructure'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technologies We Use
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, 
            scalable, and future-ready solutions for your business.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center group hover:scale-105">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">{tech.name}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Technology Stack Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 text-center hover:from-blue-100 hover:to-green-100 transition-all duration-300 cursor-pointer">
                <div className="text-lg font-semibold text-gray-800">{category}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {technologies.filter(tech => tech.category === category).length} tools
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team continuously updates their skills with the latest technologies 
              to ensure your project uses the most effective and modern solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Discuss Your Tech Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;