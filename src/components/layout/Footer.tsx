import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Роман Авто</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ваш надежный партнер в поиске идеального роскошного автомобиля. Мы предлагаем премиум автомобили с исключительным сервисом и конкурентными ценами.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Новые поступления</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Рекомендуемые автомобили</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Финансирование</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Trade-in</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Сервисный центр</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Наши услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Продажа автомобилей</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Автокредитование</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Страхование</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Гарантия</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Техобслуживание</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Свяжитесь с нами</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">ул. Кабанбай батыра 8, Астана 010000, Казахстан</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+7 (777) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@romanauto.ru</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-400">
                Понедельник - Пятница: 9:00 - 20:00<br />
                Суббота: 9:00 - 18:00<br />
                Воскресенье: 12:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Роман Авто. Все права защищены. | Политика конфиденциальности | Условия обслуживания
          </p>
        </div>
      </div>
    </footer>
  );
};