import React from 'react';
import { 
  FileSearch, 
  ClipboardCheck, 
  MessageSquareQuote, 
  ArrowRight,
  ShieldAlert,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { providersList, resourcesList } from '../data/siteContent';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenCallModal }) => {
  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      step: '01',
      title: 'Share your statement',
      body: 'Upload a PDF or photo of your recent internet, cable, or phone bill.'
    },
    {
      step: '02',
      title: 'We read every line',
      body: 'Our review specialists separate base rates from hidden add-ons and expired promo credits.'
    },
    {
      step: '03',
      title: 'You approve the request',
      body: 'We draft the exact negotiation strategy. You approve every word before anything is sent.'
    },
    {
      step: '04',
      title: 'Lower monthly bills',
      body: 'Enjoy verified monthly savings and a complete written record of your updated rate.'
    }
  ];

  const deliverables = [
    {
      icon: FileSearch,
      title: 'Line-by-line breakdown',
      body: 'Each charge on your statement translated into plain English, identifying inflated equipment leases and fees.'
    },
    {
      icon: ClipboardCheck,
      title: 'Actionable savings roadmap',
      body: 'Specific recurring line items eligible for loyalty reductions, promo roll-overs, or immediate removal.'
    },
    {
      icon: MessageSquareQuote,
      title: 'Custom negotiation plan',
      body: 'Detailed scripts and documented requests that you authorize in writing before any contact with carriers.'
    }
  ];

  const internetProviders = providersList.filter(p => p.category === 'internet');
  const wirelessProviders = providersList.filter(p => p.category === 'wireless');
  const tvProviders = providersList.filter(p => p.category === 'tv');

  return (
    <div className="space-y-0">
      {/* Hero Section with Exact Brand Styling */}
      <section className="relative overflow-hidden bg-white border-b border-[#d0d5dd]">
        <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-40"></div>
        
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            {/* National Advocacy Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F2F4F7] border border-[#d0d5dd] px-4 py-1.5 mb-6 shadow-sm">
              <span className="size-2 rounded-full bg-[#D71920] animate-pulse"></span>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#0D1B2A]">
                American Household Advocacy · 100% Independent
              </p>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight text-[#0D1B2A]">
              We Lower <span className="text-[#D71920]">Your Bills.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg sm:text-xl font-medium leading-relaxed text-[#64707A]">
              We negotiate so you can save on internet, cable, phone, and more. Lower bills. Better life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center mt-8">
              <button
                type="button"
                onClick={() => handleNav('/upload')}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#D71920] px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-200 hover:bg-[#b5141a] transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Start Saving Today</span>
                <ArrowRight className="size-5" />
              </button>

              <button
                type="button"
                onClick={onOpenCallModal}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D1B2A] px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-[#1a2f47] transition-all active:scale-95 cursor-pointer"
              >
                <PhoneCall className="size-4 text-[#D71920]" />
                <span>Call Specialist: (832) 554-6367</span>
              </button>
            </div>

            {/* 3 Core Trust Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs font-bold text-[#0D1B2A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#D71920]" /> Trusted & Transparent
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#D71920]" /> Easy 4-Step Process
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#D71920]" /> Effective Results
              </span>
            </div>
          </div>

          {/* Hero Right: Brand Value Card (Exact Match to Graphic) */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-[#0D1B2A] p-7 sm:p-9 shadow-2xl text-white">
              <div className="space-y-6">
                {/* 1. We Negotiate */}
                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="shrink-0">
                    <svg className="size-12 sm:size-14 text-[#D71920]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 6L8 12V24C8 33.5 14.8 42.4 24 45C33.2 42.4 40 33.5 40 24V12L24 6Z" stroke="#D71920" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M17 24.5L22 29.5L31 19.5" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                      WE NEGOTIATE
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug mt-1">
                      We work with providers so you don't have to.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-700/60"></div>

                {/* 2. You Save */}
                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="shrink-0">
                    <svg className="size-12 sm:size-14 text-[#D71920]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 8V30" stroke="#D71920" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M28.5 13C28.5 10.8 26.5 9.5 24 9.5C21.5 9.5 19.5 10.8 19.5 13C19.5 17.5 28.5 15.5 28.5 20C28.5 22.8 26.3 24.5 24 24.5C21.2 24.5 19.5 22.8 19.5 20" stroke="#D71920" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 26L24 38L38 26" stroke="#D71920" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                      YOU SAVE
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug mt-1">
                      Lower monthly bills on services you already use.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-700/60"></div>

                {/* 3. Better Life */}
                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="shrink-0">
                    <svg className="size-12 sm:size-14 text-[#D71920]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="16" r="6" stroke="#D71920" strokeWidth="3" fill="none"/>
                      <path d="M8 38C8 31.4 12.5 27 18 27C23.5 27 28 31.4 28 38" stroke="#D71920" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="32" cy="18" r="5" stroke="#D71920" strokeWidth="3" fill="none"/>
                      <path d="M30 27.5C34.5 28 38 31.8 38 37" stroke="#D71920" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                      BETTER LIFE
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug mt-1">
                      More savings. Less stress.<br />
                      More of what matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#D71920]">
          How it works
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-[#0D1B2A] sm:text-4xl">
          Four simple steps to lower monthly bills
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64707A]">
          We handle the review and prepare the negotiation strategy. You approve every step before anything happens.
        </p>

        <div className="mt-12">
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.step} className="h-full">
                <div className="rounded-2xl border border-[#d0d5dd] bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D71920] font-black text-sm flex items-center justify-center mb-4 border border-red-100">
                      {s.step}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0D1B2A]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64707A]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNav('/how-it-works')}
              className="focus-ring rounded font-bold text-sm text-[#D71920] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>Read the detailed process</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <div className="border-y border-[#d0d5dd] bg-[#F2F4F7]">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#D71920]">
            What you receive
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-[#0D1B2A] sm:text-4xl">
            A comprehensive written review & action plan
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64707A]">
            Every review produces clear documentation showing what you pay, what to question, and how to get rates lowered.
          </p>

          <div className="mt-12">
            <div className="grid gap-6 md:grid-cols-3">
              {deliverables.map((d) => (
                <div 
                  key={d.title}
                  className="rounded-2xl border border-[#d0d5dd] bg-white p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center text-[#D71920] mb-4 border border-red-100">
                      <d.icon className="size-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0D1B2A]">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64707A]">
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Verified Customer Testimonials for Xfinity, AT&T & Spectrum */}
      <TestimonialsSection 
        onNavigate={handleNav} 
        onOpenCallModal={onOpenCallModal} 
      />

      {/* Bills We Review Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 border-t border-[#d0d5dd]">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#D71920]">
          Statements we review
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-[#0D1B2A] sm:text-4xl">
          Choose your provider category
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64707A]">
          Provider names are used solely to describe the type of statement reviewed. Bill Less America is independent and has no affiliation with any carrier.
        </p>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Internet & Cable */}
            <div className="rounded-2xl border border-[#d0d5dd] bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0D1B2A] border-b border-slate-100 pb-3">
                  Internet & Cable
                </h3>
                <ul className="mt-4 space-y-3">
                  {internetProviders.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={`/providers/${p.slug}`}
                        onClick={(e) => handleNav(`/providers/${p.slug}`, e)}
                        className="focus-ring group flex items-center justify-between text-sm font-semibold text-[#0D1B2A] hover:text-[#D71920] py-0.5 transition-colors"
                      >
                        <span>{p.name} bill review</span>
                        <ArrowRight className="size-3.5 text-[#64707A] transition-transform group-hover:translate-x-1 group-hover:text-[#D71920]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wireless */}
            <div className="rounded-2xl border border-[#d0d5dd] bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0D1B2A] border-b border-slate-100 pb-3">
                  Wireless & Mobile
                </h3>
                <ul className="mt-4 space-y-3">
                  {wirelessProviders.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={`/providers/${p.slug}`}
                        onClick={(e) => handleNav(`/providers/${p.slug}`, e)}
                        className="focus-ring group flex items-center justify-between text-sm font-semibold text-[#0D1B2A] hover:text-[#D71920] py-0.5 transition-colors"
                      >
                        <span>{p.name} bill review</span>
                        <ArrowRight className="size-3.5 text-[#64707A] transition-transform group-hover:translate-x-1 group-hover:text-[#D71920]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TV & Satellite */}
            <div className="rounded-2xl border border-[#d0d5dd] bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0D1B2A] border-b border-slate-100 pb-3">
                  TV & Satellite
                </h3>
                <ul className="mt-4 space-y-3">
                  {tvProviders.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={`/providers/${p.slug}`}
                        onClick={(e) => handleNav(`/providers/${p.slug}`, e)}
                        className="focus-ring group flex items-center justify-between text-sm font-semibold text-[#0D1B2A] hover:text-[#D71920] py-0.5 transition-colors"
                      >
                        <span>{p.name} bill review</span>
                        <ArrowRight className="size-3.5 text-[#64707A] transition-transform group-hover:translate-x-1 group-hover:text-[#D71920]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => handleNav('/providers')}
              className="focus-ring rounded font-bold text-sm text-[#D71920] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>Browse the full provider directory</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Free Guides Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 border-t border-[#d0d5dd]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#D71920]">
              Educational Resources
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0D1B2A] sm:text-4xl">
              Free consumer bill guides
            </h2>
          </div>
          <button
            type="button"
            onClick={() => handleNav('/resources')}
            className="text-sm font-bold text-[#D71920] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View all guides</span>
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {resourcesList.slice(0, 4).map((r) => (
              <div 
                key={r.slug}
                className="rounded-2xl border border-[#d0d5dd] bg-white p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D71920]">
                    {r.category} · {r.readTime}
                  </p>
                  <h3 className="mt-2.5 font-display text-xl font-bold text-[#0D1B2A]">
                    <a
                      href={`/resources/${r.slug}`}
                      onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                      className="focus-ring rounded hover:text-[#D71920] transition-colors"
                    >
                      {r.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64707A]">
                    {r.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`/resources/${r.slug}`}
                    onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                    className="text-xs font-bold text-[#D71920] hover:underline flex items-center gap-1"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner with Stronger America message */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 pt-0">
        <div className="bg-[#0D1B2A] relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 shadow-2xl border border-slate-800 text-white">
          <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-20"></div>
          
          <div className="relative max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#D71920] block mb-2">
              Lower Bills. Stronger America.
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
              Proud to help American households save money every month.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Start with an instant savings estimation or upload your statement for a complete line-item negotiation review.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => handleNav('/upload')}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#D71920] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-red-200 hover:bg-[#b5141a] transition-all active:scale-95 cursor-pointer"
              >
                <span>Start Saving Today</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => handleNav('/calculator')}
                className="focus-ring inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              >
                <span>Open Savings Estimator</span>
              </button>

              <button
                type="button"
                onClick={onOpenCallModal}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-5 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <PhoneCall className="size-4 text-[#D71920]" />
                <span>Call Specialist</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs leading-relaxed text-slate-400 flex items-start gap-2">
              <ShieldAlert className="size-4 text-[#D71920] shrink-0 mt-0.5" />
              <p>
                Bill Less America is an independent household advocate. All trademarks and provider names belong to their respective owners and are used solely for descriptive identification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
