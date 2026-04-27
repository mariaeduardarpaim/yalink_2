import { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white-outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-[#1fa774] hover:bg-[#168a5f] text-white focus:ring-[#1fa774] shadow-[0_4px_14px_0_rgba(31,167,116,0.39)] hover:shadow-[0_6px_20px_rgba(31,167,116,0.23)] hover:-translate-y-0.5',
      secondary: 'bg-yealink-blue hover:bg-yealink-dark-blue text-white focus:ring-yealink-blue',
      outline: 'border-2 border-[#1fa774] text-[#1fa774] hover:bg-[#1fa774] hover:text-white focus:ring-[#1fa774] hover:shadow-[0_4px_14px_0_rgba(31,167,116,0.39)] hover:-translate-y-0.5',
      'white-outline': 'border-2 border-white/30 text-white hover:bg-white hover:text-yealink-dark-bg focus:ring-white hover:shadow-[0_4px_14px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5',
      ghost: 'text-yealink-text hover:bg-yealink-gray focus:ring-yealink-gray',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, cn };