import React from 'react';
import { Heart, Eye, Calendar, Gauge, Fuel, Settings, Car } from 'lucide-react';
import type { Car as CarType } from '../../types';
import { useApp } from '../../context/AppContext';

interface CarGridProps {
  cars: CarType[];
  onCarClick: (car: CarType) => void;
}

export const CarGrid: React.FC<CarGridProps> = ({ cars, onCarClick }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useApp();

  const handleFavoriteClick = (e: React.MouseEvent, carId: string) => {
    e.stopPropagation();
    if (favorites.includes(carId)) {
      removeFromFavorites(carId);
    } else {
      addToFavorites(carId);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (cars.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          <Car className="h-16 w-16 mx-auto mb-4" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Автомобили не найдены</h3>
        <p className="text-gray-600">Попробуйте изменить фильтры для поиска большего количества результатов.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group overflow-hidden"
          onClick={() => onCarClick(car)}
        >
          <div className="relative overflow-hidden">
            <img
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
              {car.isFeatured && (
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                  Рекомендуемый
                </span>
              )}
              {!car.isAvailable && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Продано
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => handleFavoriteClick(e, car.id)}
              className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200"
            >
              <Heart
                className={`h-4 w-4 ${
                  favorites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
            </button>

            {/* Views */}
            <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              <Eye className="h-3 w-3" />
              <span>{car.views}</span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                  {car.brand} {car.model}
                </h3>
                <p className="text-sm text-gray-600">{car.year}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-700">{formatPrice(car.price)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Gauge className="h-3 w-3" />
                <span>{car.mileage.toLocaleString()} км</span>
              </div>
              <div className="flex items-center space-x-1">
                <Fuel className="h-3 w-3" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Settings className="h-3 w-3" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{car.bodyType}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{car.description}</p>

            <div className="flex flex-wrap gap-1 mb-3">
              {car.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
              {car.features.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{car.features.length - 2}
                </span>
              )}
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-200">
              Посмотреть детали
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};