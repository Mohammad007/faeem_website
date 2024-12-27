import React from 'react';

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/53d7eb05-24cc-4e1d-a60a-759fc1c9b936.jpg",
      alt: "Traditional Arts"
    },
    {
      id: 2, 
      image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/dc92b2a2-3fd2-4334-b385-1b280cefb284.jpg",
      alt: "Handcrafted Excellence"
    },
    {
      id: 3,
      image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/1b4b6dc5-9db8-4f00-b3bb-01186b18cc93.jpg",
      alt: "Cultural Heritage"
    },
    {
      id: 4,
      image: "https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/1b4b6dc5-9db8-4f00-b3bb-01186b18cc93.jpg",
      alt: "Art Focus"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#C9AB81]">Instagram</h2>
        <p className="text-xl mb-8">@DAG.WORLD</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {posts.map(post => (
            <div key={post.id} className="relative overflow-hidden group">
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;