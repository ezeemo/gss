import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import gssLogo from '../assets/gss.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const menuItems = [
    {
      name: 'Products',
      path: '/products',
      submenu: [
        {
          name: 'Agricultural Commodities',
          path: '/products/agricultural',
          items: [
            { name: 'Wheat Grain', path: '/products/agricultural#wheat' },
            { name: 'Maize Grain', path: '/products/agricultural#maize' },
            { name: 'Soybean Meal', path: '/products/agricultural#soybean' },
          ],
        },
        {
          name: 'Petroleum Products',
          path: '/products/petroleum',
          items: [
            { name: 'Gasoline / PMS', path: '/products/petroleum#pms' },
            { name: 'Gasoline / AGO', path: '/products/petroleum#ago' },
            { name: 'HFO (Heavy Fuel)', path: '/products/petroleum#hfo' },
          ],
        },
        {
          name: 'Meat Products',
          path: '/products/meat',
          items: [
            { name: 'Lamb', path: '/products/meat#lamb' },
            { name: 'Beef', path: '/products/meat#beef' },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          {/* Logo */}
          <div className="flex items-center w-64">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
              <img 
        src={gssLogo} 
        alt="Global Source Solution Logo" 
        style={{ height: '55px' }} // Adjust size
      />
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
              
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className={`px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center ${
                      activeDropdown === item.name ? 'text-blue-600' : ''
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <div key={subitem.name} className="relative group">
                            <Link
                              to={subitem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                              onClick={(e) => {
                                if (activeSubmenu === subitem.name) {
                                  e.preventDefault();
                                  toggleSubmenu(subitem.name);
                                }
                              }}
                            >
                              {subitem.name}
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                            <div className={`absolute z-20 left-full top-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                              activeSubmenu === subitem.name ? 'block' : 'hidden group-hover:block'
                            }`}>
                              <div className="py-1">
                                {subitem.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubmenu(null);
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact Us</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                    activeDropdown === item.name ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.name}>
                        <button
                          onClick={() => toggleSubmenu(subitem.name)}
                          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                            activeSubmenu === subitem.name ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {subitem.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${
                            activeSubmenu === subitem.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeSubmenu === subitem.name && (
                          <div className="pl-4">
                            {subitem.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                  setActiveSubmenu(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;