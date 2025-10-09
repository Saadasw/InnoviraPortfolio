import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
      date: '18 Apr 2023',
      category: 'Insight',
      title: 'The Ultimate Checklist We Follow for Ensuring Mobile App Security and Data Protection',
      excerpt: 'Mobile applications have become an integral part of our daily lives, and with their increasing popularity, comes the need for robust security measures to protect the sensitive data they handle.',
    },
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
      date: '14 Apr 2023',
      category: 'Insight',
      title: 'Top 5 Backend Frameworks in 2023',
      excerpt: 'A software framework serves as a base for developers to develop applications quickly and effectively. Today, backend frameworks are essential for building robust and scalable applications.',
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
      date: '10 Apr 2023',
      category: 'Insight',
      title: 'Best Practices for Modern Web Development',
      excerpt: 'Discover the latest best practices in web development that can help you build faster, more secure, and user-friendly applications that scale with your business needs.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 leading-tight">
            Latest Insights & Articles
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Stay updated with the latest trends, insights, and best practices in software development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-44 sm:h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <Calendar size={14} className="sm:w-4 sm:h-4" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base">
                  Read More
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 hover:text-white hover:border-transparent transition-all shadow-md"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


