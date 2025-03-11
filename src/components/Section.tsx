
import { ReactNode, useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  dark?: boolean;
  centered?: boolean;
  id?: string;
}

const Section = ({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  dark = false,
  centered = false,
  id
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'py-16 md:py-24 overflow-hidden',
        dark ? 'bg-wedding-midnight text-white' : 'bg-white',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={cn(
            'mb-12 md:mb-16 max-w-3xl transition-opacity duration-700 opacity-0',
            isVisible && 'opacity-100',
            centered ? 'mx-auto text-center' : ''
          )}>
            {title && (
              <h2 className={cn('font-serif mb-4', titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('text-lg', dark ? 'text-white/80' : 'text-wedding-charcoal/80')}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(
          'transition-transform duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
