import React from 'react';
import { MessageSquare, Phone, Mail, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ContactForm } from '../../types';

export const ContactManagement: React.FC = () => {
  const { contactForms, updateContactFormStatus, cars } = useApp();

  const getCarInfo = (carId?: string) => {
    if (!carId) return null;
    return cars.find(car => car.id === carId);
  };

  const getStatusIcon = (status: ContactForm['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'contacted':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: ContactForm['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'contacted':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: ContactForm['type']) => {
    switch (type) {
      case 'test-drive':
        return <Phone className="h-4 w-4 text-blue-500" />;
      case 'consultation':
        return <MessageSquare className="h-4 w-4 text-green-500" />;
      default:
        return <Mail className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Управление контактами</h2>
        <div className="text-sm text-gray-600">
          {contactForms.filter(form => form.status === 'pending').length} сообщений в ожидании
        </div>
      </div>

      {/* Contact Forms List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="divide-y divide-gray-200">
          {contactForms.length === 0 ? (
            <div className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Пока нет сообщений</h3>
              <p className="text-gray-600">Обращения клиентов будут отображаться здесь.</p>
            </div>
          ) : (
            contactForms.map((form) => {
              const carInfo = getCarInfo(form.carId);
              return (
                <div key={form.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getTypeIcon(form.type)}
                        <h3 className="text-lg font-semibold text-gray-900">{form.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(form.status)}`}>
                          {getStatusIcon(form.status)}
                          <span className="ml-1 capitalize">
                            {form.status === 'pending' ? 'В ожидании' : 
                             form.status === 'contacted' ? 'Связались' : 'Завершено'}
                          </span>
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-4 w-4" />
                          <span>{form.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-4 w-4" />
                          <span>{form.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(form.createdAt).toLocaleDateString('ru-RU')}</span>
                        </div>
                      </div>

                      {carInfo && (
                        <div className="flex items-center space-x-3 mb-3 p-3 bg-blue-50 rounded-lg">
                          <img
                            src={carInfo.images[0]}
                            alt={`${carInfo.brand} ${carInfo.model}`}
                            className="h-12 w-12 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-medium text-gray-900">
                              {carInfo.brand} {carInfo.model}
                            </p>
                            <p className="text-sm text-gray-600">
                              {carInfo.year} • {carInfo.price.toLocaleString('ru-RU')} ₸
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Тип: <span className="capitalize">
                            {form.type === 'test-drive' ? 'Тест-драйв' : 
                             form.type === 'consultation' ? 'Консультация' : 'Общий запрос'}
                          </span>
                        </p>
                        <p className="text-gray-600">{form.message}</p>
                      </div>
                    </div>

                    <div className="ml-6 flex flex-col space-y-2">
                      <select
                        value={form.status}
                        onChange={(e) => updateContactFormStatus(form.id, e.target.value as ContactForm['status'])}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="pending">В ожидании</option>
                        <option value="contacted">Связались</option>
                        <option value="completed">Завершено</option>
                      </select>
                      
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:${form.email}`}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                          title="Отправить email"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a
                          href={`tel:${form.phone}`}
                          className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors duration-200"
                          title="Позвонить"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};