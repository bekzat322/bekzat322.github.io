import React, { useState } from 'react';
import { Car, Heart, User, Menu, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const { favorites, isAuthenticated, logout } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'О нас' },
    { id: 'contact', label: 'Контакты' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <Car className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-gray-900">Роман Авто</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('favorites')}
              className="relative p-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleNavClick('admin')}
                  className="p-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
                >
                  <User className="h-6 w-6" />
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200"
              >
                Вход для админа
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-left text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavClick('favorites')}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
                >
                  <Heart className="h-5 w-5" />
                  <span>Избранное ({favorites.length})</span>
                </button>
                
                {isAuthenticated ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleNavClick('admin')}
                      className="px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md"
                    >
                      Админ
                    </button>
                    <button
                      onClick={logout}
                      className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md"
                    >
                      Выйти
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick('login')}
                    className="px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md"
                  >
                    Вход для админа
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};