
import { useRef, useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MapLocationProps {
  name: string;
  address: string;
  embeddedMapUrl: string;
  className?: string;
}

const MapLocation = ({ name, address, embeddedMapUrl, className }: MapLocationProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("rounded-xl overflow-hidden shadow-elegant", className)}>
      <div className="relative h-96">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-wedding-midnight/30 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-wedding-gold/30 border-t-wedding-gold rounded-full animate-spin" />
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          src={isVisible ? embeddedMapUrl : ''}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          title={`Map showing location of ${name}`}
        ></iframe>
      </div>
      
      <div className="p-4 bg-white dark:bg-wedding-midnight">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-lg">{name}</h3>
            <p className="text-wedding-charcoal/80 dark:text-white/80 text-sm">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
