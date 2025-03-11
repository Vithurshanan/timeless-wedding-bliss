
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className, 
  glass = false,
  hover = false,
  onClick
}: CardProps) => {
  return (
    <div 
      className={cn(
        'rounded-xl overflow-hidden transition-all duration-300',
        glass 
          ? 'backdrop-blur-sm bg-white/10 border border-white/20' 
          : 'bg-white dark:bg-wedding-midnight/30 shadow-elegant',
        hover && 'hover:shadow-gold hover:scale-[1.02]',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={cn('p-6', className)}>
    {children}
  </div>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => (
  <h3 className={cn('text-xl font-serif mb-2', className)}>
    {children}
  </h3>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => (
  <div className={cn('p-6 pt-0', className)}>
    {children}
  </div>
);

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={cn('p-6 border-t border-gray-100 dark:border-white/10', className)}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
