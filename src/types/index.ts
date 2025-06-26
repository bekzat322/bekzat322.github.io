export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Convertible' | 'Wagon';
  color: string;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  images: string[];
  description: string;
  features: string[];
  specifications: {
    engine: string;
    horsepower: number;
    torque: string;
    acceleration: string;
    topSpeed: string;
    fuelEconomy: string;
  };
  isFeatured: boolean;
  isAvailable: boolean;
  createdAt: string;
  views: number;
}

export interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  carId?: string;
  type: 'general' | 'test-drive' | 'consultation';
  status: 'pending' | 'contacted' | 'completed';
  createdAt: string;
}

export interface Admin {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager';
}

export interface FilterOptions {
  brand?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  bodyType?: string;
  fuelType?: string;
  transmission?: string;
  color?: string;
  maxMileage?: number;
}

export interface SortOption {
  value: string;
  label: string;
}