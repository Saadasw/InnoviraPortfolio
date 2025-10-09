import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'Do you offer development services for both mobile and web platforms?',
      answer: 'Yes, we offer development services for both mobile and web platforms, delivering custom solutions tailored to your business requirements. Our team ensures seamless functionality, performance, and user experience across all devices.',
    },
    {
      question: 'What is your strategy for developing mobile apps and software solutions?',
      answer: 'As a bespoke software development company, our strategy for developing mobile apps and software solutions is client-centric and thorough. We start with analysis, then design, develop, test, deploy, and maintain to ensure performance, security, and seamless integration with your vision.',
    },
    {
      question: 'What sets your company apart as a top software and mobile app development provider?',
      answer: 'Our unique blend of creativity, technical expertise, and a deep understanding of client needs enables us to craft exceptional digital experiences. We go beyond just development, transforming ideas into scalable, high-impact solutions that drive measurable results for your business.',
    },
    {
      question: 'How do you manage and oversee software development projects to ensure success?',
      answer: 'We manage software development projects by maintaining clear communication, setting realistic timelines, and continuously monitoring progress through agile methodologies. Our team collaborates closely with clients at every stage to ensure the project aligns with their goals, meets deadlines, and delivers quality results.',
    },
    {
      question: 'How do you ensure software quality and performance?',
      answer: 'We ensure software quality and performance through rigorous testing at every stage of development, including unit, integration, and performance testing. Our team also conducts code reviews, optimizes performance, and prioritizes security to deliver reliable, high-performing software that meets industry standards.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Column - Heading & Image */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Have Questions?
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
              As a trusted custom software development company, we're here to provide the answers you need. Reach out, and let's discuss how we can help your business grow.
            </p>
            
            {/* Decorative Image - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
                  alt="FAQ"
                  className="relative rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg px-4 sm:px-6 border-0 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                    <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-snug">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-700 pb-4 sm:pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


