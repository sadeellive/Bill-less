import React from 'react';
import { 
  FileText, 
  Search, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Clock,
  Printer,
  Sparkles,
  DollarSign
} from 'lucide-react';

interface HowItWorksPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ navigate, onOpenCallModal }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Transparent & Results-Driven
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          How Bill Less America Works
        </h1>
        <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
          We negotiate directly with your telecom and service providers to lower your monthly bills. Simple success-based pricing: our fee is <strong>25% of verified savings</strong>. If we don’t save you money, your fee is $0.
        </p>
      </div>

      {/* Detailed Steps */}
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="size-14 rounded-2xl bg-[#0D1B2A] text-white flex items-center justify-center font-black text-2xl shrink-0 font-display">
            1
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-[#0D1B2A]">
                Step 1: Upload Your Bill & Sign Authorization
              </h2>
              <span className="text-[11px] bg-slate-100 font-bold px-2.5 py-0.5 rounded-full text-slate-700">
                Takes 2 Minutes
              </span>
            </div>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              Upload a recent statement (PDF, PNG, JPG) through our encrypted intake portal and complete our digital <strong>Letter of Authorization (LOA)</strong>. The LOA grants our negotiation team limited legal authority to inquire into promotional rates and discounts on your behalf.
            </p>
            <div className="rounded-xl bg-amber-50/70 border border-amber-200 p-3 text-xs text-amber-900 flex items-center gap-2">
              <Lock className="size-4 text-amber-700 shrink-0" />
              <span><strong>Account Security:</strong> We NEVER ask for, store, or accept your web portal password. We only use your account number and carrier telephone PIN.</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-3xl border-2 border-[#D71920] bg-white p-8 shadow-md flex flex-col md:flex-row gap-6 items-start relative">
          <div className="size-14 rounded-2xl bg-[#D71920] text-white flex items-center justify-center font-black text-2xl shrink-0 font-display">
            2
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-[#0D1B2A]">
                Step 2: Line-Item Audit & Carrier Negotiation
              </h2>
              <span className="text-[11px] bg-red-50 text-[#D71920] font-bold px-2.5 py-0.5 rounded-full border border-red-200">
                24–48 Hour Turnaround
              </span>
            </div>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              Our seasoned billing specialists analyze your bill line by line to uncover expired promotional rates, unnecessary equipment rental fees, and regional competitor benchmarks. We then contact your provider’s loyalty and customer retention desks directly to negotiate rate rollbacks and discounts.
            </p>
            <div className="grid sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0D1B2A] block">Promotions</span>
                <span className="text-slate-500">Reinstating rolled-off rates</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0D1B2A] block">Equipment Fees</span>
                <span className="text-slate-500">Waiving modem/box charges</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0D1B2A] block">Loyalty Credits</span>
                <span className="text-slate-500">Special retention tiers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="size-14 rounded-2xl bg-[#0D1B2A] text-white flex items-center justify-center font-black text-2xl shrink-0 font-display">
            3
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-[#0D1B2A]">
                Step 3: Verified Savings Report & Simple Fee Settlement
              </h2>
              <span className="text-[11px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                Zero Savings = Zero Fee
              </span>
            </div>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              We send you a verified report with official carrier confirmation codes showing your new lower rate and confirmed savings duration. You authorize our <strong>one-time 25% success fee</strong> only after reviewing your verified savings. You keep <strong>75% of every dollar saved</strong>.
            </p>
            <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3 text-xs text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
              <span><strong>60-Day Guarantee:</strong> If the carrier does not honor the rate on your next statement, we resolve it or issue an immediate 100% refund.</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-[#0D1B2A] text-white p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to pay less on your bills?</h2>
          <p className="text-sm text-slate-300">
            Submit your bill in 2 minutes. No upfront cost, zero financial risk.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/upload"
            onClick={(e) => { e.preventDefault(); navigate('/upload'); }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#D71920] font-extrabold text-sm text-white shadow-lg hover:bg-[#b5141a] transition-all cursor-pointer"
          >
            Start Bill Review (25% Model)
          </a>
          <button
            type="button"
            onClick={onOpenCallModal}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-slate-600 bg-slate-800/80 font-bold text-sm text-slate-200 hover:bg-slate-700 cursor-pointer"
          >
            Call (832) 554-6367
          </button>
        </div>
      </div>
    </div>
  );
};
