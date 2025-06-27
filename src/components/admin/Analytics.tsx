import React from 'react';
import { TrendingUp, Eye, Heart, MessageSquare, Car, Users } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Analytics: React.FC = () => {
  const { cars, contactForms } = useApp();

  // Calculate analytics data
  const totalCars = cars.length;
  const totalViews = cars.reduce((sum, car) => sum + car.views, 0);
  const averageViews = totalCars > 0 ? Math.round(totalViews / totalCars) : 0;
  const featuredCars = cars.filter(car => car.isFeatured).length;
  const availableCars = cars.filter(car => car.isAvailable).length;
  const soldCars = cars.filter(car => !car.isAvailable).length;

  // Contact form analytics
  const totalInquiries = contactForms.length;
  const pendingInquiries = contactForms.filter(form => form.status === 'pending').length;
  const completedInquiries = contactForms.filter(form => form.status === 'completed').length;
  const testDriveRequests = contactForms.filter(form => form.type === 'test-drive').length;

  // Most viewed cars
  const mostViewedCars = [...cars]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  // Brand distribution
  const brandCounts = cars.reduce((acc, car) => {
    acc[car.brand] = (acc[car.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topBrands = Object.entries(brandCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Price range distribution
  const priceRanges = [
    { label: 'До 2 млн ₸', min: 0, max: 2000000 },
    { label: '2-3 млн ₸', min: 2000000, max: 3000000 },
    { label: '3-5 млн ₸', min: 3000000, max: 5000000 },
    { label: 'Свыше 5 млн ₸', min: 5000000, max: Infinity },
  ];

  const priceDistribution = priceRanges.map(range => ({
    ...range,
    count: cars.filter(car => car.price >= range.min && car.price < range.max).length,
  }));

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Обзор аналитики</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Всего автомобилей</p>
                <p className="text-2xl font-bold text-gray-900">{totalCars}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Всего просмотров</p>
                <p className="text-2xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Всего обращений</p>
                <p className="text-2xl font-bold text-gray-900">{totalInquiries}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Средние просмотры/авто</p>
                <p className="text-2xl font-bold text-gray-900">{averageViews}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inventory Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Статус инвентаря</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Доступно автомобилей</span>
              <span className="font-semibold text-green-600">{availableCars}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Проданные автомобили</span>
              <span className="font-semibold text-red-600">{soldCars}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Рекомендуемые автомобили</span>
              <span className="font-semibold text-yellow-600">{featuredCars}</span>
            </div>
          </div>
        </div>

        {/* Inquiry Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Статус обращений</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">В ожидании</span>
              <span className="font-semibold text-yellow-600">{pendingInquiries}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Завершено</span>
              <span className="font-semibold text-green-600">{completedInquiries}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Запросы на тест-драйв</span>
              <span className="font-semibold text-blue-600">{testDriveRequests}</span>
            </div>
          </div>
        </div>

        {/* Most Viewed Cars */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Самые просматриваемые автомобили</h3>
          <div className="space-y-3">
            {mostViewedCars.map((car, index) => (
              <div key={car.id} className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-500 w-4">#{index + 1}</span>
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="h-10 w-10 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {car.brand} {car.model}
                  </p>
                  <p className="text-xs text-gray-500">{car.year}</p>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Eye className="h-4 w-4" />
                  <span>{car.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Brands */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Топ брендов</h3>
          <div className="space-y-3">
            {topBrands.map(([brand, count], index) => (
              <div key={brand} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-4">#{index + 1}</span>
                  <span className="text-sm font-medium text-gray-900">{brand}</span>
                </div>
                <span className="text-sm text-gray-600">{count} автомобилей</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Распределение по цене</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {priceDistribution.map((range) => (
            <div key={range.label} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{range.count}</p>
              <p className="text-sm text-gray-600">{range.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};