
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

interface PersonProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  isBride?: boolean;
}

const WeddingPartyCard = ({ 
  name, 
  role, 
  image, 
  bio, 
  instagram, 
  isBride = false 
}: PersonProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-96 w-full perspective group"
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={cn(
          "relative h-full w-full transition-all duration-500 transform-style preserve-3d rounded-xl shadow-elegant",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden overflow-hidden rounded-xl" 
          onClick={() => setIsFlipped(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
          
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-medium mb-2",
              isBride ? "bg-wedding-blush text-white" : "bg-wedding-gold text-wedding-midnight"
            )}>
              {role}
            </div>
            <h3 className="text-xl font-serif text-white">{name}</h3>
            
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden overflow-hidden rotate-y-180 rounded-xl bg-white dark:bg-wedding-midnight p-6 flex flex-col"
          onClick={() => setIsFlipped(false)}
        >
          <div className="flex-1">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-medium mb-2",
              isBride ? "bg-wedding-blush text-white" : "bg-wedding-gold text-wedding-midnight"
            )}>
              {role}
            </div>
            <h3 className="text-xl font-serif mb-4">{name}</h3>
            <p className="text-wedding-charcoal/80 dark:text-white/80 mb-6">{bio}</p>
          </div>
          
          {instagram && (
            <div className="mt-auto">
              <a 
                href={`https://instagram.com/${instagram}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-wedding-charcoal/70 dark:text-white/70 hover:text-wedding-gold transition-colors"
              >
                <Instagram size={16} />
                <span>@{instagram}</span>
              </a>
            </div>
          )}
          
          <div className="absolute bottom-6 right-6">
            <div className="w-10 h-10 rounded-full bg-wedding-gold/10 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-wedding-gold"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPartyCard;
