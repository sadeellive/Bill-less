import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { faqList } from '../data/siteContent';

interface FAQPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate, onOpenCallModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-12">
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Support & Clarity
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Clear answers regarding our flat-fee structure, carrier independence, data handling, and review turnaround times.
        </p>
      </section>

      {/* Accordion FAQ list */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden transition-shadow shadow-sm hover:shadow"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-teal">{idx + 1}.</span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown className={`size-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-teal' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground border-t border-border/40 animate-in fade-in duration-150">
                    <p>{item.a}</p>
                    {item.category && (
                      <span className="inline-block mt-3 text-[0.7rem] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Call CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-navy-foreground">Still have a question?</h3>
            <p className="text-xs text-navy-foreground/80 mt-1">Our team is available by phone to clarify any details.</p>
          </div>
          <button
            type="button"
            onClick={onOpenCallModal}
            className="px-6 py-3 rounded-xl bg-teal text-teal-foreground font-bold text-xs hover:bg-teal/90 flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="size-3.5" />
            <span>Call (832) 554-6367</span>
          </button>
        </div>
      </section>
    </div>
  );
};
