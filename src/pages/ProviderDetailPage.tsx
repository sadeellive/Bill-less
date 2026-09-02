import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  DollarSign, 
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
  };

  return (
    <div className="space-y-12 py-10">
      {/* Provider Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl bg-[#0D1B2A] p-8 sm:p-12 text-white shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#D71920] font-black text-2xl text-white">
                {provider.logoLetter}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Provider Rate & Negotiation Guide
                </span>
                <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {provider.name} Bill Reduction
                </h1>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800/80 px-4 py-3 border border-slate-700 text-right">
              <p className="text-[11px] text-slate-400 font-bold uppercase">Typical Monthly Savings</p>
              <p className="text-xl font-black text-emerald-400 font-display">{provider.typicalSavings}</p>
            </div>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl">
            {provider.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleNav('/upload')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D71920] font-bold text-sm text-white hover:bg-[#b5141a] transition-all cursor-pointer"
            >
              Audit My {provider.name} Bill ($29)
            </button>
            <a
              href="tel:+18325546367"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800 font-bold text-sm text-white hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="size-4 text-[#D71920]" />
              <span>Call Specialist: (832) 554-6367</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hidden Fees & Negotiation Breakdown */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Common Hidden Fees */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#D71920]">
              <AlertCircle className="size-5" />
              <h2 className="font-display text-lg font-bold text-[#0D1B2A]">
                Common {provider.name} Line-Item Charges
              </h2>
            </div>
            <p className="text-xs text-[#64707A]">
              These fees commonly pad statements after initial promo contracts expire:
            </p>

            <ul className="space-y-3 pt-2">
              {provider.commonFees.map((fee, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0D1B2A] p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="size-1.5 rounded-full bg-[#D71920] shrink-0 mt-1.5"></span>
                  <span>{fee}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#64707A]">
              <strong>Current Fair-Market Benchmark:</strong> {provider.benchmarkPrice}
            </div>
          </div>

          {/* Retention Strategy Tips */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="size-5" />
              <h2 className="font-display text-lg font-bold text-[#0D1B2A]">
                How to Negotiate With {provider.name}
              </h2>
            </div>
            <p className="text-xs text-[#64707A]">
              Key leverage points our specialists use to restore promotional pricing:
            </p>

            <ul className="space-y-3 pt-2">
              {provider.negotiationTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0D1B2A] p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verified Customer Reviews & Savings for this Provider */}
      {providerReviews.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D71920] flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>Verified Customer Reviews</span>
                </p>
                <h2 className="font-display text-xl font-bold text-[#0D1B2A] mt-1">
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

                    <h3 className="font-display font-bold text-sm text-[#0D1B2A]">
                      "{review.headline}"
                    </h3>

                    <p className="text-xs text-[#64707A] leading-relaxed">
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
                      <span className="font-bold text-[#0D1B2A]">{review.author}</span>
                      <span className="text-[#64707A]"> · {review.location}</span>
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
        <div className="rounded-3xl bg-[#0D1B2A] p-8 text-center text-white space-y-4">
          <h2 className="text-2xl font-bold">Have your {provider.name} bill in hand?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Upload your statement now or call our direct phone hotline for fast rate reduction assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleNav('/upload')}
              className="px-6 py-3.5 rounded-xl bg-[#D71920] font-bold text-sm text-white hover:bg-[#b5141a]"
            >
              Start {provider.name} Review ($29)
            </button>
            <a
              href="tel:+18325546367"
              className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800 font-bold text-sm text-white hover:bg-slate-700"
            >
              Call Specialist: (832) 554-6367
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
