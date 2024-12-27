import React from 'react';

const partners = [
  {
    name: "Ministry of Textiles",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100"
  },
  {
    name: "National Handicrafts Board",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100"
  },
  {
    name: "Craft Council of India",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100"
  },
  {
    name: "State Emporiums",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100"
  }
];

const PartnerSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-20 object-contain mb-4"
              />
              <h3 className="text-center text-gray-800 font-medium">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;