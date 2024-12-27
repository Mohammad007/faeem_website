import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "ONCE UPON A TIME IN BOMBAY",
    type: "EXHIBITION",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1000",
    description: "Glimpse the city's evolution from seven islands to a thriving urban centre with Once Upon a Time in Bombay, a special showcase for the upcoming edition of Mumbai Gallery Weekend."
  },
  {
    id: 2,
    title: "ARCHIVE CASE FILES",
    type: "EDUCATION PROGRAMME",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    description: "How do image archives influence our understanding of historical events? Drawing from DAG's Archive of postcards, Archive Case Files encourages students to step into the shoes of archivists."
  },
  {
    id: 3,
    title: "INTRODUCING AMEX REWARDXCELERATOR PROGRAM",
    type: "COLLABORATION",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=1000",
    description: "Enjoy 10X Rewards when you buy pre-modern and modern Indian art from DAG using your American Express cards."
  }
];

const EventsAnnouncements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-left text-[#C9AB81]">Events & Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-[#F2F2F2] rounded-lg shadow-md overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[#C9AB81] font-semibold">{event.type}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <button className="mt-4 text-[#C9AB81] font-semibold hover:text-[#C9AB81]">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAnnouncements;