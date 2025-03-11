
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  date: Date;
  backgroundImage: string;
}

const Hero = ({ title, subtitle, date, backgroundImage }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Wedding announcement and countdown"
    >
      {/* Background */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-wedding-midnight/50 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className={cn(
          "transition-all duration-1000 transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <p className="font-cursive text-wedding-gold text-3xl md:text-4xl mb-3">
            We're getting married
          </p>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            {title}
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-12">
            {subtitle}
          </p>
          
          <CountdownTimer 
            targetDate={date} 
            className="mb-12"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rsvp"
              className="px-8 py-3 bg-wedding-gold text-wedding-midnight font-medium rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-gold"
            >
              RSVP Now
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 bg-transparent border border-white text-white rounded-full transform transition-all duration-300 hover:bg-white/10 hover:scale-105 group flex items-center justify-center"
            >
              View Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[2px] h-16 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-wedding-gold absolute top-0 animate-pulse" />
        </div>
        <p className="text-white/60 text-xs mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
