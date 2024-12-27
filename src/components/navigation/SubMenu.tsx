import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SubMenuProps {
  label: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default SubMenu;