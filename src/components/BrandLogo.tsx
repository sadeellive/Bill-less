import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandMarkIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shieldGradRed" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5232A" />
          <stop offset="100%" stopColor="#B5141A" />
        </linearGradient>
        <linearGradient id="shieldGradNavy" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B314B" />
          <stop offset="100%" stopColor="#0D1B2A" />
        </linearGradient>
        <filter id="shieldShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Shield Crest Base */}
      <path
        d="M50 8C28 8 16 16 16 28C16 62 42 85 50 92C58 85 84 62 84 28C84 16 72 8 50 8Z"
        fill="url(#shieldGradNavy)"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        filter="url(#shieldShadow)"
      />

      {/* Red Accent Wing */}
      <path
        d="M50 14C32 14 22 21 22 30C22 58 44 78 50 84C56 78 78 58 78 30C78 21 68 14 50 14Z"
        fill="url(#shieldGradRed)"
      />

      {/* Downward Slashing Savings Arrow */}
      <path
        d="M32 38L50 62L68 38H56V26H44V38H32Z"
        fill="#FFFFFF"
        stroke="#0D1B2A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Dollar Symbol in Arrow Base */}
      <text
        x="50"
        y="49"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#0D1B2A"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="17"
      >
        $
      </text>

      {/* Small Stars representing American Consumer Protection */}
      <polygon points="34,22 35.5,25.5 39,26 36.5,28.5 37,32 34,30 31,32 31.5,28.5 29,26 32.5,25.5" fill="#FFFFFF" />
      <polygon points="66,22 67.5,25.5 71,26 68.5,28.5 69,32 66,30 63,32 63.5,28.5 61,26 64.5,25.5" fill="#FFFFFF" />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs sm:text-sm',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Brand Icon Mark */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <BrandMarkIcon className={iconSizes[size]} />
      </div>

      {/* Text Branding */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-display font-black tracking-tight flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${titleSizes[size]}`}>
          <span className={isDark ? 'text-white' : 'text-[#0D1B2A]'}>BILL LESS</span>
          <span className="text-[#D71920]">AMERICA</span>
        </div>

        {showTagline && (
          <div className="mt-0.5 sm:mt-1 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span className="h-[1px] w-2 sm:w-3 bg-[#D71920]"></span>
            <span
              className={`font-bold uppercase tracking-[0.14em] leading-tight ${taglineSizes[size]} ${
                isDark ? 'text-slate-300' : 'text-[#64707A]'
              }`}
            >
              Lower Bills. Better Life.
            </span>
            <span className="h-[1px] w-2 sm:w-3 bg-[#D71920]"></span>
          </div>
        )}
      </div>
    </div>
  );
};
