
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className={cn(
      'opacity-0 transition-opacity duration-1000',
      { 'opacity-100': isVisible },
      className
    )}>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className="flex flex-col items-center"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-elegant flex items-center justify-center animate-fade-in-slide">
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-wedding-gold bg-gold-gradient bg-clip-text text-transparent">
                {unit.value < 10 ? `0${unit.value}` : unit.value}
              </span>
            </div>
            <span className="text-xs md:text-sm mt-2 text-white/80">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
