import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  liveLink?: string;
  status: 'live' | 'development';
  technologies: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">{project.title}</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600 mb-4">{project.challenge}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Result</h3>
              <p className="text-gray-600 mb-4">{project.result}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.liveLink && (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Button>
              )}
              
              {project.status === 'development' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    🚧 This project is currently in development. Demo will be available soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;