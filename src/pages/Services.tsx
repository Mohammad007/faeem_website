import React from 'react';
import { Search } from 'lucide-react';
import FamousArtisans from '../components/services/FamousArtisans';
import ServicesList from '../components/services/ServicesList';

const Services = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <ServicesList />
        <FamousArtisans />
      </div>
    </div>
  );
};

export default Services;