import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CarGrid } from '../components/catalog/CarGrid';
import type { Car } from '../types';

interface FavoritesPageProps {
  onCarClick: (car: Car) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ onCarClick }) => {
  const { cars, favorites } = useApp();
  
  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  if (favoriteCars.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mb-8">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Favorites</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              You haven't saved any cars yet. Browse our catalog and click the heart icon to save your favorite vehicles.
            </p>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Browse Catalog</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
          </div>
          <p className="text-gray-600">
            {favoriteCars.length} {favoriteCars.length === 1 ? 'car' : 'cars'} saved for later
          </p>
        </div>

        <CarGrid cars={favoriteCars} onCarClick={onCarClick} />
      </div>
    </div>
  );
};