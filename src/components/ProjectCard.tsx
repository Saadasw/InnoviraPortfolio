import React from 'react';
import Button from './Button';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  liveLink?: string;
  status: 'live' | 'development';
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, description, image, challenge, solution, result, liveLink, status, onClick 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
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
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white text-gray-900 hover:bg-gray-100"
            onClick={onClick}
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={onClick}
          >
            <Eye className="mr-2 h-4 w-4" />
            Learn More
          </Button>
          {liveLink && status === 'live' && (
            <Button 
              variant="primary" 
              size="sm" 
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(liveLink, '_blank');
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Site
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;