import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '' }) => (
  <Link 
    to={to}
    className={`text-gray-700 hover:text-indigo-600 transition-colors duration-200 ${className}`}
  >
    {children}
  </Link>
);

export default NavLink;