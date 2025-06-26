import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { FilterOptions } from '../../types';

interface QuickSearchProps {
  onSearch: (filters: FilterOptions) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<FilterOptions>({});

  const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Lexus', 'Porsche'];
  const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible'];
  const priceRanges = [
    { label: 'Under $30k', min: 0, max: 30000 },
    { label: '$30k - $50k', min: 30000, max: 50000 },
    { label: '$50k - $75k', min: 50000, max: 75000 },
    { label: 'Over $75k', min: 75000, max: 999999 },
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    setFilters(prev => ({ ...prev, minPrice: range.min, maxPrice: range.max }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Car</h2>
          <p className="text-lg text-gray-600">Use our advanced search to find exactly what you're looking for</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={filters.brand || ''}
                onChange={(e) => handleFilterChange('brand', e.target.value || undefined)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Body Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Body Type</label>
              <select
                value={filters.bodyType || ''}
                onChange={(e) => handleFilterChange('bodyType', e.target.value || undefined)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">All Types</option>
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={filters.minPrice && filters.maxPrice ? `${filters.minPrice}-${filters.maxPrice}` : ''}
                onChange={(e) => {
                  if (e.target.value) {
                    const range = priceRanges.find(r => `${r.min}-${r.max}` === e.target.value);
                    if (range) handlePriceRangeChange(range);
                  } else {
                    handleFilterChange('minPrice', undefined);
                    handleFilterChange('maxPrice', undefined);
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">All Prices</option>
                {priceRanges.map((range) => (
                  <option key={`${range.min}-${range.max}`} value={`${range.min}-${range.max}`}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Year</label>
              <select
                value={filters.minYear || ''}
                onChange={(e) => handleFilterChange('minYear', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Any Year</option>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>{year}+</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={handleSearch}
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Search className="h-6 w-6" />
              <span>Search Vehicles</span>
            </button>
            
            <button
              onClick={() => setFilters({})}
              className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <Filter className="h-5 w-5" />
              <span>Clear Filters</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};