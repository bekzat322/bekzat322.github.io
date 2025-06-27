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
    { value: 'featured', label: 'Сначала рекомендуемые' },
    { value: 'price-low', label: 'Цена: от низкой к высокой' },
    { value: 'price-high', label: 'Цена: от высокой к низкой' },
    { value: 'year-new', label: 'Год: сначала новые' },
    { value: 'year-old', label: 'Год: сначала старые' },
    { value: 'mileage-low', label: 'Пробег: от малого к большому' },
    { value: 'mileage-high', label: 'Пробег: от большого к малому' },
    { value: 'views', label: 'Самые популярные' },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 border-b border-gray-200">
      <div className="text-sm text-gray-600">
        <span className="font-medium">{totalResults}</span> автомобилей найдено
      </div>
      
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">Сортировать по:</span>
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