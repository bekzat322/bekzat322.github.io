import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AutoLux</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect luxury vehicle. We offer premium cars with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Featured Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Trade-In</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Service Center</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Car Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Car Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Warranty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">123 Luxury Drive, Downtown, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@autolux.com</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-400">
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 AutoLux. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};