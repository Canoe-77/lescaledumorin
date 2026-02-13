import React from 'react';
import { Phone } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark';
  icon?: boolean;
  href?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  href,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider py-4 px-6 text-lg transition-all duration-200 transform active:scale-95 shadow-lg border-2";
  const widthClass = fullWidth ? "w-full" : "";
  
  const variants = {
    primary: "bg-[#b91c1c] border-[#b91c1c] text-white hover:bg-[#991b1b] hover:border-[#991b1b]",
    secondary: "bg-transparent border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white",
    dark: "bg-[#111] border-zinc-700 text-white hover:border-[#b91c1c]"
  };

  const Content = () => (
    <>
      {icon && <Phone className="w-5 h-5 mr-3" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      >
        <Content />
      </a>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      <Content />
    </button>
  );
};