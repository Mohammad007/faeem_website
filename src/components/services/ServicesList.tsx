import React from 'react';
import { Palette, ShoppingBag, Award, Users, Globe, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Art Preservation',
    description: 'Preserving traditional Indian art forms and techniques for future generations'
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Artisan Marketplace',
    description: 'Direct platform for artisans to showcase and sell their authentic crafts'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Skill Development',
    description: 'Training programs to enhance artisan skills and techniques'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Support',
    description: 'Building and supporting artisan communities across India'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Exposure',
    description: 'Connecting Indian artisans with international markets'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Cultural Education',
    description: 'Workshops and programs to promote Indian art and culture'
  }
];

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-indigo-600 mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;