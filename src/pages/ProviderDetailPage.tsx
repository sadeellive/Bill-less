import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  AlertCircle,
  Star,
  TrendingDown,
  Sparkles
} from 'lucide-react';
import { providersList } from '../data/siteContent';
import { testimonialsList } from '../data/testimonialsData';

interface ProviderDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ProviderDetailPage: React.FC<ProviderDetailPageProps> = ({ slug, navigate, onOpenCallModal }) => {
  const provider = providersList.find((p) => p.slug === slug) || providersList[0];
  const providerReviews = testimonialsList.filter((t) => t.providerSlug === provider.slug);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12">
      {/* Back Button */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNav('/providers')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to all providers</span>
        </button>
      </div>

      {/* Header Banner */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-teal/15 text-teal font-bold text-xs uppercase tracking-wider">
            {provider.category} Bill Review Guide
          </span>
          <span className="text-xs text-muted-foreground">· U.S. Independent Audit</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          {provider.name} Bill Review & Fee Breakdown
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {provider.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => handleNav('/upload')}
            className="px-6 py-3 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90"
          >
            Upload {provider.name} Bill for Review ($29)
          </button>
          <button
            type="button"
            onClick={onOpenCallModal}
            className="px-5 py-3 rounded-xl border border-border text-foreground font-semibold text-xs hover:bg-muted flex items-center gap-2"
          >
            <PhoneCall className="size-4 text-teal" />
            <span>Call specialist about {provider.name}</span>
          </button>
        </div>
      </section>

      {/* Common Charges Breakdown */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="font-display text-xl font-bold text-foreground">
            Common Line Items on {provider.name} Statements
          </h2>
          <p className="text-xs text-muted-foreground">
            These are recurring and optional fees frequently encountered during line-by-line statement audits.
          </p>

          <div className="divide-y divide-border border-y border-border">
            {provider.commonCharges.map((charge, idx) => (
              <div key={idx} className="py-4 grid gap-2 sm:grid-cols-[1.5fr_1fr_2.5fr] items-start">
                <span className="font-bold text-sm text-foreground">{charge.name}</span>
                <span className="text-xs font-semibold text-teal px-2 py-0.5 rounded bg-teal/10 w-fit">
                  {charge.type}
                </span>
                <p className="text-xs text-muted-foreground">{charge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Questions Checklist */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-slate-50 p-6 sm:p-8 space-y-4">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="size-5 text-teal" />
            <span>Questions to Ask {provider.name} Customer Loyalty</span>
          </h2>
          <p className="text-xs text-muted-foreground">
            Use these factual questions to avoid vague negotiations and get concrete answers from billing representatives:
          </p>

          <ul className="space-y-3 pt-2">
            {provider.questionChecklist.map((q, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="size-5 rounded-full bg-teal text-teal-foreground flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Analyst Tips */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal/30 bg-teal/5 p-6 sm:p-8 space-y-4">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="size-5 text-teal" />
            <span>Analyst Insights for {provider.name}</span>
          </h2>

          <ul className="space-y-2.5">
            {provider.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                <CheckCircle2 className="size-4 text-teal shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Verified Customer Reviews & Savings for this Provider */}
      {providerReviews.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D71920] flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>Verified Customer Reviews</span>
                </p>
                <h2 className="font-display text-xl font-bold text-foreground mt-1">
                  How We Helped Lower {provider.name} Bills
                </h2>
              </div>
              <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 self-start sm:self-auto">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-900 ml-1">5.0 Star Verified</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {providerReviews.map((review) => (
                <div 
                  key={review.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 border border-emerald-200 text-emerald-800 text-xs font-black">
                        <TrendingDown className="size-3 text-emerald-600" />
                        <span>-${review.monthlySavings}/mo</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-sm text-foreground">
                      "{review.headline}"
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {review.review}
                    </p>

                    <div className="rounded-xl bg-white p-3 border border-slate-200 text-[11px] space-y-1">
                      <p className="font-bold text-[#0D1B2A] text-[10px] uppercase tracking-wider">Results Achieved:</p>
                      {review.actionsTaken.map((act, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-slate-700">
                          <span className="size-1 rounded-full bg-[#D71920] shrink-0 mt-1.5"></span>
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-foreground">{review.author}</span>
                      <span className="text-muted-foreground"> · {review.location}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#D71920]">Verified Client</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 text-center space-y-4 relative overflow-hidden">
          <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-40"></div>
          <div className="relative max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-navy-foreground">
              Have a recent {provider.name} statement?
            </h3>
            <p className="text-xs text-navy-foreground/80 mt-2">
              Let an independent specialist review every line item and prepare a customized draft request for you.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleNav('/upload')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-teal-foreground font-bold text-xs shadow hover:bg-teal/90"
              >
                Upload {provider.name} Bill
              </button>
              <button
                type="button"
                onClick={onOpenCallModal}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-navy-foreground/30 text-navy-foreground font-semibold text-xs hover:bg-navy-foreground/10 flex items-center justify-center gap-2"
              >
                <PhoneCall className="size-3.5 text-teal" />
                <span>Call Specialist: (832) 554-6367</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
