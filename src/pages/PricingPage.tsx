import React, { useState } from 'react';
import { 
  Check, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  HelpCircle,
  Clock,
  DollarSign,
  TrendingDown,
  CheckCircle2
} from 'lucide-react';

interface PricingPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigate, onOpenCallModal }) => {
  const [sampleMonthlySaving, setSampleMonthlySaving] = useState(45);
  const sampleAnnualSaving = sampleMonthlySaving * 12;
  const sampleFee = Math.round(sampleAnnualSaving * 0.25);
  const sampleNetCustomer = sampleAnnualSaving - sampleFee;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Simple Success-Based Pricing
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          25% of Verified Savings.
          <span className="block text-[#D71920]">No Savings = No Fee.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
          We believe you should only pay for real results. Bill Less America never charges upfront fees or monthly retainers. You keep 75% of every single dollar we save you.
        </p>
      </div>

      {/* Prominent Disclosure Banner (Do not hide in terms!) */}
      <div className="rounded-3xl border-2 border-[#D71920] bg-red-50/40 p-6 sm:p-8 text-[#0D1B2A] shadow-sm max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              <span>Full Price Transparency Guarantee</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0D1B2A]">
              Our One-Time Service Fee: Exactly 25% of Verified Savings
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Our one-time service fee is 25% of the verified savings we successfully obtain for you. If our negotiation yields no qualifying savings, your fee is <strong>$0</strong>. We do not hide this disclosure in terms or add hidden administrative charges.
            </p>
          </div>

          <a
            href="/upload"
            onClick={(e) => { e.preventDefault(); navigate('/upload'); }}
            className="shrink-0 focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#D71920] px-7 py-3.5 text-sm font-extrabold text-white shadow hover:bg-[#b5141a] transition-colors cursor-pointer"
          >
            <span>GET STARTED</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {/* Side-by-Side Comparison: Results vs No Results */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
        {/* Card 1: When We Win You Savings */}
        <div className="rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6 relative">
          <div className="absolute -top-3.5 right-8 bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
            When We Save You Money
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Verified Savings Obtained
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-[#0D1B2A] font-display">25%</span>
                <span className="text-xs text-[#64707A] font-medium">one-time success fee</span>
              </div>
              <p className="text-xs text-[#64707A] mt-1">
                Calculated purely from verified provider rate reductions and credits.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-[#0D1B2A] border-t border-slate-100 pt-4">
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No upfront charge:</strong> submit your bill for free</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>You keep <strong>75% of every dollar saved</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Official carrier confirmation number provided before billing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Backed by our <strong>60-Day Savings Guarantee</strong></span>
              </li>
            </ul>
          </div>

          <a
            href="/upload"
            onClick={(e) => { e.preventDefault(); navigate('/upload'); }}
            className="w-full py-3.5 rounded-2xl bg-[#0D1B2A] text-center font-bold text-sm text-white hover:bg-[#1B314B] transition-colors cursor-pointer"
          >
            Start Bill Review
          </a>
        </div>

        {/* Card 2: If No Qualifying Savings Can Be Found */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                If No Savings Found
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-[#0D1B2A] font-display">$0</span>
                <span className="text-xs text-[#64707A] font-medium">completely free review</span>
              </div>
              <p className="text-xs text-[#64707A] mt-1">
                If your provider offers no discounts or you already have the lowest rate.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-[#0D1B2A] border-t border-slate-200 pt-4">
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Zero service fee, zero consultation cost</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Complimentary rate benchmark and audit report</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Peace of mind that you are not being overcharged</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Free reminder scheduled for when your plan reaches term end</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center text-xs text-slate-600 font-bold">
            Zero Financial Risk to You
          </div>
        </div>
      </div>

      {/* How Verified Savings is Calculated */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
            The Formula
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D1B2A] mt-1">
            How "Verified Savings" Is Measured
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5568] mt-2 leading-relaxed">
            Verified savings is calculated as the difference between your previous recurring monthly cost and your new negotiated recurring monthly cost, multiplied by the confirmed savings duration (up to 12 months).
          </p>
        </div>

        {/* Interactive Example Slider */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4">
          <div className="flex justify-between items-center text-xs font-bold text-[#0D1B2A]">
            <span>Try an Example Monthly Reduction:</span>
            <span className="text-lg font-black text-[#D71920]">${sampleMonthlySaving}/month saved</span>
          </div>

          <input
            type="range"
            min="20"
            max="100"
            step="5"
            value={sampleMonthlySaving}
            onChange={(e) => setSampleMonthlySaving(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#D71920]"
          />

          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 block">12-Mo Verified Savings:</span>
              <span className="text-base font-black text-[#0D1B2A]">${sampleAnnualSaving}</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 block">Our 25% Fee:</span>
              <span className="text-base font-black text-amber-600">${sampleFee}</span>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-300 text-emerald-900">
              <span className="block font-bold">You Pocket (75%):</span>
              <span className="text-base font-black text-emerald-700">${sampleNetCustomer}</span>
            </div>
          </div>
        </div>

        {/* Success Fee Authorization Explanation */}
        <div className="border-t border-slate-100 pt-6 space-y-3">
          <h3 className="text-base font-bold text-[#0D1B2A] flex items-center gap-2">
            <Lock className="size-4 text-emerald-600" />
            <span>Success Fee Authorization — When Do You Pay?</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
            You are <strong>never charged at intake</strong>. After our team successfully negotiates your bill, we send you your Verified Savings Report featuring the official carrier confirmation number, itemized credits, and dates. Only after you review the confirmed savings do you authorize payment of the one-time 25% fee.
          </p>
        </div>

        {/* Link to see live sample result */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="/negotiation-result"
            onClick={(e) => { e.preventDefault(); navigate('/negotiation-result'); }}
            className="text-xs font-bold text-[#D71920] hover:underline flex items-center gap-1"
          >
            <span>See live sample calculation with Xfinity, AT&T, and Spectrum</span>
            <ArrowRight className="size-3.5" />
          </a>

          <a
            href="/refund-policy"
            onClick={(e) => { e.preventDefault(); navigate('/refund-policy'); }}
            className="text-xs text-slate-500 hover:underline"
          >
            Read our 60-Day Savings Guarantee & Refund Policy
          </a>
        </div>
      </div>
    </div>
  );
};
