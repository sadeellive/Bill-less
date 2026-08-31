import React from 'react';
import { Check, ShieldCheck, ArrowRight, PhoneCall, HelpCircle } from 'lucide-react';
import { pricingTiers } from '../data/siteContent';

interface PricingPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigate, onOpenCallModal }) => {
  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-12">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Pricing
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Simple, flat pricing published in advance
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          No percentage of claimed savings, no recurring monthly subscription traps, and no referral fees from providers. You pay only for the review work.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-shadow relative ${
                tier.highlight
                  ? 'border-teal bg-card shadow-xl ring-2 ring-teal/50'
                  : 'border-border bg-card shadow-sm hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-bold uppercase tracking-wider text-teal-foreground shadow">
                  Most Popular for Households
                </div>
              )}

              <div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {tier.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">
                  {tier.for}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5 pb-6 border-b border-border">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    / {tier.unit}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="size-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-2">
                <button
                  type="button"
                  onClick={() => handleNav('/upload')}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold shadow transition-all ${
                    tier.highlight
                      ? 'bg-teal text-teal-foreground hover:bg-teal/90 hover:shadow-md'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  Start this review
                </button>
                <p className="text-[0.72rem] text-center text-muted-foreground">
                  One-time payment · 100% money-back review guarantee
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Flat Fee vs Percentage of Savings */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-slate-50 p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Why we charge a flat fee instead of taking a percentage of savings
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Many bill-negotiation companies take 30% to 50% of claimed "first-year savings." This incentivizes them to promise unrealistic numbers, downgrade services you actually enjoy, or claim credit for standard seasonal discounts.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              At Bill Less America, our incentives are 100% aligned with yours. You pay a clear, low flat fee for an expert review. If your bill is already at the lowest rate card available, we tell you that plainly in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Phone Consultation Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-foreground">
              Have questions about which tier is right for you?
            </h2>
            <p className="text-sm text-navy-foreground/80">
              Call our team toll-free for a quick 2-minute independent check.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCallModal}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90"
          >
            <PhoneCall className="size-4" />
            <span>Call (832) 554-6367</span>
          </button>
        </div>
      </section>
    </div>
  );
};
