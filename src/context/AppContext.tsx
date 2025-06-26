import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Car, ContactForm, Admin } from '../types';
import { mockCars, mockContactForms } from '../data/mockData';

interface AppContextType {
  cars: Car[];
  contactForms: ContactForm[];
  favorites: string[];
  currentUser: Admin | null;
  isAuthenticated: boolean;
  addCar: (car: Omit<Car, 'id' | 'createdAt' | 'views'>) => void;
  updateCar: (id: string, car: Partial<Car>) => void;
  deleteCar: (id: string) => void;
  addToFavorites: (carId: string) => void;
  removeFromFavorites: (carId: string) => void;
  submitContactForm: (form: Omit<ContactForm, 'id' | 'createdAt' | 'status'>) => void;
  updateContactFormStatus: (id: string, status: ContactForm['status']) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  incrementCarViews: (carId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>(mockCars);
  const [contactForms, setContactForms] = useState<ContactForm[]>(mockContactForms);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<Admin | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('carFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setCurrentUser(authData);
      setIsAuthenticated(true);
    }
  }, []);

  const addCar = (carData: Omit<Car, 'id' | 'createdAt' | 'views'>) => {
    const newCar: Car = {
      ...carData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      views: 0,
    };
    setCars(prev => [newCar, ...prev]);
  };

  const updateCar = (id: string, updates: Partial<Car>) => {
    setCars(prev => prev.map(car => car.id === id ? { ...car, ...updates } : car));
  };

  const deleteCar = (id: string) => {
    setCars(prev => prev.filter(car => car.id !== id));
  };

  const addToFavorites = (carId: string) => {
    const newFavorites = [...favorites, carId];
    setFavorites(newFavorites);
    localStorage.setItem('carFavorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (carId: string) => {
    const newFavorites = favorites.filter(id => id !== carId);
    setFavorites(newFavorites);
    localStorage.setItem('carFavorites', JSON.stringify(newFavorites));
  };

  const submitContactForm = (formData: Omit<ContactForm, 'id' | 'createdAt' | 'status'>) => {
    const newForm: ContactForm = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    setContactForms(prev => [newForm, ...prev]);
  };

  const updateContactFormStatus = (id: string, status: ContactForm['status']) => {
    setContactForms(prev => prev.map(form => form.id === id ? { ...form, status } : form));
  };

  const login = (username: string, password: string) => {
    // Mock authentication - in real app, this would be API call
    if (username === 'admin' && password === 'admin123') {
      const adminUser: Admin = {
        id: '1',
        username: 'admin',
        email: 'admin@cardealership.com',
        role: 'admin',
      };
      setCurrentUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  const incrementCarViews = (carId: string) => {
    setCars(prev => prev.map(car => 
      car.id === carId ? { ...car, views: car.views + 1 } : car
    ));
  };

  return (
    <AppContext.Provider value={{
      cars,
      contactForms,
      favorites,
      currentUser,
      isAuthenticated,
      addCar,
      updateCar,
      deleteCar,
      addToFavorites,
      removeFromFavorites,
      submitContactForm,
      updateContactFormStatus,
      login,
      logout,
      incrementCarViews,
    }}>
      {children}
    </AppContext.Provider>
  );
};