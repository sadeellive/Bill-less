import React from 'react';
import { ShieldCheck, Users, Target, HeartHandshake, Phone } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Our Mission
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          Standing Up for American Consumers
        </h1>
        <p className="text-base text-[#64707A] leading-relaxed">
          Bill Less America was founded on a simple principle: telecom companies shouldn't profit by confusing their customers with stealth price hikes and junk equipment fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
          <div className="size-12 rounded-2xl bg-red-50 text-[#D71920] flex items-center justify-center">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-lg font-bold text-[#0D1B2A]">100% Independent</h2>
          <p className="text-xs sm:text-sm text-[#64707A] leading-relaxed">
            We do not accept commission kickbacks or referral fees from Comcast, AT&T, Spectrum, or any other provider. Our loyalty is 100% with the household.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
          <div className="size-12 rounded-2xl bg-slate-100 text-[#0D1B2A] flex items-center justify-center">
            <Target className="size-6" />
          </div>
          <h2 className="text-lg font-bold text-[#0D1B2A]">Forensic Analysis</h2>
          <p className="text-xs sm:text-sm text-[#64707A] leading-relaxed">
            We analyze thousands of monthly billing statements, tracking internal carrier retention promotional codes and regional market benchmarks.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
          <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <HeartHandshake className="size-6" />
          </div>
          <h2 className="text-lg font-bold text-[#0D1B2A]">Fair Flat Fees</h2>
          <p className="text-xs sm:text-sm text-[#64707A] leading-relaxed">
            We believe in honest flat pricing. We will never demand 40%–50% of your ongoing monthly savings. You keep every single dollar negotiated.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-[#0D1B2A] p-8 text-center text-white space-y-4">
        <h2 className="text-2xl font-bold">Have questions or want to speak with our team?</h2>
        <p className="text-sm text-slate-300">
          Our headquarters is in Houston, Texas. Call our consumer desk at (832) 554-6367.
        </p>
        <a
          href="tel:+18325546367"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D71920] font-bold text-sm text-white hover:bg-[#b5141a]"
        >
          <Phone className="size-4" />
          <span>Call (832) 554-6367</span>
        </a>
      </div>
    </div>
  );
};
