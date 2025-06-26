import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { QuickSearch } from '../components/home/QuickSearch';
import { Services } from '../components/home/Services';
import type { Car, FilterOptions } from '../types';

interface HomePageProps {
  onNavigate: (page: string, filters?: FilterOptions) => void;
  onCarClick: (car: Car) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onCarClick }) => {
  const handleSearchClick = () => {
    onNavigate('catalog');
  };

  const handleSearch = (filters: FilterOptions) => {
    onNavigate('catalog', filters);
  };

  const handleViewAllCars = () => {
    onNavigate('catalog');
  };

  return (
    <div className="min-h-screen">
      <Hero onSearchClick={handleSearchClick} />
      <QuickSearch onSearch={handleSearch} />
      <FeaturedCars onCarClick={onCarClick} onViewAll={handleViewAllCars} />
      <Services />
    </div>
  );
};