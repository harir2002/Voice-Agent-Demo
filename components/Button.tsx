
import type React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";
  
  const variantClasses = {
    primary: 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red',
    secondary: 'bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
