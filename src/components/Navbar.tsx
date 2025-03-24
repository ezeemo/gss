import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import gssLogo from '../assets/gss.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubmenu(null);
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
          icon: '🌾',
          items: [
            { name: 'Wheat Grain', path: '/products/agricultural#wheat' },
            { name: 'Maize Grain', path: '/products/agricultural#maize' },
            { name: 'Soybean Meal', path: '/products/agricultural#soybean' },
          ],
        },
        {
          name: 'Petroleum Products',
          path: '/products/petroleum',
          icon: '⛽',
          items: [
            { name: 'Premium Motor Spirit', path: '/products/petroleum#pms' },
            { name: 'Automotive Gas Oil', path: '/products/petroleum#ago' },
            { name: 'Heavy Fuel Oil', path: '/products/petroleum#hfo' },
          ],
        },
        {
          name: 'Meat Products',
          path: '/products/meat',
          icon: '🥩',
          items: [
            { name: 'Premium Lamb', path: '/products/meat#lamb' },
            { name: 'Premium Beef', path: '/products/meat#beef' },
            { name: 'Chicken', path: '/products/meat#chicken' },
            { name: 'Fish', path: '/products/meat#fish' }
          ],
        },
      ],
    },
  ];

  const contactItems = [
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+220 990 0722',
      href: 'tel:+2209900722'
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'info@globalsourcesolution.com',
      href: 'mailto:info@globalsourcesolution.com'
    }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl' : 'bg-white/90 backdrop-blur-sm shadow-md'}`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
          {contactItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="flex items-center hover:text-blue-100 transition-colors"
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={gssLogo} 
                alt="Global Source Solution Logo" 
                className="h-12 transition-all duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 font-medium ${location.pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className={`px-3 py-2 font-medium flex items-center ${
                    activeDropdown === item.name || location.pathname.startsWith(item.path) 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute z-20 left-0 mt-2 w-64 rounded-lg shadow-xl bg-white border border-gray-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <div key={subitem.name} className="relative group">
                          <Link
                            to={subitem.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 flex items-center"
                            onClick={(e) => {
                              if (subitem.items) {
                                e.preventDefault();
                                toggleSubmenu(subitem.name);
                              }
                            }}
                          >
                            <span className="mr-2">{subitem.icon}</span>
                            {subitem.name}
                            {subitem.items && (
                              <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />
                            )}
                          </Link>
                          {subitem.items && activeSubmenu === subitem.name && (
                            <div className="absolute z-20 left-full top-0 w-64 rounded-lg shadow-xl bg-white border border-gray-200">
                              <div className="py-2">
                                {subitem.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
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
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/about" 
              className={`px-3 py-2 font-medium ${location.pathname === '/about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-xl border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg font-medium ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between ${
                    activeDropdown === item.name || location.pathname.startsWith(item.path) 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-6">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.name}>
                        <button
                          onClick={() => toggleSubmenu(subitem.name)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center ${
                            activeSubmenu === subitem.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="mr-2">{subitem.icon}</span>
                          {subitem.name}
                          {subitem.items && (
                            <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${
                              activeSubmenu === subitem.name ? 'rotate-180' : ''
                            }`} />
                          )}
                        </button>
                        {activeSubmenu === subitem.name && subitem.items && (
                          <div className="pl-6">
                            {subitem.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
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
              to="/about"
              className={`block px-4 py-3 rounded-lg font-medium ${
                location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className="block px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile contact info */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              {contactItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item.icon}
                  <span className="ml-3">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;