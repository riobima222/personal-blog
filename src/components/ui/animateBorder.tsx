import React from "react";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
      <div className="absolute inset-0 flex">
        <div className="h-full w-1/4 opacity-20 animate-border-slide"></div>
      </div>
      <div className="relative bg-slate-800 dark:bg-gray-800 rounded-lg p-6 z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
