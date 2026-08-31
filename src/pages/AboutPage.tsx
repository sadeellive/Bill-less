import React from 'react';
import { Compass, ShieldCheck, Scale, Lock, PhoneCall, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenCallModal }) => {
  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          About Bill Less America
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Independent U.S. Bill Review & Advocacy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Bill Less America was founded on a simple principle: when households pay for a service review, they deserve an honest technical audit without hidden commissions, advertising partnerships, or percentage-of-savings schemes.
        </p>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Our Independent Operating Principles
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Scale className="size-4 text-teal" />
                <span>100% Flat-Fee Model</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We charge an upfront, published flat fee. We do not take 40% of claimed "estimated savings" or trap households in recurring billing agreements.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Compass className="size-4 text-teal" />
                <span>Zero Carrier Kickbacks</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We do not receive referral fees or affiliate kickbacks from any telecom carrier, satellite provider, or ISP. Our loyalty is solely to the household.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="size-4 text-teal" />
                <span>No False Guarantees</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We refuse to invent fake statistics or promise savings that depend entirely on your provider's discretionary rate cards. We guarantee the quality of our audit work.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Lock className="size-4 text-teal" />
                <span>Explicit Client Control</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We never contact a carrier, cancel plans, or downgrade services without your explicit, written authorization of the exact document draft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-navy-foreground">Want to speak with our team?</h3>
            <p className="text-xs text-navy-foreground/80 mt-1">Our review specialists are available Mon–Fri 8am–7pm ET.</p>
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
