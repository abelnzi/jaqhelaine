import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveSubmenu(null);
  }, [location.pathname]);

  const getNavStyles = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent';
    }
    return 'bg-white shadow-sm';
  };

  const getLinkStyles = (isActive = false) => {
    if (isHomePage) {
      return isScrolled 
        ? `text-gray-700 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`
        : `text-white/90 hover:text-white ${isActive ? 'font-semibold' : ''}`;
    }
    return `text-gray-700 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`;
  };

  const navItems = [
    { key: 'home', label: t('nav.home'), path: '/' },
    { key: 'rooms', label: t('nav.rooms'), path: '/rooms' },
    { key: 'restaurant', label: t('nav.restaurant'), path: '/restaurant' },
    { key: 'meetingRooms', label: t('nav.meetingRooms'), path: '/meeting-rooms' },
    {
      key: 'events',
      label: t('nav.events'),
      path: '/events',
      subItems: [
        { key: 'weddings', label: t('nav.weddings'), path: '/events/weddings' },
        { key: 'meetings', label: t('nav.meetings'), path: '/events/meetings' },
        { key: 'workshops', label: t('nav.workshops'), path: '/events/workshops' },
        { key: 'cocktails', label: t('nav.cocktails'), path: '/events/cocktails' },
      ],
    },
    { key: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  let submenuTimeout: number | null = null;

  const handleSubmenuClick = (key: string) => {
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  const handleSubmenuKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSubmenuClick(key);
    }
  };

  const handleMouseEnter = (key: string) => {
    if (submenuTimeout) {
      window.clearTimeout(submenuTimeout);
      submenuTimeout = null;
    }
    setActiveSubmenu(key);
  };

  const handleMouseLeave = () => {
    submenuTimeout = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Augmentation du délai à 300ms
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/"
            className={`text-2xl font-serif font-bold transition-colors ${
              isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('hotel.name')}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.subItems ? (
                <div
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 transition-colors ${getLinkStyles()} focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md px-3 py-2`}
                    onClick={() => handleSubmenuClick(item.key)}
                    onKeyDown={(e) => handleSubmenuKeyDown(e, item.key)}
                    aria-expanded={activeSubmenu === item.key}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        activeSubmenu === item.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeSubmenu === item.key && (
                    <div 
                      className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="events-menu"
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors focus:outline-none focus:bg-amber-50 focus:text-amber-700"
                          role="menuitem"
                          onClick={() => setActiveSubmenu(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`${getLinkStyles(location.pathname === item.path)} px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <LanguageSwitcher />
            <Link
              to="/rooms"
              className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {t('nav.bookNow')}
            </Link>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-700'} />
            ) : (
              <Menu className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-700'} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.key} className="space-y-1">
                    <button
                      className="w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center justify-between"
                      onClick={() => handleSubmenuClick(item.key)}
                      aria-expanded={activeSubmenu === item.key}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          activeSubmenu === item.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeSubmenu === item.key && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveSubmenu(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
              <Link
                to="/rooms"
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}