import React from 'react';
import { Car, Shield, CreditCard, Wrench, HeadphonesIcon, Award } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'Продажа премиум автомобилей',
      description: 'Тщательно отобранная коллекция роскошных и премиум автомобилей от ведущих брендов мира.',
      color: 'bg-blue-500',
    },
    {
      icon: CreditCard,
      title: 'Гибкое финансирование',
      description: 'Конкурентные варианты финансирования с гибкими условиями, подходящими вашему бюджету и образу жизни.',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Расширенная гарантия',
      description: 'Комплексное гарантийное покрытие для защиты ваших инвестиций и обеспечения спокойствия.',
      color: 'bg-purple-500',
    },
    {
      icon: Wrench,
      title: 'Экспертное обслуживание',
      description: 'Профессиональное техническое обслуживание и ремонт сертифицированными техниками.',
      color: 'bg-orange-500',
    },
    {
      icon: HeadphonesIcon,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная поддержка для помощи с любыми вопросами или проблемами.',
      color: 'bg-red-500',
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Каждый автомобиль проходит тщательную проверку для обеспечения высочайших стандартов качества.',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают Роман Авто?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем комплексные автомобильные решения с непревзойденным качеством и превосходным сервисом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 hover:bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Готовы найти автомобиль мечты?
          </h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Присоединяйтесь к тысячам довольных клиентов, которые нашли свой идеальный автомобиль с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Просмотреть каталог
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};