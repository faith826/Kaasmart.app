import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showDomain?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showDomain = true }) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', dot: 'w-1.5 h-1.5' },
    md: { icon: 'w-9 h-9', text: 'text-xl', dot: 'w-2 h-2' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', dot: 'w-2.5 h-2.5' },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* KaaSmart Brand Mark Icon */}
      <div className={`relative ${icon} rounded-xl bg-gradient-to-br from-[#0B192C] to-[#122642] p-1.5 border border-[#00D2C4]/40 shadow-sm flex items-center justify-center shrink-0 group`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Smart Building / Hexagon Geometry */}
          <path
            d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z"
            stroke="#00D2C4"
            strokeWidth="2"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
          {/* Modern 'K' intertwined with Property Horizon */}
          <path
            d="M11 9V23"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M21 10L13.5 16L21.5 22"
            stroke="#00D2C4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Smart Node Point */}
          <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex items-baseline">
        <span className={`font-bold tracking-tight text-white ${text}`}>
          Kaa<span className="text-[#00D2C4]">Smart</span>
        </span>
        {showDomain && (
          <span className="ml-1 text-[11px] font-mono font-medium text-[#00D2C4]/80 tracking-wide">
            .app
          </span>
        )}
      </div>
    </div>
  );
};
