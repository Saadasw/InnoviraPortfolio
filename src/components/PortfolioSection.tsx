import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Avenue by Unimart',
      description: 'Complete e-commerce solution with modern design and seamless user experience.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352539607_a300a0c7.webp',
      challenge: 'Client needed a full-featured e-commerce platform with inventory management.',
      solution: 'Built scalable platform with payment integration, admin dashboard, and mobile optimization.',
      result: 'Successful launch with 40% increase in online sales and improved customer satisfaction.',
      liveLink: 'https://avenue.unimart.com',
      status: 'live' as const
    },
    {
      title: 'Rawaa Driving School',
      description: 'Professional business website for driving school with booking functionality.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352542426_5d3718d7.webp',
      challenge: 'Driving school needed modern web presence and online booking system.',
      solution: 'Created responsive website with course booking, instructor profiles, and contact forms.',
      result: 'Enhanced digital presence leading to 60% more online inquiries and bookings.',
      liveLink: 'https://rawaa-driving.com',
      status: 'live' as const
    },
    {
      title: 'Khilgaon Tuition Media',
      description: 'Comprehensive tutor-student platform connecting educators with learners.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352544249_a2168478.webp',
      challenge: 'Need for efficient tutor-student matching and communication platform.',
      solution: 'Developing platform with profile matching, scheduling, and payment integration.',
      result: 'Demo in development with positive feedback from beta users.',
      status: 'development' as const
    },
    {
      title: 'Khilgaon Parcel House',
      description: 'Advanced parcel management solution for logistics operations.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352545980_30aaab88.webp',
      challenge: 'Local parcel service needed digital tracking and management system.',
      solution: 'Building comprehensive logistics platform with real-time tracking and analytics.',
      result: 'System in development with automated tracking and customer notifications.',
      status: 'development' as const
    },
    {
      title: 'Khilgaon Ghorer Dokan',
      description: 'Local online shop platform for community-based e-commerce.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352548863_81bfc07f.webp',
      challenge: 'Local businesses needed affordable online presence and sales platform.',
      solution: 'Creating community-focused e-commerce platform with local delivery options.',
      result: 'Demo platform showing promising results for local business digitization.',
      status: 'development' as const
    },
    {
      title: 'TomarKaj.com',
      description: 'Developer-client collaboration platform streamlining project management.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352551122_c3e163b9.webp',
      challenge: 'Need for better developer-client communication and project tracking.',
      solution: 'Building comprehensive platform with project management, communication, and billing.',
      result: 'Beta version in development with integrated workflow management features.',
      status: 'development' as const
    }
  ];

  return (
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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              challenge={project.challenge}
              solution={project.solution}
              result={project.result}
              liveLink={project.liveLink}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;