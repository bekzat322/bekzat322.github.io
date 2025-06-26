import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '../../types';

interface SortControlsProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  totalResults: number;
}

export const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  onSortChange,
  totalResults,
}) => {
  const sortOptions: SortOption[] = [
    { value: 'featured', label: 'Featured First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'year-new', label: 'Year: Newest First' },
    { value: 'year-old', label: 'Year: Oldest First' },
    { value: 'mileage-low', label: 'Mileage: Low to High' },
    { value: 'mileage-high', label: 'Mileage: High to Low' },
    { value: 'views', label: 'Most Popular' },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 border-b border-gray-200">
      <div className="text-sm text-gray-600">
        <span className="font-medium">{totalResults}</span> vehicles found
      </div>
      
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};