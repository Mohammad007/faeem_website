import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in traditional craftsmanship"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Supporting artisans and their communities across India"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Driven by our love for Indian arts and cultural heritage"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-trajan text-4xl text-secondary font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Art Craft Alliance was founded with a vision to preserve and promote India's rich cultural heritage through traditional arts and crafts. We work closely with artisans across the country, providing them with platforms to showcase their work and ensuring their ancient techniques are passed down to future generations.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-16 px-6 rounded-lg mb-16">
          <h2 className="font-trajan text-3xl text-secondary font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary bg-opacity-20 rounded-full flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="font-trajan text-xl font-bold mb-2 text-secondary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="font-trajan text-3xl text-secondary font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To create sustainable opportunities for artisans while preserving India's cultural heritage through documentation, education, and promotion of traditional arts and crafts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;