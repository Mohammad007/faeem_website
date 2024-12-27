import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Art Craft Alliance is dedicated to preserving and promoting India's rich cultural heritage
            through traditional arts and crafts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <Award className="text-indigo-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to maintaining the highest standards in traditional craftsmanship
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <Users className="text-indigo-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Supporting artisans and their communities across India
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <Heart className="text-indigo-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">
              Driven by our love for Indian arts and cultural heritage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;