import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="w-full h-[500px] bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2326157471997!2d77.31080021440619!3d28.58953669258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b52d96e1b%3A0x7c2f53fc23c00094!2sArt%20Craft%20Alliance!5e0!3m2!1sen!2sin!4v1645446225831!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;