import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-[9px] bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default NewsletterForm;