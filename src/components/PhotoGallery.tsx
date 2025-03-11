
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

const PhotoGallery = ({ photos, className }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [visiblePhotos, setVisiblePhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Stagger the appearance of photos
      photos.forEach((photo, index) => {
        setTimeout(() => {
          setVisiblePhotos(prev => [...prev, photo.id]);
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [photos]);

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={cn('relative', className)}>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-100 dark:bg-wedding-midnight/30 rounded-lg animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={cn(
                'aspect-square overflow-hidden rounded-lg shadow-elegant cursor-pointer transform transition-all duration-500',
                visiblePhotos.includes(photo.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              )}
              onClick={() => openPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closePhoto}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closePhoto}
              className="absolute -top-12 right-0 p-2 text-white hover:text-wedding-gold transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
