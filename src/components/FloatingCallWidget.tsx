import React, { useState, useEffect } from 'react';
import { Phone, PhoneCall, X, ShieldAlert } from 'lucide-react';

interface FloatingCallWidgetProps {
  onOpenCallModal: () => void;
}

export const FloatingCallWidget: React.FC<FloatingCallWidgetProps> = ({ onOpenCallModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 pointer-events-none">
      {/* Expanded Quick Call Bubble */}
      {isExpanded && (
        <div 
          className="pointer-events-auto w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl transition-all duration-200"
          role="dialog"
          aria-label="Direct Phone Consultation"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D71920]">
              <ShieldAlert className="size-4" />
              <span>Direct Phone Consultation</span>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="rounded p-1 text-[#64707A] hover:bg-slate-100 hover:text-[#0D1B2A]"
              aria-label="Close phone helper bubble"
            >
              <X className="size-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-[#64707A] leading-relaxed">
            Need immediate advice on your Xfinity, AT&T, or Spectrum bill? Speak directly with a specialist.
          </p>

          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+18325546367"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#D71920] px-3 py-2.5 text-xs font-bold text-white shadow hover:bg-[#B5141A] transition-colors"
            >
              <Phone className="size-3.5" />
              <span>Call (832) 554-6367</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                onOpenCallModal();
              }}
              className="rounded-xl border border-[#d0d5dd] bg-slate-50 px-3 py-2 text-xs font-semibold text-[#0D1B2A] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Request a Callback
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="pointer-events-auto group relative flex items-center gap-2.5 rounded-full bg-[#D71920] p-3.5 sm:px-5 sm:py-3.5 text-white shadow-xl shadow-red-300/40 hover:bg-[#b5141a] transition-all duration-300 hover:scale-105 active:scale-95 focus-ring cursor-pointer"
        aria-label="Open instant call support"
      >
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-emerald-400"></span>
        </span>

        <PhoneCall className="size-5 transition-transform group-hover:rotate-12" />

        <span className="hidden sm:inline font-display text-sm font-bold tracking-tight">
          (832) 554-6367
        </span>
      </button>
    </div>
  );
};
