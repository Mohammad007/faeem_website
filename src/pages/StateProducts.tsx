import React from 'react';
import { useParams } from 'react-router-dom';
import { artisans } from '../data/artisans';
import ArtisanCard from '../components/ArtisanCard';

const StateProducts = () => {
  const { state } = useParams<{ state: string }>();
  const stateArtisans = state ? artisans[state] : [];

  if (!state || !stateArtisans) {
    return (
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">State not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Artisans from {state}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stateArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateProducts;