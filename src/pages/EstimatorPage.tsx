import React, { useState } from 'react';
import { DollarSign, TrendingDown, ArrowRight, ShieldCheck, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { providersList } from '../data/siteContent';

interface EstimatorPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ navigate, onOpenCallModal }) => {
  const [provider, setProvider] = useState('xfinity');
  const [internetSpeed, setInternetSpeed] = useState('500');
  const [hasCableTv, setHasCableTv] = useState(true);
  const [modemRented, setModemRented] = useState(true);
  const [currentBill, setCurrentBill] = useState(165);

  // Calculation formula
  const equipmentSavings = modemRented ? 15 : 0;
  const tvPromoSavings = hasCableTv ? 28 : 0;
  const basePromoRollback = Math.max(15, Math.round(currentBill * 0.22));

  const totalMonthlySavings = equipmentSavings + tvPromoSavings + basePromoRollback;
  const totalAnnualSavings = totalMonthlySavings * 12;
  const oneTimeFee = Math.round(totalAnnualSavings * 0.25);
  const customerKeeps = totalAnnualSavings - oneTimeFee;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Interactive Savings Calculator
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          Calculate Your Verified Savings & Fee
        </h1>
        <p className="text-base text-[#64707A]">
          See how much you could save on your recurring household bills and our simple 25% success fee breakdown.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Form Inputs */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <label className="block text-xs font-bold text-[#0D1B2A] mb-2 uppercase tracking-wider">
              1. Current Service Provider
            </label>
            <div className="grid grid-cols-3 gap-2">
              {providersList.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setProvider(p.slug)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    provider === p.slug
                      ? 'bg-[#0D1B2A] text-white shadow-sm'
                      : 'bg-slate-50 text-[#0D1B2A] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {p.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#0D1B2A] mb-2">
              <span className="uppercase tracking-wider">2. Current Monthly Total Statement</span>
              <span className="text-base font-black text-[#D71920]">${currentBill} / month</span>
            </div>
            <input
              type="range"
              min="60"
              max="350"
              step="5"
              value={currentBill}
              onChange={(e) => setCurrentBill(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D71920]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>$60/mo</span>
              <span>$200/mo</span>
              <span>$350+/mo</span>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-100">
            <span className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">
              3. Statement Details
            </span>

            <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer text-xs font-bold text-[#0D1B2A]">
              <span>Includes Cable or Satellite TV bundle</span>
              <input
                type="checkbox"
                checked={hasCableTv}
                onChange={(e) => setHasCableTv(e.target.checked)}
                className="size-4 rounded text-[#D71920] accent-[#D71920]"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer text-xs font-bold text-[#0D1B2A]">
              <span>Renting modem, router, or set-top box ($15/mo fee)</span>
              <input
                type="checkbox"
                checked={modemRented}
                onChange={(e) => setModemRented(e.target.checked)}
                className="size-4 rounded text-[#D71920] accent-[#D71920]"
              />
            </label>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-[#0D1B2A] p-6 sm:p-8 text-white shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Estimated Negotiation Impact
            </span>
            <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              25% Success Model
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-400">Estimated Monthly Savings:</span>
              <p className="text-4xl font-black text-emerald-400 font-display mt-1">
                ~${totalMonthlySavings} <span className="text-xs text-slate-400 font-normal">/ month</span>
              </p>
            </div>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between text-slate-300">
                <span>12-Month Verified Savings:</span>
                <span className="font-bold text-white">~${totalAnnualSavings}</span>
              </div>
              <div className="flex justify-between text-amber-300">
                <span>Bill Less America Fee (25% one-time):</span>
                <span className="font-bold">~${oneTimeFee}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold border-t border-slate-800 pt-2 text-sm">
                <span>Net In Your Pocket (75%):</span>
                <span>~${customerKeeps}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/80 p-4 border border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 className="size-4" />
              <span>Zero Risk Guarantee</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              If we negotiate your statement and achieve no qualifying savings, your fee is <strong>$0</strong>. You only pay when you save.
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="/upload"
              onClick={(e) => { e.preventDefault(); navigate('/upload'); }}
              className="block w-full py-4 rounded-2xl bg-[#D71920] text-center text-sm font-extrabold text-white shadow hover:bg-[#b5141a] transition-all cursor-pointer"
            >
              Start Your Negotiation Now
            </a>

            <button
              type="button"
              onClick={onOpenCallModal}
              className="w-full py-3 rounded-2xl border border-slate-700 bg-slate-800/80 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Have Questions? Call (832) 554-6367
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
