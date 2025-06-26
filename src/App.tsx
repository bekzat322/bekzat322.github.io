import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { CarDetails } from './components/car/CarDetails';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import type { Car, FilterOptions } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [catalogFilters, setCatalogFilters] = useState<FilterOptions>({});

  const handlePageChange = (page: string, filters?: FilterOptions) => {
    setCurrentPage(page);
    setSelectedCar(null);
    if (filters) {
      setCatalogFilters(filters);
    }
  };

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentPage('car-details');
  };

  const handleBackToCatalog = () => {
    setSelectedCar(null);
    setCurrentPage('catalog');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('admin');
  };

  const renderPage = () => {
    if (selectedCar) {
      return <CarDetails car={selectedCar} onBack={handleBackToCatalog} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} onCarClick={handleCarClick} />;
      case 'catalog':
        return <CatalogPage onCarClick={handleCarClick} initialFilters={catalogFilters} />;
      case 'favorites':
        return <FavoritesPage onCarClick={handleCarClick} />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      case 'login':
        return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage onNavigate={handlePageChange} onCarClick={handleCarClick} />;
    }
  };

  const showHeaderFooter = currentPage !== 'login' && !selectedCar;

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        {showHeaderFooter && (
          <Header currentPage={currentPage} onPageChange={handlePageChange} />
        )}
        
        <main className={showHeaderFooter ? '' : 'min-h-screen'}>
          {renderPage()}
        </main>
        
        {showHeaderFooter && <Footer />}
      </div>
    </AppProvider>
  );
}

export default App;