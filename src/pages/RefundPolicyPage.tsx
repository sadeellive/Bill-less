import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, CheckCircle2, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface RefundPolicyPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ navigate, onOpenCallModal }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-10 text-[#0D1B2A] leading-relaxed">
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
          <ShieldCheck className="size-4 text-emerald-600" />
          <span>Consumer Protection Guarantee</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-[#0D1B2A]">
          Refund & Billing Dispute Policy
        </h1>
        <p className="text-xs text-[#64707A]">
          Effective Date: February 2026 • Headquarters: 2827 Dunvale Rd, Houston, TX 77063
        </p>
      </div>

      {/* Core Principle: Success-Based Assurance */}
      <div className="rounded-3xl border-2 border-emerald-500/80 bg-emerald-50/40 p-6 sm:p-8 space-y-3">
        <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
          <CheckCircle2 className="size-5 text-emerald-600" />
          <span>Our Foundation: No Qualifying Savings, No Fee</span>
        </h2>
        <p className="text-sm text-emerald-900 leading-relaxed">
          At Bill Less America, we only succeed when you save. You are never billed an upfront fee. Our one-time service fee is strictly <strong>25% of the verified savings</strong> we obtain for you. If we cannot negotiate a qualifying discount or rate reduction on your statement, your fee is <strong>$0</strong>.
        </p>
      </div>

      {/* 60-Day Guarantee */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <span>1. The 60-Day Verified Savings Guarantee</span>
        </h2>
        <p className="text-sm text-[#4A5568]">
          Occasionally, telecommunications providers experience billing synchronization glitches where a promised retention promotion fails to reflect on the immediate next billing cycle, or an unauthorized rate adjustment occurs.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 text-sm text-[#4A5568]">
          <p className="font-bold text-[#0D1B2A]">Under our 60-Day Guarantee:</p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>
              <strong>Immediate Re-Negotiation:</strong> If your carrier does not display the agreed-upon rate or credit on your subsequent billing statement, simply send us a copy. Our negotiation team will re-contact the provider’s escalation desk to correct the discrepancy at no additional cost.
            </li>
            <li>
              <strong>100% Full Refund of Success Fee:</strong> If the service provider refuses to honor the confirmed rate, terminates the promotion prematurely without cause, or charges higher recurring costs than negotiated, Bill Less America will promptly issue a <strong>100% full refund</strong> of our success fee back to your original payment method.
            </li>
          </ul>
        </div>
      </div>

      {/* What Constitutes a Valid Dispute */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#0D1B2A]">
          2. How to Initiate a Billing Dispute or Refund Request
        </h2>
        <p className="text-sm text-[#4A5568]">
          To initiate a review or refund request, please provide:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
            <span className="font-bold text-[#0D1B2A]">1. Identification</span>
            <p className="text-slate-500">Your full name, phone number, and Bill Less America Reference ID (e.g. BLA-XXXXX).</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
            <span className="font-bold text-[#0D1B2A]">2. Subsequent Bill</span>
            <p className="text-slate-500">A PDF or clear screenshot of the first statement issued following the negotiation date.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
            <span className="font-bold text-[#0D1B2A]">3. Discrepancy Note</span>
            <p className="text-slate-500">A brief description of which discount, line-item, or rate was not applied as confirmed.</p>
          </div>
        </div>
      </div>

      {/* Turnaround Time for Refunds */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-[#0D1B2A]">
          3. Refund Processing Timelines
        </h2>
        <p className="text-sm text-[#4A5568]">
          Once submitted, our auditing department investigates the carrier discrepancy within <strong>2 business days</strong>. If a refund is authorized, it is initiated immediately. Depending on your financial institution, funds appear on your bank or card statement within <strong>3 to 5 business days</strong>.
        </p>
      </div>

      {/* Exclusions */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-[#0D1B2A]">
          4. Conditions & Exclusions
        </h2>
        <p className="text-sm text-[#4A5568]">
          Refunds are issued when carrier billing fails to reflect the negotiated rate. Refunds do not apply if:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#4A5568]">
          <li>The customer subsequently contacted the provider and added new premium channels, upgraded speed tiers, or purchased on-demand/pay-per-view events.</li>
          <li>The customer opted out of mandatory discount prerequisites (such as switching away from debit/ACH AutoPay to credit card when required by the carrier).</li>
          <li>The dispute is submitted more than 60 calendar days after the negotiation date.</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-[#0D1B2A] uppercase tracking-wider">
          Direct Dispute & Support Desk
        </h2>
        <p className="text-xs text-[#64707A]">
          We pride ourselves on transparent, responsive customer advocacy. Contact us directly at:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#0D1B2A] font-bold">
            <Phone className="size-4 text-[#D71920]" />
            <a href="tel:+18325546367" className="hover:underline">(832) 554-6367</a>
          </div>
          <div className="flex items-center gap-2 text-[#0D1B2A] font-bold">
            <Mail className="size-4 text-[#D71920]" />
            <a href="mailto:support@billlessamerica.com" className="hover:underline">support@billlessamerica.com</a>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="size-4 text-[#D71920]" />
            <span>Houston, TX 77063</span>
          </div>
        </div>
      </div>
    </div>
  );
};
