import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Printer, 
  Calendar, 
  Building2, 
  CreditCard, 
  Lock, 
  Sparkles,
  Phone,
  AlertCircle,
  HelpCircle,
  Receipt
} from 'lucide-react';

interface NegotiationResultPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

interface CaseScenario {
  id: string;
  providerName: string;
  planName: string;
  previousMonthly: number;
  newMonthly: number;
  savingsDurationMonths: number;
  carrierConfirmationCode: string;
  negotiationDate: string;
  agentId: string;
  discountsApplied: { title: string; amount: string; detail: string }[];
}

const scenarios: CaseScenario[] = [
  {
    id: 'xfinity',
    providerName: 'Xfinity / Comcast',
    planName: 'Gigabit Internet (1000 Mbps) + Popular TV 125+ Channels',
    previousMonthly: 154.50,
    newMonthly: 98.50,
    savingsDurationMonths: 12,
    carrierConfirmationCode: 'XFN-839201-RET',
    negotiationDate: 'February 24, 2026',
    agentId: 'REP-7741 (Retention Dept)',
    discountsApplied: [
      { title: '12-Month Loyalty Retention Promotion', amount: '-$41.00 / mo', detail: 'Renewed promotional pricing on Gigabit speed tier.' },
      { title: 'xFi Gateway Equipment Credit Waiver', amount: '-$15.00 / mo', detail: 'Waived recurring monthly router rental fee.' },
      { title: 'Paperless & ACH AutoPay Optimization', amount: '-$0.00 / mo', detail: 'Retained tier discount with updated billing preference.' }
    ]
  },
  {
    id: 'att',
    providerName: 'AT&T',
    planName: 'AT&T Fiber 500 + Unlimited Extra Wireless (3 Lines)',
    previousMonthly: 185.00,
    newMonthly: 125.00,
    savingsDurationMonths: 12,
    carrierConfirmationCode: 'ATT-904218-LOYALTY',
    negotiationDate: 'February 22, 2026',
    agentId: 'MGR-1049 (Account Services)',
    discountsApplied: [
      { title: 'Wireless + Fiber Cross-Product 20% Discount', amount: '-$35.00 / mo', detail: 'Linked standalone accounts to trigger enterprise bundle credit.' },
      { title: 'Cancellation of Inactive Device Insurance', amount: '-$17.00 / mo', detail: 'Removed coverage for paid-off hardware.' },
      { title: 'Debit AutoPay Verification', amount: '-$8.00 / mo', detail: 'Maximized bank payment discount.' }
    ]
  },
  {
    id: 'spectrum',
    providerName: 'Spectrum / Charter',
    planName: 'Spectrum Internet Ultra (500 Mbps) + TV Select Plus',
    previousMonthly: 142.00,
    newMonthly: 89.00,
    savingsDurationMonths: 12,
    carrierConfirmationCode: 'SPEC-554192-PROMO',
    negotiationDate: 'February 20, 2026',
    agentId: 'SPEC-4812 (Customer Solutions)',
    discountsApplied: [
      { title: 'Spectrum Retention Renewal Rate', amount: '-$36.00 / mo', detail: 'Reverted post-promotional rate increase back to tier discount.' },
      { title: 'Removal of Outdated Set-Top Box Charge', amount: '-$10.99 / mo', detail: 'Transitioned second TV to free Spectrum TV Smart TV App.' },
      { title: 'WiFi Fee Waiver', amount: '-$6.01 / mo', detail: 'Applied loyalty retention modem-router credit.' }
    ]
  }
];

