import React from 'react';
import { cn } from '@/lib/utils';

interface RoundButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

const RoundButton = React.forwardRef<HTMLButtonElement, RoundButtonProps>(
  ({ className, children, size = 'md', variant = 'default', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };

    const baseClasses = cn(
      'relative rounded-full flex items-center justify-center transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-white/20',
      'hover:scale-105 active:scale-95',
      'backdrop-blur-[40px]',
      sizeClasses[size],
      className
    );

    const variantClasses = {
      default: cn(
        'bg-gradient-to-br from-white/40 via-white/20 to-white/0',
        'border border-white/30',
        'shadow-[0_0_20px_rgba(255,255,255,0.1)]',
        'before:absolute before:inset-0 before:rounded-full',
        'before:bg-gradient-to-br before:from-white/80 before:to-white/5',
        'before:opacity-0 before:transition-opacity',
        'hover:before:opacity-100'
      ),
      outline: cn(
        'bg-transparent border-2 border-white/40',
        'hover:border-white/60 hover:bg-white/10'
      ),
      ghost: cn(
        'bg-white/10 border border-white/20',
        'hover:bg-white/20 hover:border-white/40'
      )
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant])}
        {...props}
      >
        {/* Main gradient background matching SVG */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-white/0" />
        
        {/* Radial gradient stroke effects */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/80 via-white/20 to-transparent opacity-30" />
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/40 via-white/10 to-transparent opacity-20" />
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 text-white">
          {children}
        </div>
        
        {/* Outer glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-200 hover:opacity-100" />
      </button>
    );
  }
);

RoundButton.displayName = 'RoundButton';

export { RoundButton }; 