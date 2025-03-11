
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Events', path: '/events' },
    { name: 'Wedding Party', path: '/wedding-party' },
    { name: 'RSVP', path: '/rsvp' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Registry', path: '/registry' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant',
        isScrolled
          ? 'py-2 bg-white/90 dark:bg-wedding-midnight/95 backdrop-blur-sm shadow-elegant'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center group"
          aria-label="Go to homepage"
        >
          <Heart className={cn(
            'w-5 h-5 mr-2 transition-all duration-500',
            isScrolled ? 'text-wedding-gold' : 'text-wedding-blush'
          )} />
          <span className={cn(
            'font-cursive text-2xl transition-all duration-500',
            isScrolled ? 'text-wedding-midnight dark:text-white' : 'text-white'
          )}>
            Charlotte & James
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
                location.pathname === link.path
                  ? 'text-wedding-gold bg-black/5 dark:bg-white/10'
                  : isScrolled
                    ? 'text-wedding-charcoal dark:text-white/80 hover:text-wedding-gold hover:bg-black/5 dark:hover:bg-white/10'
                    : 'text-white/90 hover:text-wedding-gold hover:bg-white/10'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-md transition-colors',
            isScrolled
              ? 'text-wedding-midnight dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              : 'text-white hover:bg-white/10'
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-wedding-midnight/95 backdrop-blur-md shadow-elegant transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <nav className="flex flex-col space-y-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-md font-medium transition-colors',
                location.pathname === link.path
                  ? 'text-wedding-gold bg-black/5 dark:bg-white/10'
                  : 'text-wedding-charcoal dark:text-white/80 hover:text-wedding-gold hover:bg-black/5 dark:hover:bg-white/10'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
