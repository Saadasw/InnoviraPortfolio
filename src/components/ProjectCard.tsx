import React from 'react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  liveLink?: string;
  status: 'live' | 'development';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, description, image, challenge, solution, result, liveLink, status 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {status === 'live' ? 'Live' : 'In Development'}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div>
            <span className="font-semibold text-blue-600">Challenge:</span>
            <p className="text-sm text-gray-700 mt-1">{challenge}</p>
          </div>
          <div>
            <span className="font-semibold text-green-600">Solution:</span>
            <p className="text-sm text-gray-700 mt-1">{solution}</p>
          </div>
          <div>
            <span className="font-semibold text-purple-600">Result:</span>
            <p className="text-sm text-gray-700 mt-1">{result}</p>
          </div>
        </div>

        {liveLink && status === 'live' && (
          <Button variant="primary" size="sm" className="w-full">
            View Live Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;