export const NegotiationResultPage: React.FC<NegotiationResultPageProps> = ({ navigate }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('xfinity');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const scenario = scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  const monthlySavings = scenario.previousMonthly - scenario.newMonthly;
  const verifiedAnnualSavings = monthlySavings * scenario.savingsDurationMonths;
  const oneTimeFee = Math.round(verifiedAnnualSavings * 0.25 * 100) / 100;
  const customerRetains = verifiedAnnualSavings - oneTimeFee;

  const handleAuthorizeFee = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
          <ShieldCheck className="size-4 text-emerald-600" />
          <span>Carrier-Confirmed Negotiation Result</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          Verified Savings & Fee Breakdown
        </h1>
        <p className="text-base text-[#64707A] leading-relaxed">
          See exactly how our success fee is calculated from confirmed provider discounts. No qualifying savings = No fee.
        </p>

        {/* Interactive Scenario Switcher */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2">Sample Carrier Results:</span>
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => { setSelectedScenarioId(s.id); setPaymentSuccess(false); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedScenarioId === s.id
                  ? 'bg-[#0D1B2A] text-white shadow-sm'
                  : 'bg-slate-100 text-[#0D1B2A] hover:bg-slate-200'
              }`}
            >
              {s.providerName.split(' ')[0]} Result
            </button>
          ))}
        </div>
      </div>

      {/* Main Result Card */}
      <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
        {/* Top Carrier Confirmation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
              Negotiation Summary
            </span>
            <h2 className="text-2xl font-black text-[#0D1B2A] mt-0.5">
              {scenario.providerName}
            </h2>
            <p className="text-xs text-[#64707A] mt-1">{scenario.planName}</p>
          </div>

          <div className="text-left sm:text-right text-xs space-y-1 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
            <p><span className="text-slate-400">Carrier Confirmation Code:</span> <strong className="font-mono text-[#0D1B2A]">{scenario.carrierConfirmationCode}</strong></p>
            <p><span className="text-slate-400">Date Negotiated:</span> <strong className="text-[#0D1B2A]">{scenario.negotiationDate}</strong></p>
            <p><span className="text-slate-400">Authorized Rep:</span> <strong className="text-[#0D1B2A]">{scenario.agentId}</strong></p>
          </div>
        </div>

        {/* Big Before vs After Comparison Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Previous Monthly Bill */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Previous Monthly Cost
            </span>
            <p className="text-3xl font-black text-slate-400 line-through">
              ${scenario.previousMonthly.toFixed(2)}
            </p>
            <p className="text-[11px] text-slate-400">Before rate negotiation</p>
          </div>

          {/* Negotiated Monthly Bill */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/30 p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              New Negotiated Cost
            </span>
            <p className="text-3xl font-black text-emerald-700 font-display">
              ${scenario.newMonthly.toFixed(2)}
            </p>
            <p className="text-[11px] text-emerald-800 font-bold">
              Saves ${monthlySavings.toFixed(2)} every month
            </p>
          </div>

          {/* Confirmed Savings Duration */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Confirmed Savings Period
            </span>
            <p className="text-3xl font-black text-[#0D1B2A] font-display">
              {scenario.savingsDurationMonths} Months
            </p>
            <p className="text-[11px] text-slate-500">Guaranteed rate lock period</p>
          </div>
        </div>

        {/* Itemized Applied Discounts */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#0D1B2A] uppercase tracking-wider">
            Itemized Credits & Adjustments Obtained
          </h3>
          <div className="space-y-2">
            {scenario.discountsApplied.map((d, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD] text-xs"
              >
                <div>
                  <span className="font-bold text-[#0D1B2A]">{d.title}</span>
                  <p className="text-slate-500 text-[11px]">{d.detail}</p>
                </div>
                <span className="font-black text-emerald-700 text-sm shrink-0">
                  {d.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Exact Fee Math Calculation Breakdown Card */}
        <div className="rounded-2xl bg-[#0D1B2A] text-white p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Transparent Calculation
            </span>
            <span className="text-xs text-slate-400">
              Formula: (Old Rate - New Rate) × Duration
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-slate-300">
              <span>Total Verified Savings ({scenario.savingsDurationMonths} months × ${monthlySavings.toFixed(2)}/mo):</span>
              <span className="font-bold text-white text-base">${verifiedAnnualSavings.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center text-amber-300 border-t border-slate-800 pt-3">
              <span className="font-bold flex items-center gap-1.5">
                <Sparkles className="size-4" />
                <span>Bill Less America One-Time Success Fee (25%):</span>
              </span>
              <span className="font-black text-xl font-display text-amber-400">
                ${oneTimeFee.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center text-emerald-400 border-t border-slate-800 pt-3">
              <span className="font-black text-base">Net Cash Saved in Your Pocket (75%):</span>
              <span className="font-black text-2xl font-display text-emerald-400">
                ${customerRetains.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* SUCCESS FEE AUTHORIZATION / SETTLEMENT STEP (Separate from initial submission) */}
        {!paymentSuccess ? (
          <div className="rounded-2xl border-2 border-slate-300 bg-[#FAFBFD] p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <Lock className="size-5 text-[#D71920]" />
                <h3 className="text-lg font-bold text-[#0D1B2A]">
                  Step: Authorize & Settle Success Fee
                </h3>
              </div>
              <p className="text-xs text-[#64707A] mt-1">
                Your savings are verified with {scenario.providerName}. Authorize the one-time 25% fee (${oneTimeFee.toFixed(2)}) using your preferred payment method.
              </p>
            </div>

            <form onSubmit={handleAuthorizeFee} className="space-y-4">
              <div className="flex gap-4 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`pb-1 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'text-[#D71920] border-b-2 border-[#D71920]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Credit / Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`pb-1 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'text-[#D71920] border-b-2 border-[#D71920]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  ACH Bank Transfer
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-[#0D1B2A] mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      defaultValue="Jane Doe"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-[#0D1B2A] mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="•••• •••• •••• 4242"
                      defaultValue="•••• •••• •••• 4242"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0D1B2A] mb-1">Expires (MM/YY)</label>
                    <input
                      type="text"
                      required
                      placeholder="12/28"
                      defaultValue="12/28"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0D1B2A] mb-1">CVC / CVV</label>
                    <input
                      type="text"
                      required
                      placeholder="•••"
                      defaultValue="729"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring font-mono"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-[#0D1B2A] mb-1">Routing Number</label>
                    <input
                      type="text"
                      required
                      placeholder="111000025"
                      defaultValue="111000025"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0D1B2A] mb-1">Account Number</label>
                    <input
                      type="text"
                      required
                      placeholder="••••••••4921"
                      defaultValue="••••••••4921"
                      className="w-full rounded-xl border border-slate-300 p-2.5 bg-white focus-ring font-mono"
                    />
                  </div>
                </div>
              )}

              {/* 60-Day Guarantee Notice */}
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
                <ShieldCheck className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Backed by our 60-Day Savings Guarantee:</strong> If {scenario.providerName} fails to honor this rate or rolls it off prematurely, contact us for an immediate 100% refund of your success fee.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#D71920] font-extrabold text-white text-base shadow-lg shadow-red-200 hover:bg-[#b5141a] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="size-4" />
                <span>Authorize & Pay One-Time Success Fee (${oneTimeFee.toFixed(2)})</span>
              </button>
            </form>
          </div>
        ) : (
          /* Payment Confirmed State */
          <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 p-6 sm:p-8 text-center space-y-4">
            <div className="size-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-2xl font-black text-[#0D1B2A]">
              Success Fee Authorized & Settled!
            </h3>
            <p className="text-xs text-[#64707A] max-w-md mx-auto">
              Thank you for trusting Bill Less America. Your receipt #{scenario.carrierConfirmationCode}-INV has been generated. Enjoy your <strong>${monthlySavings.toFixed(2)}/month in recurring savings</strong>!
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-4 py-2 text-xs font-bold text-[#0D1B2A] hover:bg-slate-50 cursor-pointer"
              >
                <Printer className="size-4" />
                <span>Print Invoice Receipt</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/upload')}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#0D1B2A] px-5 py-2 text-xs font-bold text-white hover:bg-[#1B314B] cursor-pointer"
              >
                <span>Submit Another Bill</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Disclaimers & Help */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64707A]">
        <div>
          <p className="font-bold text-[#0D1B2A]">Need assistance with your negotiated statement?</p>
          <p className="mt-0.5">Reach our dedicated Houston client support desk at (832) 554-6367 or support@billlessamerica.com.</p>
        </div>
        <a
          href="/refund-policy"
          onClick={(e) => { e.preventDefault(); navigate('/refund-policy'); }}
          className="font-bold text-[#D71920] hover:underline shrink-0"
        >
          View Refund & Dispute Policy →
        </a>
      </div>
    </div>
  );
};
