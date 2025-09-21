import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

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

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'avenue-unimart',
      title: 'Avenue by Unimart',
      description: 'Complete e-commerce solution with modern design and seamless user experience.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352539607_a300a0c7.webp',
      challenge: 'Client needed a full-featured e-commerce platform with inventory management, payment processing, and admin dashboard.',
      solution: 'Built scalable platform using Next.js and MongoDB with Stripe payment integration, comprehensive admin panel, and mobile-first design.',
      result: 'Successful launch with 40% increase in online sales, improved customer satisfaction, and reduced cart abandonment by 25%.',
      liveLink: 'https://avenue.unimart.com',
      status: 'live',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Node.js']
    },
    {
      id: 'rawaa-driving',
      title: 'Rawaa Driving School',
      description: 'Professional business website for driving school with booking functionality.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352542426_5d3718d7.webp',
      challenge: 'Driving school needed modern web presence with online booking system, course information, and instructor management.',
      solution: 'Created responsive website with integrated booking system, instructor profiles, course scheduling, and automated email notifications.',
      result: 'Enhanced digital presence leading to 60% more online inquiries, streamlined booking process, and improved customer engagement.',
      liveLink: 'https://rawaa-driving.com',
      status: 'live',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'EmailJS', 'Bootstrap']
    },
    {
      id: 'tuition-media',
      title: 'Khilgaon Tuition Media',
      description: 'Comprehensive tutor-student platform connecting educators with learners.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352544249_a2168478.webp',
      challenge: 'Need for efficient tutor-student matching platform with scheduling, payments, and progress tracking capabilities.',
      solution: 'Developing comprehensive platform with AI-powered matching, integrated video calls, payment processing, and progress analytics.',
      result: 'Demo in development with positive feedback from beta users. Expected to launch Q2 2024 with 100+ registered tutors.',
      status: 'development',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'WebRTC', 'Stripe', 'TensorFlow']
    },
    {
      id: 'parcel-house',
      title: 'Khilgaon Parcel House',
      description: 'Advanced parcel management solution for logistics operations.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352545980_30aaab88.webp',
      challenge: 'Local parcel service needed digital tracking system with real-time updates, route optimization, and customer notifications.',
      solution: 'Building comprehensive logistics platform with GPS tracking, automated SMS notifications, route optimization, and analytics dashboard.',
      result: 'System in development with automated tracking reducing customer inquiries by 70% and improving delivery efficiency.',
      status: 'development',
      technologies: ['React', 'FastAPI', 'MongoDB', 'Google Maps API', 'SMS Gateway', 'Docker']
    },
    {
      id: 'ghorer-dokan',
      title: 'Khilgaon Ghorer Dokan',
      description: 'Local online shop platform for community-based e-commerce.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352548863_81bfc07f.webp',
      challenge: 'Local businesses needed affordable online presence with inventory management, local delivery, and community features.',
      solution: 'Creating community-focused e-commerce platform with local delivery options, vendor management, and social features.',
      result: 'Demo platform showing promising results with 20+ local vendors interested and community engagement features tested.',
      status: 'development',
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'PWA']
    },
    {
      id: 'tomarkaj',
      title: 'TomarKaj.com',
      description: 'Developer-client collaboration platform streamlining project management.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352551122_c3e163b9.webp',
      challenge: 'Need for better developer-client communication with project tracking, milestone management, and integrated billing system.',
      solution: 'Building comprehensive platform with project management, real-time communication, milestone tracking, time logging, and automated billing.',
      result: 'Beta version in development with integrated workflow management, reducing project communication overhead by 50%.',
      status: 'development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'GitHub API']
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our successful projects and see how we've helped businesses 
              transform their digital presence and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                challenge={project.challenge}
                solution={project.solution}
                result={project.result}
                liveLink={project.liveLink}
                status={project.status}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </>
  );
};

export default PortfolioSection;