import React, { useState, useMemo } from 'react';
import { CarFilters } from '../components/catalog/CarFilters';
import { CarGrid } from '../components/catalog/CarGrid';
import { SortControls } from '../components/catalog/SortControls';
import { useApp } from '../context/AppContext';
import type { Car, FilterOptions } from '../types';

interface CatalogPageProps {
  onCarClick: (car: Car) => void;
  initialFilters?: FilterOptions;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onCarClick, initialFilters = {} }) => {
  const { cars } = useApp();
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [sortBy, setSortBy] = useState('featured');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      if (filters.brand && car.brand !== filters.brand) return false;
      if (filters.model && car.model !== filters.model) return false;
      if (filters.minPrice && car.price < filters.minPrice) return false;
      if (filters.maxPrice && car.price > filters.maxPrice) return false;
      if (filters.minYear && car.year < filters.minYear) return false;
      if (filters.maxYear && car.year > filters.maxYear) return false;
      if (filters.bodyType && car.bodyType !== filters.bodyType) return false;
      if (filters.fuelType && car.fuelType !== filters.fuelType) return false;
      if (filters.transmission && car.transmission !== filters.transmission) return false;
      if (filters.color && car.color !== filters.color) return false;
      if (filters.maxMileage && car.mileage > filters.maxMileage) return false;
      return true;
    });

    // Sort the filtered results
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'year-new':
        return filtered.sort((a, b) => b.year - a.year);
      case 'year-old':
        return filtered.sort((a, b) => a.year - b.year);
      case 'mileage-low':
        return filtered.sort((a, b) => a.mileage - b.mileage);
      case 'mileage-high':
        return filtered.sort((a, b) => b.mileage - a.mileage);
      case 'views':
        return filtered.sort((a, b) => b.views - a.views);
      case 'featured':
      default:
        return filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.views - a.views;
        });
    }
  }, [cars, filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог автомобилей</h1>
          <p className="text-gray-600">Откройте для себя идеальный автомобиль из нашей премиум коллекции</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <CarFilters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFiltersOpen}
              onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <SortControls
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filteredAndSortedCars.length}
            />
            
            <div className="mt-6">
              <CarGrid cars={filteredAndSortedCars} onCarClick={onCarClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};