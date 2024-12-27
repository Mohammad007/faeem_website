import React from 'react';
import NavLink from './NavLink';
import SubMenu from './SubMenu';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const programsMenu = [
    { label: 'Cultural Festivals', path: '/programs/festivals' },
    { label: 'Artist Support', path: '/programs/artist-support' },
    { label: 'Public Art Installations', path: '/programs/installations' },
    { label: 'Workshops', path: '/programs/workshops' },
  ];

  const supportMenu = [
    { label: 'Donate', path: '/support/donate' },
    { label: 'Volunteer', path: '/support/volunteer' },
    { label: 'Corporate Partnerships', path: '/support/partnerships' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://img1.wsimg.com/isteam/ip/4925aff2-be23-4eab-ba36-cbb673772ab3/Studio-Project%20(1).png/:/rs=w:173,h:76,cg:true,m/cr=w:173,h:76/qt=q:100/ll" 
              alt="Art Craft Alliance Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            
            <SubMenu label="Programs">
              {programsMenu.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </NavLink>
              ))}
            </SubMenu>

            <NavLink to="/documentaries">Documentaries</NavLink>

            <SubMenu label="Support Us">
              {supportMenu.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </NavLink>
              ))}
            </SubMenu>

            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              
              <div className="space-y-2">
                <div className="font-medium">Programs</div>
                {programsMenu.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path}
                    className="block pl-4 py-1"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <NavLink to="/documentaries">Documentaries</NavLink>

              <div className="space-y-2">
                <div className="font-medium">Support Us</div>
                {supportMenu.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path}
                    className="block pl-4 py-1"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;