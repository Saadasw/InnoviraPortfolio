import React from 'react';
import TeamCard from './TeamCard';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Md Ashab Mohiuddin',
      role: 'Deep Learning Engineer & Full Stack Developer',
      bio: 'Computer Science graduate with expertise in AI/ML, full-stack development, and research projects. Passionate about creating innovative solutions that solve real-world problems.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352533980_b9622584.webp',
      linkedin: 'https://linkedin.com/in/ashab-mohiuddin',
      github: 'https://github.com/ashab-mohiuddin'
    },
    {
      name: 'Ashiqul Islam',
      role: 'Software Developer & Business Solutions Specialist',
      bio: 'Experienced software developer specializing in business applications, system integration, and client relationship management. Focused on delivering practical solutions.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68ce546d443311777539649c_1758352535723_3b469a5c.webp',
      linkedin: 'https://linkedin.com/in/ashiqul-islam',
      github: 'https://github.com/ashiqul-islam'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by two passionate Computer Science graduates, our team combines 
            technical expertise with business acumen to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              linkedin={member.linkedin}
              github={member.github}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Work Directly with Founders?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you choose Innovira Solutions, you get direct access to the founders. 
              This means clearer communication, faster decisions, and personalized attention to your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Direct Communication</h4>
              <p className="text-sm text-gray-600">No middlemen - speak directly with decision makers</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Faster Decisions</h4>
              <p className="text-sm text-gray-600">Quick approvals and rapid project iterations</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="font-bold text-gray-900 mb-2">Personal Investment</h4>
              <p className="text-sm text-gray-600">Founders personally invested in your success</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule a Call with Our Founders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;