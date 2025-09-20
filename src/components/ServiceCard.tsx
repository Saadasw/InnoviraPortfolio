import React from 'react';
import Button from './Button';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline" size="sm" className="w-full">
        Get Started
      </Button>
    </div>
  );
};

export default ServiceCard;