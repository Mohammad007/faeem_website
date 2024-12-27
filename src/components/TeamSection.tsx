import React from 'react';

const teamMembers = [
  {
    name: 'Dr. FAHIM ANSARI',
    role: 'FOUNDER',
    image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
  },
  {
    name: 'MOHIT SINGH',
    role: 'CO-FOUNDER',
    image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
  },
  {
    name: 'FAEEM AHMAD',
    role: 'SYSTEM ADMINISTRATION',
    image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-indigo-600 font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;