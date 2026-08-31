import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  TrendingDown, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { testimonialsList, Testimonial } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
  initialFilter?: 'all' | 'xfinity' | 'att' | 'spectrum';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onNavigate,
  onOpenCallModal,
  initialFilter = 'all'
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'xfinity' | 'att' | 'spectrum'>(initialFilter);

  const filteredTestimonials = activeTab === 'all' 
    ? testimonialsList 
    : testimonialsList.filter((t) => t.providerSlug === activeTab);

  const tabs: { id: 'all' | 'xfinity' | 'att' | 'spectrum'; label: string; count: number }[] = [
    { id: 'all', label: 'All Reviews', count: testimonialsList.length },
    { id: 'xfinity', label: 'Xfinity', count: testimonialsList.filter(t => t.providerSlug === 'xfinity').length },
    { id: 'att', label: 'AT&T', count: testimonialsList.filter(t => t.providerSlug === 'att').length },
    { id: 'spectrum', label: 'Spectrum', count: testimonialsList.filter(t => t.providerSlug === 'spectrum').length },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920] flex items-center gap-1.5">
            <Sparkles className="size-3.5" />
            <span>Verified Customer Stories</span>
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0D1B2A] sm:text-4xl">
            Real savings on Xfinity, AT&T, and Spectrum
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#64707A]">
            See how everyday American households cut hidden fees, renewed expired promo credits, and lowered their monthly bills with Bill Less America.
          </p>
        </div>

        {/* Aggregate Ratings Card */}
        <div className="shrink-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm flex items-center gap-4">
          <div className="flex flex-col items-center justify-center border-r border-slate-100 pr-4">
            <span className="text-3xl font-black text-[#0D1B2A] leading-none">4.9</span>
            <div className="flex items-center gap-0.5 mt-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#64707A] mt-1">
              Verified Reviews
            </span>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-1.5 text-[#0D1B2A] font-bold">
              <ShieldCheck className="size-4 text-[#D71920]" />
              <span>Average savings: $45–$75/mo</span>
            </div>
            <p className="text-[11px] text-[#64707A]">
              100% independent consumer advocate
            </p>
          </div>
        </div>
      </div>

      {/* Provider Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2.5 border-b border-slate-200 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0D1B2A] text-white shadow-sm'
                  : 'bg-[#F2F4F7] text-[#64707A] hover:bg-slate-200 hover:text-[#0D1B2A]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-black ${
                  isActive
                    ? 'bg-[#D71920] text-white'
                    : 'bg-white text-[#64707A]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Testimonials Cards Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTestimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col justify-between rounded-3xl border border-[#d0d5dd] bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Background Quote Watermark */}
            <Quote 
              className="absolute -right-3 -top-3 size-24 text-slate-100/70 -rotate-12 pointer-events-none group-hover:text-red-50/50 transition-colors" 
              aria-hidden="true" 
            />

            <div className="relative">
              {/* Header: Provider badge & Savings Pill */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D1B2A] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                    {t.providerName}
                  </span>
                  <p className="mt-1 text-[11px] font-semibold text-[#64707A]">
                    {t.serviceDetails}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 border border-emerald-200 text-emerald-800 text-xs font-black">
                    <TrendingDown className="size-3.5 text-emerald-600" />
                    <span>-${t.monthlySavings}/mo</span>
                  </div>
                  <p className="text-[10px] font-bold text-emerald-700 mt-0.5">
                    ${t.annualSavings}/yr saved
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-xs font-bold text-[#0D1B2A]">
                  5.0
                </span>
                <span className="text-xs text-[#64707A]">· {t.date}</span>
              </div>

              {/* Review Headline */}
              <h3 className="mt-3 font-display text-base font-bold text-[#0D1B2A] leading-snug">
                "{t.headline}"
              </h3>

              {/* Review Body */}
              <p className="mt-2.5 text-sm leading-relaxed text-[#64707A]">
                {t.review}
              </p>

              {/* Specific Resolved Actions */}
              <div className="mt-4 rounded-xl bg-[#F2F4F7] p-3.5 border border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B2A] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[#D71920]" />
                  <span>How Bill Less America Helped:</span>
                </p>
                <ul className="space-y-1.5">
                  {t.actionsTaken.map((action, idx) => (
                    <li key={idx} className="text-xs text-[#0D1B2A] flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-[#D71920] shrink-0 mt-1.5"></span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Author Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#0D1B2A]">{t.author}</p>
                <p className="text-xs text-[#64707A]">{t.location}</p>
              </div>

              <span className="text-[11px] font-bold text-[#D71920] bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                Verified Customer
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Bar underneath reviews */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0D1B2A] to-[#1a2f47] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Have an Xfinity, AT&T, or Spectrum bill creeping up?
          </h3>
          <p className="text-sm text-slate-300">
            Let our independent specialists audit your statement and negotiate your best possible rates today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onNavigate('/upload')}
            className="w-full sm:w-auto focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#D71920] px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-900/40 hover:bg-[#b5141a] transition-all cursor-pointer"
          >
            <span>Start Your Review ($29)</span>
            <ArrowRight className="size-4" />
          </button>

          <a
            href="tel:+18325546367"
            className="w-full sm:w-auto focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/90 px-5 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors"
          >
            <PhoneCall className="size-4 text-[#D71920]" />
            <span>Call (832) 554-6367</span>
          </a>
        </div>
      </div>
    </section>
  );
};
