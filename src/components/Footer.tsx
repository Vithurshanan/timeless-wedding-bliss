
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-wedding-midnight text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-wedding-gold" />
              <span className="font-cursive text-2xl">Charlotte & James</span>
            </div>
            <p className="text-white/70 max-w-xs">
              Thank you for celebrating our special day with us. We're excited to share this journey with you.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-white/70 hover:text-wedding-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-wedding-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl border-b border-wedding-gold/40 pb-2 inline-block">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-white/70 hover:text-wedding-gold transition-colors">Home</Link>
              <Link to="/our-story" className="text-white/70 hover:text-wedding-gold transition-colors">Our Story</Link>
              <Link to="/events" className="text-white/70 hover:text-wedding-gold transition-colors">Events</Link>
              <Link to="/wedding-party" className="text-white/70 hover:text-wedding-gold transition-colors">Wedding Party</Link>
              <Link to="/rsvp" className="text-white/70 hover:text-wedding-gold transition-colors">RSVP</Link>
              <Link to="/gallery" className="text-white/70 hover:text-wedding-gold transition-colors">Gallery</Link>
              <Link to="/registry" className="text-white/70 hover:text-wedding-gold transition-colors">Registry</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl border-b border-wedding-gold/40 pb-2 inline-block">
              Wedding Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Saturday, June 10, 2023</p>
                  <p className="text-white/70">4:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Grand Luxe Estate</p>
                  <p className="text-white/70">123 Elegance Drive, Beverly Hills, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Questions?</p>
                  <a href="mailto:charlotteandjames@wedding.com" className="text-wedding-gold hover:underline">
                    charlotteandjames@wedding.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Charlotte & James Wedding. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-white/60 hover:text-wedding-gold transition-colors group"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
