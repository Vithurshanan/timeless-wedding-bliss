
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface StoryTimelineProps {
  events: TimelineEvent[];
}

const StoryTimeline = ({ events }: StoryTimelineProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-wedding-gold/30 transform md:-translate-x-[1px]" />

      {/* Timeline events */}
      {events.map((event, index) => {
        const isVisible = visibleItems.includes(index);
        const isEven = index % 2 === 0;

        return (
          <div
            ref={(el) => (timelineRefs.current[index] = el)}
            key={index}
            className={cn(
              'relative mb-16 md:mb-24 flex flex-col md:flex-row',
              isEven 
                ? 'md:flex-row-reverse' 
                : ''
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-wedding-gold rounded-full transform -translate-x-[11px] md:-translate-x-[12px] z-10 shadow-gold" />

            {/* Content container */}
            <div className={cn(
              'pl-12 md:pl-0 md:w-1/2 transition-all duration-700 ease-out',
              isEven 
                ? 'md:pr-16 lg:pr-24' 
                : 'md:pl-16 lg:pl-24',
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            )}>
              {/* Image (on mobile it's above the content) */}
              <div className="md:hidden mb-4 overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="bg-white dark:bg-wedding-midnight/30 p-6 rounded-lg shadow-elegant">
                <div className="text-wedding-gold font-medium mb-2">{event.date}</div>
                <h3 className="text-xl md:text-2xl font-serif mb-3">{event.title}</h3>
                <p className="text-wedding-charcoal/80 dark:text-white/80">{event.description}</p>
              </div>
            </div>

            {/* Image container (desktop only) */}
            <div className={cn(
              'hidden md:block md:w-1/2 transition-all duration-700 ease-out',
              isEven 
                ? 'md:pl-16 lg:pl-24' 
                : 'md:pr-16 lg:pr-24',
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            )}>
              <div className="overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryTimeline;
