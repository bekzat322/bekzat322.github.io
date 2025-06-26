import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Phone, MessageCircle, Eye, Calendar, Gauge, Fuel, Settings, Palette, Award } from 'lucide-react';
import type { Car, ContactForm } from '../../types';
import { useApp } from '../../context/AppContext';

interface CarDetailsProps {
  car: Car;
  onBack: () => void;
}

export const CarDetails: React.FC<CarDetailsProps> = ({ car, onBack }) => {
  const { favorites, addToFavorites, removeFromFavorites, submitContactForm, incrementCarViews } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general' as ContactForm['type'],
  });

  useEffect(() => {
    incrementCarViews(car.id);
  }, [car.id, incrementCarViews]);

  const handleFavoriteClick = () => {
    if (favorites.includes(car.id)) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car.id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm({
      ...contactFormData,
      carId: car.id,
    });
    setShowContactForm(false);
    setContactFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: 'general',
    });
    alert('Your message has been sent! We\'ll contact you soon.');
  };

  const specifications = [
    { icon: Calendar, label: 'Year', value: car.year.toString() },
    { icon: Gauge, label: 'Mileage', value: `${car.mileage.toLocaleString()} miles` },
    { icon: Fuel, label: 'Fuel Type', value: car.fuelType },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Palette, label: 'Color', value: car.color },
    { icon: Award, label: 'Body Type', value: car.bodyType },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Catalog</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Eye className="h-4 w-4" />
                <span>{car.views} views</span>
              </div>
              
              <button
                onClick={handleFavoriteClick}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
                <span>{favorites.includes(car.id) ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-96 object-cover"
                />
                
                {car.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {car.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {car.isFeatured && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                  {!car.isAvailable && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sold
                    </span>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              {car.images.length > 1 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2 overflow-x-auto">
                    {car.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${car.brand} ${car.model} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Vehicle Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
              
              {/* Basic Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">{spec.label}</p>
                        <p className="font-semibold text-gray-900">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engine Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Engine</p>
                      <p className="font-semibold">{car.specifications.engine}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Horsepower</p>
                      <p className="font-semibold">{car.specifications.horsepower} HP</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Torque</p>
                      <p className="font-semibold">{car.specifications.torque}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">0-60 mph</p>
                      <p className="font-semibold">{car.specifications.acceleration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Top Speed</p>
                      <p className="font-semibold">{car.specifications.topSpeed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Fuel Economy</p>
                      <p className="font-semibold">{car.specifications.fuelEconomy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-3xl font-bold text-blue-700">{formatPrice(car.price)}</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setContactFormData({ ...contactFormData, type: 'test-drive', message: `I'm interested in scheduling a test drive for the ${car.brand} ${car.model}.` });
                    setShowContactForm(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Schedule Test Drive</span>
                </button>
                
                <button
                  onClick={() => {
                    setContactFormData({ ...contactFormData, type: 'consultation', message: `I'm interested in learning more about the ${car.brand} ${car.model}.` });
                    setShowContactForm(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Request Information</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Have questions? Our experts are here to help you find the perfect vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={contactFormData.phone}
                  onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={contactFormData.message}
                  onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};