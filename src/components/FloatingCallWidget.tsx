import React, { useState, useEffect } from 'react';
import { Phone, X, Clock, Shield } from 'lucide-react';

interface FloatingCallWidgetProps {
  onOpenCallModal: () => void;
}

export const FloatingCallWidget: React.FC<FloatingCallWidgetProps> = ({ onOpenCallModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 pointer-events-none">
      {/* Expanded Quick Call Bubble */}
      {isExpanded && (
        <div 
          className="pointer-events-auto w-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-200"
          role="dialog"
          aria-label="Quick Call Assistant"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2.5 bg-[#D71920]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">Direct Savings Line</span>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="p-1 text-[#64707A] hover:text-[#0D1B2A] rounded-md hover:bg-slate-100"
            >
              <X className="size-4" />
            </button>
          </div>

          <p className="text-sm font-bold text-[#0D1B2A]">Need lower bills today?</p>
          <p className="text-xs text-[#64707A] mt-1">
            Our bill negotiation specialists can review your monthly services and uncover immediate savings over the phone.
          </p>

          <div className="mt-3.5 space-y-2">
            <a
              href="tel:+18325546367"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D71920] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-red-200 hover:bg-[#b5141a] transition-transform active:scale-95"
            >
              <Phone className="size-4" />
              <span>Call (832) 554-6367</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                onOpenCallModal();
              }}
              className="w-full text-center text-xs font-bold text-[#0D1B2A] hover:text-[#D71920] hover:underline py-1"
            >
              Or request an instant callback →
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between text-[0.7rem] text-[#64707A] pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Clock className="size-3 text-[#D71920]" /> 8am–8pm ET
            </span>
            <span className="flex items-center gap-1">
              <Shield className="size-3 text-[#D71920]" /> Bill Less America
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button (Always Visible) */}
      <div className="pointer-events-auto flex flex-col items-center gap-2">
        {!isExpanded && (
          <div className="bg-[#0D1B2A] text-[10px] font-bold text-white px-3 py-1 rounded-full shadow-md border border-slate-700 uppercase tracking-wider">
            Direct Line
          </div>
        )}

        {/* The Main Round Call Button */}
        <button
          type="button"
          onClick={() => {
            if (isExpanded) {
              setIsExpanded(false);
            } else {
              onOpenCallModal();
            }
          }}
          aria-label="Call Bill Less America Specialists"
          title="Call Now: (832) 554-6367"
          className="call-pulse-button flex size-14 sm:size-16 items-center justify-center rounded-full bg-[#D71920] text-white shadow-2xl hover:bg-[#b5141a] transition-all hover:scale-105 active:scale-95 group focus-ring cursor-pointer border-4 border-white"
        >
          <Phone className="size-6 transition-transform group-hover:rotate-12" />
        </button>
      </div>
    </div>
  );
};
