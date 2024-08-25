import React from 'react';

interface GradientTextProps {
  text: string;
  variant?: 'rainbow' | 'sunset' | 'neon' | 'ocean';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, variant = 'rainbow', className = '' }) => {
  const gradientClasses = {
    rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500',
    sunset: 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600',
    neon: 'bg-gradient-to-r from-green-400 to-blue-500',
    ocean: 'bg-gradient-to-r from-blue-400 via-teal-500 to-indigo-500',
  };

  return (
    <span 
      className={`text-transparent bg-clip-text font-bold ${gradientClasses[variant]} ${className}`}
    >
      {text}
    </span>
  );
};

export default GradientText;