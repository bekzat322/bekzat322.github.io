import React from 'react';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { Car } from '../../types';

interface FeaturedCarsProps {
  onCarClick: (car: Car) => void;
  onViewAll: () => void;
}

export const FeaturedCars: React.FC<FeaturedCarsProps> = ({ onCarClick, onViewAll }) => {
  const { cars, favorites, addToFavorites, removeFromFavorites } = useApp();
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 3);

  const handleFavoriteClick = (e: React.MouseEvent, carId: string) => {
    e.stopPropagation();
    if (favorites.includes(carId)) {
      removeFromFavorites(carId);
    } else {
      addToFavorites(carId);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium vehicles that represent the best in luxury, performance, and value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
              onClick={() => onCarClick(car)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <button
                  onClick={(e) => handleFavoriteClick(e, car.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                  <Eye className="h-4 w-4" />
                  <span>{car.views}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-2xl font-bold text-blue-700">
                    {formatPrice(car.price)}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span>{car.year}</span>
                  <span className="mx-2">•</span>
                  <span>{car.mileage.toLocaleString()} miles</span>
                  <span className="mx-2">•</span>
                  <span>{car.fuelType}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {car.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{car.features.length - 3} more
                    </span>
                  )}
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200 group">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Vehicles</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};