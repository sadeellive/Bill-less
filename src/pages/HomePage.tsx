import React, { useState } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  TrendingDown, 
  Receipt, 
  FileCheck2, 
  Sparkles, 
  ChevronRight, 
  DollarSign, 
  CheckCircle2,
  Lock,
  Wifi,
  Tv,
  Smartphone,
  PhoneCall,
  Layers,
  HelpCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { providersList, resourcesList, faqList } from '../data/siteContent';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenCallModal }) => {
  const [billAmount, setBillAmount] = useState(145);
  const [selectedProvider, setSelectedProvider] = useState('xfinity');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estimator calculation
  const estimatedMonthly = Math.round(billAmount * 0.30);
  const annualVerifiedSavings = estimatedMonthly * 12;
  const successFee = Math.round(annualVerifiedSavings * 0.25);
  const customerKeeps = annualVerifiedSavings - successFee;

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-white via-[#FAFBFD] to-[#F2F4F7] pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#d0d5dd]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-7">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-bold text-[#D71920] border border-red-200 shadow-2xs">
                <span className="flex size-2 rounded-full bg-[#D71920]"></span>
                <span>Independent Consumer Advocate • Zero Provider Kickbacks</span>
              </div>

              {/* Exact Requested Hero Typography */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#D71920]">
                  HELPING AMERICA PAY LESS
                </p>
                <h1 className="font-display text-4xl font-black tracking-tight text-[#0D1B2A] sm:text-6xl sm:leading-[1.1]">
                  We negotiate. You save.
                </h1>
              </div>

              {/* Exact Requested Copy */}
              <div className="space-y-3 text-base sm:text-lg leading-relaxed text-[#4A5568] max-w-2xl">
                <p>
                  Bill Less America helps consumers lower eligible recurring household bills by negotiating with service providers on their behalf.
                </p>
                <p>
                  From internet and cable to mobile and other eligible household services, we do the negotiating so you don't have to.
                </p>
                <p className="font-bold text-[#0D1B2A] text-lg flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
                  <span>No qualifying savings. No success fee.</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  id="hero-get-started-btn"
                  href="/upload"
                  onClick={(e) => handleNav('/upload', e)}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D71920] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-red-200 hover:bg-[#b5141a] transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="size-5" />
                </a>

                <a
                  id="hero-call-btn"
                  href="tel:+18325546367"
                  className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-[#0D1B2A] bg-white px-6 py-3.5 text-base font-bold text-[#0D1B2A] hover:bg-slate-50 transition-colors"
                >
                  <Phone className="size-5 text-[#D71920]" />
                  <span>Call: (832) 554-6367</span>
                </a>
              </div>

              {/* Directly Underneath Hero: Prominent Pricing Disclosure (Don't hide in Terms) */}
              <div className="mt-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 p-4 max-w-2xl shadow-xs">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-black text-amber-950">
                      Simple Success-Based Pricing:
                    </p>
                    <p className="text-xs sm:text-sm text-amber-900 leading-snug">
                      Our one-time service fee is <strong>25% of the verified savings</strong> we successfully obtain for you. If we don’t obtain qualifying savings, you pay <strong>$0</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg sm:text-2xl font-black text-[#0D1B2A]">25% Fee</p>
                  <p className="text-[11px] sm:text-xs text-[#64707A] font-medium">Only on verified savings</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-lg sm:text-2xl font-black text-[#0D1B2A]">1–2 Days</p>
                  <p className="text-[11px] sm:text-xs text-[#64707A] font-medium">Average turnaround</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-lg sm:text-2xl font-black text-[#0D1B2A]">100%</p>
                  <p className="text-[11px] sm:text-xs text-[#64707A] font-medium">Independent advocate</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Card: Instant Savings & 25% Fee Calculator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-800 bg-[#0D1B2A] p-6 sm:p-8 shadow-2xl text-white relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Savings & Fee Estimator
                  </span>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    25% Success Model
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Select Your Service Provider:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['xfinity', 'att', 'spectrum'].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setSelectedProvider(p)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-colors cursor-pointer ${
                            selectedProvider === p
                              ? 'bg-[#D71920] text-white shadow'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {p === 'att' ? 'AT&T' : p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-1.5">
                      <span>Current Monthly Bill:</span>
                      <span className="text-base text-white font-black">${billAmount}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="350"
                      step="5"
                      value={billAmount}
                      onChange={(e) => setBillAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D71920]"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>$50/mo</span>
                      <span>$200/mo</span>
                      <span>$350+/mo</span>
                    </div>
                  </div>

                  {/* Calculated Result Breakdown */}
                  <div className="rounded-2xl bg-[#070F18] p-4 border border-slate-800 space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Est. Monthly Savings:</span>
                      <span className="text-lg font-black text-emerald-400 font-display">
                        ~${estimatedMonthly} / mo
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-800/80 pt-2 text-xs">
                      <span className="text-slate-400">12-Mo. Verified Savings:</span>
                      <span className="font-bold text-white">~${annualVerifiedSavings}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Our 25% Success Fee (one-time):</span>
                      <span className="font-bold text-amber-400">${successFee}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-800/80 pt-2 text-xs">
                      <span className="font-bold text-emerald-300">You Keep in Your Pocket:</span>
                      <span className="font-black text-emerald-400 text-sm font-display">
                        ${customerKeeps} (75%)
                      </span>
                    </div>
                  </div>

                  <a
                    href="/upload"
                    onClick={(e) => handleNav('/upload', e)}
                    className="block w-full py-3.5 rounded-xl bg-[#D71920] text-center text-sm font-bold text-white shadow hover:bg-[#b5141a] transition-colors cursor-pointer"
                  >
                    Start Your Bill Negotiation
                  </a>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Lock className="size-3 text-emerald-400" />
                      No upfront charges
                    </span>
                    <span>•</span>
                    <a href="tel:+18325546367" className="text-red-300 underline font-semibold">
                      Call (832) 554-6367
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT BILL LESS AMERICA DOES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
              Full-Service Advocacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1B2A] tracking-tight">
              Your Bills. Our Negotiation. More Money in Your Pocket.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#4A5568]">
              Many service providers offer different rates, promotions, loyalty discounts and credits. Finding them—and negotiating for them—can take time.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#4A5568]">
              <strong className="text-[#0D1B2A]">Bill Less America handles that process for you.</strong> With your authorization, we review your eligible bill, communicate with your provider and seek opportunities to lower your costs.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0D1B2A] mb-4">
              We proactively seek opportunities including:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 space-y-2 hover:border-[#D71920] transition-colors">
                <div className="size-10 rounded-xl bg-red-100 text-[#D71920] flex items-center justify-center font-bold">
                  <TrendingDown className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">Lower monthly rates</h3>
                <p className="text-xs text-[#64707A]">
                  Benchmarking and resetting high base rates back down to competitive regional pricing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 space-y-2 hover:border-[#D71920] transition-colors">
                <div className="size-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">Available promotional pricing</h3>
                <p className="text-xs text-[#64707A]">
                  Securing 12-to-24 month new-customer promotional offers and rate rollbacks.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 space-y-2 hover:border-[#D71920] transition-colors">
                <div className="size-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">Retention & loyalty discounts</h3>
                <p className="text-xs text-[#64707A]">
                  Leveraging your account history with dedicated customer loyalty retention departments.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 space-y-2 hover:border-[#D71920] transition-colors">
                <div className="size-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Receipt className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">Billing corrections & add-ons</h3>
                <p className="text-xs text-[#64707A]">
                  Eliminating phantom router charges, outdated box rentals, and unused insurance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 space-y-2 hover:border-[#D71920] transition-colors">
                <div className="size-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  <Layers className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">Plan optimizations</h3>
                <p className="text-xs text-[#64707A]">
                  Right-sizing speeds and bundle tiers so you never overpay for unused capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (PROMINENT HOMEPAGE SECTION) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
            Transparent 3-Step Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            How Bill Less America Works
          </h2>
          <p className="text-sm sm:text-base text-[#64707A]">
            No risky passwords. No upfront charges. We do the heavy lifting from start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs space-y-4 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0D1B2A] text-white font-display font-black text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A]">Upload Your Bill & Authorize</h3>
              <p className="text-sm leading-relaxed text-[#64707A]">
                Submit your recent statement and sign our digital Letter of Authorization (LOA). This gives us legal authority to communicate with your provider regarding rates on your behalf.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <Lock className="size-4 text-emerald-600" />
              <span>We never ask for web passwords</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl border-2 border-[#D71920] bg-white p-8 shadow-lg space-y-4 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#D71920] text-white font-display font-black text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A]">We Review & Negotiate</h3>
              <p className="text-sm leading-relaxed text-[#64707A]">
                Our seasoned negotiation team contacts your provider directly. We navigate retention departments, challenge expiring promos, remove erroneous add-ons, and secure maximum discounts.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#D71920]">
              <Clock className="size-4" />
              <span>Turnaround: 24 to 48 hours</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs space-y-4 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0D1B2A] text-white font-display font-black text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A]">Verified Savings & Fee</h3>
              <p className="text-sm leading-relaxed text-[#64707A]">
                We send you the verified savings report with official confirmation from your provider. Our one-time fee is 25% of verified savings. If we cannot save you money, your fee is $0.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span>Zero savings = Zero fee guarantee</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/upload"
            onClick={(e) => handleNav('/upload', e)}
            className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#D71920] px-8 py-4 text-base font-bold text-white shadow-md hover:bg-[#b5141a] transition-colors cursor-pointer"
          >
            <span>Start Your Review in 2 Minutes</span>
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>

      {/* 4. BILLS WE NEGOTIATE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
            Coverage Across America
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Bills We Negotiate
          </h2>
          <p className="text-sm sm:text-base text-[#64707A]">
            We negotiate recurring residential bills across every major US telecommunications and utility category.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Internet */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="size-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
              <Wifi className="size-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A]">Internet & Fiber</h3>
            <p className="text-xs text-[#64707A] leading-relaxed">
              High-speed broadband, cable modems, and fiber tiers. Eliminating gateway rental fees and expired promotions.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#D71920]">
              Avg. Savings: $25–$60/mo
            </span>
          </div>

          {/* Mobile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="size-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              <Smartphone className="size-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A]">Mobile / Wireless</h3>
            <p className="text-xs text-[#64707A] leading-relaxed">
              Postpaid cell phone lines, multi-line family plans, 5G data packages, and ghost device insurance fees.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#D71920]">
              Avg. Savings: $30–$80/mo
            </span>
          </div>

          {/* Cable / TV */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="size-12 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold">
              <Tv className="size-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A]">Cable & Satellite TV</h3>
            <p className="text-xs text-[#64707A] leading-relaxed">
              Traditional cable and satellite packages. Eliminating broadcast fees, regional sports fees, and box rentals.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#D71920]">
              Avg. Savings: $35–$75/mo
            </span>
          </div>

          {/* Home Phone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="size-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <PhoneCall className="size-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A]">Home Phone / Landline</h3>
            <p className="text-xs text-[#64707A] leading-relaxed">
              Digital voice, VoIP, and legacy copper landline service charges bundled into utility packages.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#D71920]">
              Avg. Savings: $15–$35/mo
            </span>
          </div>

          {/* Bundled */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="size-12 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center font-bold">
              <Layers className="size-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A]">Bundled Packages</h3>
            <p className="text-xs text-[#64707A] leading-relaxed">
              Double-play and triple-play combinations. Unlocking multi-service discounts and removing unneeded items.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#D71920]">
              Avg. Savings: $45–$90/mo
            </span>
          </div>
        </div>

        {/* Major Providers Badges */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64707A]">
              Major Providers Negotiated Daily:
            </p>
            <p className="text-sm font-bold text-[#0D1B2A]">
              Xfinity / Comcast • AT&T • Spectrum / Charter • Verizon Wireless & Fios • Cox • Frontier • CenturyLink • Optimum
            </p>
          </div>
          <a
            href="/negotiation-result"
            onClick={(e) => handleNav('/negotiation-result', e)}
            className="shrink-0 text-xs font-bold text-[#D71920] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>See Sample Negotiation Result</span>
            <ChevronRight className="size-4" />
          </a>
        </div>
      </section>

      {/* 5. VERIFIED CUSTOMER TESTIMONIALS (Xfinity, AT&T, Spectrum) */}
      <TestimonialsSection 
        onNavigate={handleNav} 
        onOpenCallModal={onOpenCallModal} 
      />

      {/* 6. SAMPLE NEGOTIATION RESULT PREVIEW CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl bg-linear-to-r from-[#0D1B2A] to-[#1B314B] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Live Transparency
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Curious what a verified negotiation result looks like?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our interactive demonstration showing itemized before-and-after statements, carrier confirmation codes, verified savings math, and the 25% success fee settlement.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="/negotiation-result"
              onClick={(e) => handleNav('/negotiation-result', e)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D71920] px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-[#b5141a] transition-colors cursor-pointer"
            >
              <span>View Sample Negotiation Result</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="/pricing"
              onClick={(e) => handleNav('/pricing', e)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-600 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <span>Pricing Details</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
            Got Questions?
          </p>
          <h2 className="text-3xl font-extrabold text-[#0D1B2A]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#64707A]">
            Everything you need to know about our success fee, authorization process, and security.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#0D1B2A] text-base cursor-pointer hover:text-[#D71920] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-xl transition-transform ${isOpen ? 'rotate-45 text-[#D71920]' : 'text-slate-400'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4A5568] leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-[#0D1B2A] font-bold">Have a specific bill question not listed here?</p>
          <p className="text-xs text-[#64707A] mt-1">Our Houston team is standing by to assist you.</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a 
              href="tel:+18325546367" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:underline"
            >
              <Phone className="size-4" />
              <span>Call (832) 554-6367</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href="/contact" 
              onClick={(e) => handleNav('/contact', e)}
              className="text-xs font-bold text-[#0D1B2A] hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
