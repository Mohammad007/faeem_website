import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "BANGLADESH WAR, 1971",
    artist: "CHITTAPROSAD",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=1000",
    description: "A powerful depiction of the Bangladesh Liberation War through artistic expression"
  },
  {
    id: 2,
    title: "UNTITLED (LANDSCAPE)",
    artist: "RAM KUMAR",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1000",
    description: "Abstract landscape showcasing the artist's unique perspective"
  }
];

const ArtInFocus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const artwork = artworks[currentIndex];

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#C5A572]">Art in Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-4xl font-bold mb-2">{artwork.title}</h3>
            <p className="text-xl mb-6">{artwork.artist}</p>
            <p className="text-gray-300 mb-8">{artwork.description}</p>
            <button className="bg-[#C5A572] text-black px-8 py-3 hover:bg-[#D4B684] transition-colors">
              EXPLORE
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-8 space-x-4">
          <button 
            onClick={prevSlide}
            className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtInFocus;