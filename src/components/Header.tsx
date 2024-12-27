import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/Studio-Project%20(1).png/:/rs=w:173,h:76,cg:true,m/cr=w:173,h:76/qt=q:100/ll" 
              alt="Art Craft Alliance Logo"
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`text-gray-600 hover:text-indigo-600 transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-indigo-600' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="block py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;