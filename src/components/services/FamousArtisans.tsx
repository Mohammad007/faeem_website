import React, { useState } from 'react';
import { Search } from 'lucide-react';

const famousArtisans = [
  {
    id: 1,
    name: "Padma Shri Abdul Gafur Khatri",
    craft: "Rogan Art",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    description: "Master of traditional Rogan art from Gujarat"
  },
  {
    id: 2,
    name: "Padma Shri Krishna Basu",
    craft: "Kantha Embroidery",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    description: "Renowned Kantha embroidery artist from West Bengal"
  }
  // Add more famous artisans
];

const FamousArtisans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArtisans = famousArtisans.filter(artisan =>
    artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.craft.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Famous Indian Artisans</h2>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search artisans by name or craft..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArtisans.map(artisan => (
          <div key={artisan.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-40 h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{artisan.name}</h3>
              <p className="text-indigo-600 font-semibold mb-2">{artisan.craft}</p>
              <p className="text-gray-600">{artisan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamousArtisans;