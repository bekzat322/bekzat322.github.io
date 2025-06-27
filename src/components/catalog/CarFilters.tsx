import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '../../types';

interface CarFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const CarFilters: React.FC<CarFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
}) => {
  const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Lexus', 'Porsche'];
  const bodyTypes = ['Седан', 'Внедорожник', 'Хэтчбек', 'Купе', 'Кабриолет'];
  const fuelTypes = ['Бензин', 'Дизель', 'Электричество', 'Гибрид'];
  const transmissions = ['Механическая', 'Автоматическая'];
  const colors = ['Черный', 'Белый', 'Серебристый', 'Синий', 'Красный', 'Серый', 'Коричневый'];

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value || undefined });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '');

  return (
    <div className="bg-white">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden border-b border-gray-200 p-4">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
        >
          <Filter className="h-5 w-5" />
          <span>Фильтры</span>
          {hasActiveFilters && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Активные
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} border-r border-gray-200 bg-gray-50 lg:bg-white`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Фильтры</h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  Очистить все
                </button>
              )}
              <button
                onClick={onToggle}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Марка</label>
              <select
                value={filters.brand || ''}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Все марки</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Ценовой диапазон</label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Мин. цена"
                  value={filters.minPrice || ''}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Макс. цена"
                  value={filters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Year Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Год выпуска</label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Мин. год"
                  value={filters.minYear || ''}
                  onChange={(e) => handleFilterChange('minYear', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Макс. год"
                  value={filters.maxYear || ''}
                  onChange={(e) => handleFilterChange('maxYear', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Body Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Тип кузова</label>
              <select
                value={filters.bodyType || ''}
                onChange={(e) => handleFilterChange('bodyType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Все типы</option>
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Fuel Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Тип топлива</label>
              <select
                value={filters.fuelType || ''}
                onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Все типы топлива</option>
                {fuelTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Коробка передач</label>
              <select
                value={filters.transmission || ''}
                onChange={(e) => handleFilterChange('transmission', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Все типы</option>
                {transmissions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Цвет</label>
              <select
                value={filters.color || ''}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Все цвета</option>
                {colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            {/* Max Mileage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Максимальный пробег</label>
              <input
                type="number"
                placeholder="Максимальный пробег"
                value={filters.maxMileage || ''}
                onChange={(e) => handleFilterChange('maxMileage', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};