import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/53d7eb05-24cc-4e1d-a60a-759fc1c9b936.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1350,m",
    title: "Traditional Arts",
    description: "Discover the beauty of Indian traditional arts"
  },
  {
    image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/dc92b2a2-3fd2-4334-b385-1b280cefb284.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1350,m",
    title: "Handcrafted Excellence",
    description: "Explore unique handcrafted masterpieces"
  },
  {
    image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/1b4b6dc5-9db8-4f00-b3bb-01186b18cc93.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1350,m",
    title: "Cultural Heritage",
    description: "Preserving India's rich cultural heritage"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <a 
                href="/services" 
                className="inline-block bg-[#C9AB81] text-black px-8 py-3 hover:bg-[#C9AB81] transition-colors"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;