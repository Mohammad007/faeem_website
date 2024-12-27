import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artisans } from '../data/artisans';
import { ArrowLeft } from 'lucide-react';

const ArtisanDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const artisan = Object.values(artisans)
    .flat()
    .find(a => a.id === id);

  if (!artisan) {
    return (
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Artisan not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-8 hover:text-indigo-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{artisan.name}</h1>
            <p className="text-xl text-indigo-600 font-semibold mb-4">{artisan.craft}</p>
            <p className="text-gray-600 mb-6">{artisan.location}</p>
            <p className="text-gray-800 mb-6">{artisan.description}</p>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <p className="text-gray-800">{artisan.experience}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
              <ul className="list-disc list-inside text-gray-800">
                {artisan.awards.map((award, index) => (
                  <li key={index} className="mb-2">{award}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisan.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-indigo-600">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDetails;