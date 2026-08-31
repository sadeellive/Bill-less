import React, { useState, useId } from 'react';
import { 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  ShieldAlert, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { providersList } from '../data/siteContent';

interface EstimatorPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ navigate, onOpenCallModal }) => {
  const [selectedProvider, setSelectedProvider] = useState('xfinity');
  const [monthlyBill, setMonthlyBill] = useState(165);
  const [hasEquipmentRental, setHasEquipmentRental] = useState(true);
  const [hasExpiredPromo, setHasExpiredPromo] = useState(true);
  const [hasUnusedAddons, setHasUnusedAddons] = useState(false);
  const [hasDeviceProtection, setHasDeviceProtection] = useState(false);
  const [extraBoxesCount, setExtraBoxesCount] = useState(1);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculation of questionable charges
  let potentialMonthlyQuestions = 0;
  const flaggedDetails: string[] = [];

  if (hasEquipmentRental) {
    potentialMonthlyQuestions += 15;
    flaggedDetails.push('Equipment lease charge ($15/mo): Retail customer-owned equipment can eliminate this.');
  }
  if (hasExpiredPromo) {
    potentialMonthlyQuestions += 30;
    flaggedDetails.push('Expired contract incentive ($30/mo): Account is likely on full everyday rate card.');
  }
  if (hasUnusedAddons) {
    potentialMonthlyQuestions += 18;
    flaggedDetails.push('Optional add-on packages ($18/mo): Premium packs or speed boosts beyond household needs.');
  }
  if (hasDeviceProtection) {
    potentialMonthlyQuestions += 14;
    flaggedDetails.push('Carrier insurance / tech care ($14/mo): Often continues billing after hardware is paid off.');
  }
  if (extraBoxesCount > 0) {
    potentialMonthlyQuestions += extraBoxesCount * 7.5;
    flaggedDetails.push(`${extraBoxesCount} extra TV receiver box (${extraBoxesCount * 7.5}/mo): Streaming apps can replace extra hardware.`);
  }

  // Cap questionable items to 65% of the total bill
  potentialMonthlyQuestions = Math.min(potentialMonthlyQuestions, monthlyBill * 0.65);
  const potentialAnnual = potentialMonthlyQuestions * 12;

  const currentProviderObj = providersList.find(p => p.slug === selectedProvider) || providersList[0];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Planning Tool
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Independent Bill Review Estimator
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Enter your current numbers to see common line items worth investigating on your statement. This is an objective planning aid, not a guaranteed prediction.
        </p>
      </section>

      {/* Main Calculator Interactive Card */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Left Inputs Column */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="size-5 text-teal" />
              <span>Statement Details</span>
            </h2>

            {/* Provider Selector */}
            <div>
              <label htmlFor="provider-select" className="block text-sm font-semibold text-foreground mb-1.5">
                Service Provider
              </label>
              <select
                id="provider-select"
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-ring font-medium"
              >
                {providersList.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} ({p.category.toUpperCase()})
                  </option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground mt-1">
                {currentProviderObj.summary}
              </p>
            </div>

            {/* Monthly Bill Amount Input & Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="monthly-bill-input" className="block text-sm font-semibold text-foreground">
                  Current Monthly Total
                </label>
                <span className="font-display font-extrabold text-lg text-primary">
                  ${monthlyBill} / mo
                </span>
              </div>
              <input
                id="monthly-bill-slider"
                type="range"
                min="40"
                max="450"
                step="5"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-teal cursor-pointer h-2 bg-muted rounded-lg"
              />
              <div className="flex justify-between text-[0.7rem] text-muted-foreground mt-1">
                <span>$40</span>
                <span>$200</span>
                <span>$450+</span>
              </div>
            </div>

            {/* Checkboxes for common charges */}
            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Check any line items that appear on your statement:
              </p>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-border hover:bg-muted/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasEquipmentRental}
                  onChange={(e) => setHasEquipmentRental(e.target.checked)}
                  className="size-4 rounded text-teal focus:ring-teal mt-0.5"
                />
                <div className="text-xs">
                  <span className="font-bold text-foreground block">Modem, Router or Gateway Lease ($15/mo)</span>
                  <span className="text-muted-foreground">Paying monthly rental rather than using owned hardware.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-border hover:bg-muted/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasExpiredPromo}
                  onChange={(e) => setHasExpiredPromo(e.target.checked)}
                  className="size-4 rounded text-teal focus:ring-teal mt-0.5"
                />
                <div className="text-xs">
                  <span className="font-bold text-foreground block">Service older than 12–24 months ($25–$40/mo)</span>
                  <span className="text-muted-foreground">Introductory promotional credits have likely expired.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-border hover:bg-muted/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasUnusedAddons}
                  onChange={(e) => setHasUnusedAddons(e.target.checked)}
                  className="size-4 rounded text-teal focus:ring-teal mt-0.5"
                />
                <div className="text-xs">
                  <span className="font-bold text-foreground block">Optional Add-ons / Speed Boosts ($15–$20/mo)</span>
                  <span className="text-muted-foreground">Unlimited data caps, landline packs, or streaming subscriptions.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-border hover:bg-muted/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasDeviceProtection}
                  onChange={(e) => setHasDeviceProtection(e.target.checked)}
                  className="size-4 rounded text-teal focus:ring-teal mt-0.5"
                />
                <div className="text-xs">
                  <span className="font-bold text-foreground block">Device Protection / Complete Care ($14/mo)</span>
                  <span className="text-muted-foreground">Insurance programs that may no longer be necessary.</span>
                </div>
              </label>

              {/* Extra TV Box counter */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-border">
                <div className="text-xs">
                  <span className="font-bold text-foreground block">Secondary TV Receiver Boxes</span>
                  <span className="text-muted-foreground">$7–$10/mo per extra television room.</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setExtraBoxesCount(Math.max(0, extraBoxesCount - 1))}
                    className="size-7 rounded-lg border border-border bg-background hover:bg-muted font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{extraBoxesCount}</span>
                  <button
                    type="button"
                    onClick={() => setExtraBoxesCount(extraBoxesCount + 1)}
                    className="size-7 rounded-lg border border-border bg-background hover:bg-muted font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Results Column */}
          <div className="space-y-6">
            <div className="surface-navy rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-navy-foreground/10">
              <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-40"></div>

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-wider text-teal">
                  Estimated Review Opportunities
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-navy-foreground">
                    ${Math.round(potentialMonthlyQuestions)}
                  </span>
                  <span className="text-sm font-semibold text-navy-foreground/75">
                    / mo in questionable items
                  </span>
                </div>
                <p className="text-xs text-teal font-medium mt-1">
                  Up to ~${Math.round(potentialAnnual)} per year in potential recurring questions
                </p>

                {/* Flagged Item Details */}
                <div className="mt-6 pt-6 border-t border-navy-foreground/15 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-foreground/90">
                    Specific Items Identified ({flaggedDetails.length}):
                  </p>
                  {flaggedDetails.length > 0 ? (
                    <ul className="space-y-2">
                      {flaggedDetails.map((f, idx) => (
                        <li key={idx} className="text-xs text-navy-foreground/80 flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-teal shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-navy-foreground/60 italic">
                      Check items on the left that apply to your current bill to see recommendations.
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={() => handleNav('/upload')}
                    className="w-full py-3.5 px-4 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90 transition-transform active:scale-98"
                  >
                    Upload this bill for official review ($29)
                  </button>

                  <button
                    type="button"
                    onClick={onOpenCallModal}
                    className="w-full py-3 px-4 rounded-xl border border-navy-foreground/30 text-navy-foreground font-semibold text-xs hover:bg-navy-foreground/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="size-3.5 text-teal" />
                    <span>Call a specialist to discuss these items</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer Box */}
            <div className="rounded-2xl border border-border bg-card p-5 text-xs text-muted-foreground flex items-start gap-3">
              <ShieldAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Educational note:</strong> This estimator does not connect to any provider's backend database. Final outcomes are determined entirely by your service provider's rate cards and policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
