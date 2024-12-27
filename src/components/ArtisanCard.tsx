import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Artisan } from '../types/artisan';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={() => navigate(`/artisan/${artisan.id}`)}
    >
      <img 
        src={artisan.image} 
        alt={artisan.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{artisan.name}</h3>
        <p className="text-indigo-600 font-semibold mb-2">{artisan.craft}</p>
        <p className="text-gray-600 mb-4">{artisan.location}</p>
        <p className="text-sm text-gray-500">Experience: {artisan.experience}</p>
      </div>
    </div>
  );
};

export default ArtisanCard;