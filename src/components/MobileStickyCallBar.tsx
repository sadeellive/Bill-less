import React from 'react';
import { Phone } from 'lucide-react';

interface MobileStickyCallBarProps {
  phoneNumber?: string;
  displayNumber?: string;
}

export const MobileStickyCallBar: React.FC<MobileStickyCallBarProps> = ({
  phoneNumber = '+18325546367',
  displayNumber = '(832) 554-6367',
}) => {
  return (
    <div className="fixed bottom-3.5 inset-x-3 z-50 sm:hidden pointer-events-none">
      <a
        href={`tel:${phoneNumber}`}
        className="pointer-events-auto flex w-full items-center justify-center gap-2.5 rounded-full bg-[#D71920] py-3.5 px-5 text-white shadow-[0_8px_25px_rgba(215,25,32,0.45)] hover:bg-[#b5141a] active:scale-[0.98] transition-all border-2 border-white/20"
        aria-label={`Call Bill Less America at ${displayNumber}`}
      >
        {/* Crisp Outline Phone Icon Matching Graphic */}
        <Phone className="size-5 shrink-0 stroke-[2.5]" />
        
        {/* Bold White Text Matching Requested Pill */}
        <span className="font-display text-base font-extrabold tracking-tight text-white whitespace-nowrap">
          Call Now: {displayNumber}
        </span>
      </a>
    </div>
  );
};
