import React, { useState } from 'react';
import Button from './Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Build Your Project Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative digital solutions? 
            Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Business Type</option>
                    <option value="startup">Startup</option>
                    <option value="small-business">Small Business</option>
                    <option value="medium-business">Medium Business</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="individual">Individual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="research-data">Research & Data</option>
                    <option value="digital-presence">Digital Presence</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@innovirasolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+880 XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <Button variant="outline" size="sm" className="mt-2 border-white text-white hover:bg-white hover:text-blue-600">
                      Chat with Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                  <span className="text-xl">💻</span>
                </a>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h4>
              <p className="text-gray-700 mb-4">
                We respond to all inquiries within 24 hours. For urgent projects, 
                contact us via WhatsApp for immediate assistance.
              </p>
              <div className="flex items-center text-green-600">
                <span className="text-lg mr-2">✓</span>
                <span className="font-semibold">24-hour response time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;