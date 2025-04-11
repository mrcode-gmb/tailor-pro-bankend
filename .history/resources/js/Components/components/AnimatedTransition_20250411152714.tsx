
import React from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'none';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  show: boolean;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
}

const variantClasses = {
  'fade': 'opacity-0 transition-opacity',
  'slide-up': 'opacity-0 translate-y-4 transition-all',
  'slide-down': 'opacity-0 -translate-y-4 transition-all',
  'slide-left': 'opacity-0 translate-x-4 transition-all',
  'slide-right': 'opacity-0 -translate-x-4 transition-all',
  'scale': 'opacity-0 scale-95 transition-all',
  'none': ''
};

export const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  children,
  show,
  variant = 'fade',
  duration = 300,
  delay = 0,
  className
}) => {
  const [shouldRender, setShouldRender] = React.useState(show);

  React.useEffect(() => {
    if (show) setShouldRender(true);
    else {
      const timer = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!shouldRender) return null;

  return (
    <div
      className={(
        variantClasses[variant],
        show ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : '',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : undefined,
        pointerEvents: show ? 'auto' : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
