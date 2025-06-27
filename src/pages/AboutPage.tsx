import React from 'react';
import { Award, Users, Shield, Star, CheckCircle, TrendingUp } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Довольных клиентов', value: '10,000+' },
    { icon: Star, label: 'Лет в бизнесе', value: '25+' },
    { icon: Award, label: 'Полученных наград', value: '50+' },
    { icon: CheckCircle, label: 'Продано автомобилей', value: '15,000+' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Доверие и прозрачность',
      description: 'Мы верим в честные сделки и прозрачное ценообразование. Каждый автомобиль поставляется с подробным отчетом об истории и нашей гарантией качества.',
    },
    {
      icon: Award,
      title: 'Превосходство качества',
      description: 'Наш строгий процесс проверки гарантирует, что каждый автомобиль соответствует высочайшим стандартам качества, безопасности и производительности.',
    },
    {
      icon: Users,
      title: 'Клиент превыше всего',
      description: 'Ваше удовлетворение - наш приоритет. Мы обеспечиваем персонализированное обслуживание и постоянную поддержку на протяжении всего владения автомобилем.',
    },
    {
      icon: TrendingUp,
      title: 'Инновации',
      description: 'Мы опережаем автомобильные тренды, предлагая новейшие модели и передовые технологии для улучшения вашего опыта вождения.',
    },
  ];

  const team = [
    {
      name: 'Михаил Романов',
      role: 'Генеральный директор и основатель',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Имея более 30 лет опыта в автомобильной индустрии, Михаил основал Роман Авто с видением революционизировать продажи роскошных автомобилей.',
    },
    {
      name: 'Сара Уильямс',
      role: 'Директор по продажам',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Сара возглавляет нашу команду продаж с экспертизой в роскошных автомобилях и страстью к поиску идеального автомобиля для клиентов.',
    },
    {
      name: 'Дэвид Чен',
      role: 'Менеджер сервиса',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Дэвид гарантирует, что каждый автомобиль соответствует нашим стандартам качества через комплексные проверки и протоколы обслуживания.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Роскошные автомобили"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">О компании Роман Авто</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ваш надежный партнер в превосходстве роскошных автомобилей на протяжении более 25 лет
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Основанная в 1999 году, Роман Авто начинала как небольшой семейный бизнес с простой миссией: 
                  предоставлять исключительные роскошные автомобили с непревзойденным обслуживанием клиентов. То, что начиналось 
                  как один автосалон, выросло в один из самых надежных автомобильных дилерских центров региона.
                </p>
                <p>
                  За годы мы построили долгосрочные отношения с клиентами, которые возвращаются к нам 
                  для удовлетворения своих автомобильных потребностей из поколения в поколение. Наша приверженность качеству, 
                  честности и инновациям принесла нам множество отраслевых наград и, что еще важнее, 
                  доверие тысяч довольных клиентов.
                </p>
                <p>
                  Сегодня Роман Авто продолжает развиваться, принимая новые технологии и расширяя наш 
                  инвентарь, включая новейшие роскошные автомобили, электромобили и гибридные модели. 
                  Наша страсть к автомобильному превосходству движет всем, что мы делаем.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Автосалон Роман Авто"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которые направляют все, что мы делаем в Роман Авто
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Познакомьтесь с нашей командой</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные профессионалы, посвятившие себя служению вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы найти автомобиль своей мечты?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Почувствуйте разницу Роман Авто. Посетите наш автосалон или просмотрите наш онлайн-каталог сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Просмотреть каталог
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
              Записаться на визит
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};