import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Innovira Solutions transformed our business with a custom e-commerce platform. Their team's expertise and dedication exceeded our expectations. The project was delivered on time, and the ongoing support has been exceptional. Highly recommend them for any digital transformation project.",
      author: "Sarah Johnson",
      role: "CEO, RetailPro Inc.",
      rating: 5,
    },
    {
      quote: "Working with Innovira was a game-changer for our startup. They built our MVP from scratch and helped us scale to 10,000+ users in just 6 months. Their technical expertise, combined with their understanding of business needs, made all the difference. Truly a reliable partner!",
      author: "Michael Chen",
      role: "Founder, TechStart",
      rating: 5,
    },
    {
      quote: "The mobile app developed by Innovira Solutions has revolutionized how we connect with our customers. Their innovative approach, attention to detail, and commitment to quality resulted in a product that our users love. We've seen a 40% increase in engagement since launch.",
      author: "Emily Rodriguez",
      role: "Product Manager, HealthWell",
      rating: 5,
    },
    {
      quote: "From concept to deployment, Innovira Solutions demonstrated exceptional professionalism. They took time to understand our unique requirements and delivered a solution that perfectly fits our needs. Their post-launch support and maintenance have been outstanding.",
      author: "David Thompson",
      role: "CTO, FinanceHub",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 leading-tight">
            Success Stories
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"  style={{ gridAutoRows: '1fr' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                {testimonial.quote}
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.author}</h4>
                <p className="text-sm sm:text-base text-blue-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;