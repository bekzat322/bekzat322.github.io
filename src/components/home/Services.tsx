import React from 'react';
import { Car, Shield, CreditCard, Wrench, HeadphonesIcon, Award } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'Premium Vehicle Sales',
      description: 'Carefully curated selection of luxury and premium vehicles from top brands worldwide.',
      color: 'bg-blue-500',
    },
    {
      icon: CreditCard,
      title: 'Flexible Financing',
      description: 'Competitive financing options with flexible terms to fit your budget and lifestyle.',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Extended Warranties',
      description: 'Comprehensive warranty coverage to protect your investment and ensure peace of mind.',
      color: 'bg-purple-500',
    },
    {
      icon: Wrench,
      title: 'Expert Service',
      description: 'Professional maintenance and repair services by certified technicians.',
      color: 'bg-orange-500',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support to assist you with any questions or concerns.',
      color: 'bg-red-500',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Every vehicle undergoes rigorous inspection to ensure the highest quality standards.',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AutoLux?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive automotive solutions with unmatched quality and service excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 hover:bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Dream Car?
          </h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who found their perfect vehicle with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Browse Inventory
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};