import React from 'react';
import { Play } from 'lucide-react';

const Documentaries = () => {
  const documentaries = [
    {
      id: 1,
      title: "The Art of Traditional Weaving",
      thumbnail: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=1000",
      duration: "24:15",
      description: "Exploring the intricate art of traditional Indian weaving techniques passed down through generations."
    },
    {
      id: 2,
      title: "Masters of Metal: The Legacy of Indian Metallurgy",
      thumbnail: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=1000",
      duration: "32:45",
      description: "A deep dive into the ancient craft of metalworking and its modern practitioners."
    },
    {
      id: 3,
      title: "Colors of Heritage",
      thumbnail: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1000",
      duration: "28:30",
      description: "Discovering the natural dyes and traditional techniques used in textile art across India."
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-trajan text-4xl text-secondary font-bold mb-4">Our Documentaries</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing the rich cultural heritage of India through compelling visual storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentaries.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img 
                  src={doc.thumbnail} 
                  alt={doc.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-white p-4 rounded-full">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">
                  {doc.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-trajan text-xl font-bold mb-2 text-secondary">{doc.title}</h3>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentaries;