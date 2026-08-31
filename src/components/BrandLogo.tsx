import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark'; // light: for white/light background, dark: for navy/dark background
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandMarkIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background Waving Flag Stripes */}
      <g>
        {/* Red stripe 1 */}
        <path
          d="M12 20 C28 14, 45 28, 62 20 C72 15, 80 17, 86 18 L86 28 C78 26, 70 24, 60 29 C44 36, 28 23, 12 30 Z"
          fill="#D71920"
        />
        {/* White stripe 1 */}
        <path
          d="M12 30 C28 23, 44 36, 60 29 C70 24, 78 26, 86 28 L86 37 C78 35, 70 33, 60 38 C44 45, 28 32, 12 39 Z"
          fill="#FFFFFF"
        />
        {/* Red stripe 2 */}
        <path
          d="M12 39 C28 32, 44 45, 60 38 C70 33, 78 35, 86 37 L86 46 C78 44, 70 42, 60 47 C44 54, 28 41, 12 48 Z"
          fill="#D71920"
        />
        {/* White stripe 2 */}
        <path
          d="M12 48 C28 41, 44 54, 60 47 C70 42, 78 44, 86 46 L86 55 C78 53, 70 51, 60 56 C44 63, 28 50, 12 57 Z"
          fill="#FFFFFF"
        />
        {/* Red stripe 3 */}
        <path
          d="M12 57 C28 50, 44 63, 60 56 C70 51, 78 53, 86 55 L86 64 C78 62, 70 60, 60 65 C44 72, 28 59, 12 66 Z"
          fill="#D71920"
        />
      </g>

      {/* Flag Canton (Navy Square with Stars) */}
      <g>
        <path
          d="M12 18 C28 12, 42 24, 52 20 L52 52 C42 55, 28 44, 12 50 Z"
          fill="#0D1B2A"
        />
        {/* White Stars */}
        <circle cx="20" cy="25" r="2" fill="#FFFFFF" />
        <circle cx="32" cy="23" r="2" fill="#FFFFFF" />
        <circle cx="44" cy="25" r="2" fill="#FFFFFF" />
        <circle cx="26" cy="32" r="2" fill="#FFFFFF" />
        <circle cx="38" cy="31" r="2" fill="#FFFFFF" />
        <circle cx="20" cy="39" r="2" fill="#FFFFFF" />
        <circle cx="32" cy="40" r="2" fill="#FFFFFF" />
        <circle cx="44" cy="38" r="2" fill="#FFFFFF" />
      </g>

      {/* The Bill / Statement Document */}
      <g filter="url(#drop-shadow)">
        {/* White bill rectangle with folded corner */}
        <path
          d="M48 26 L68 26 L76 34 L76 72 L48 72 Z"
          fill="#FFFFFF"
          stroke="#0D1B2A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Folded top-right corner */}
        <path
          d="M68 26 L68 34 L76 34"
          fill="#E2E8F0"
          stroke="#0D1B2A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Red Dollar Sign inside bill */}
        <text
          x="62"
          y="54"
          fill="#D71920"
          fontSize="24"
          fontWeight="900"
          fontFamily="Montserrat, sans-serif"
          textAnchor="middle"
        >
          $
        </text>
        {/* Bill horizontal lines */}
        <line x1="55" y1="62" x2="69" y2="62" stroke="#64707A" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Navy Downward Arrow on lower corner */}
      <g>
        <path
          d="M62 66 L62 76 L55 76 L66 87 L77 76 L70 76 L70 66 Z"
          fill="#0D1B2A"
        />
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  showTagline = true,
  className = '',
  size = 'md',
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

      {/* Typography */}
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
