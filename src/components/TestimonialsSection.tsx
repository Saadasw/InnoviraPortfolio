import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Innovira Solutions helped us launch quickly and professionally. Their e-commerce platform transformed our business completely.",
      author: "Avenue by Unimart",
      role: "E-commerce Platform",
      rating: 5,
      image: "🛒"
    },
    {
      quote: "Our driving school now has a modern digital presence thanks to Innovira. The booking system has streamlined our operations significantly.",
      author: "Rawaa Driving School",
      role: "Business Website",
      rating: 5,
      image: "🚗"
    },
    {
      quote: "Working with Innovira's founders directly made all the difference. They understood our vision and delivered beyond expectations.",
      author: "Local Business Owner",
      role: "Custom Software",
      rating: 5,
      image: "💼"
    },
    {
      quote: "The team's expertise in both technology and business understanding is remarkable. They don't just code, they solve problems.",
      author: "Startup Founder",
      role: "MVP Development",
      rating: 5,
      image: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Innovira Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ready to experience the Innovira difference? Let's discuss how we can 
            help transform your business with our proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;