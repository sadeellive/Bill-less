import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-6 text-sm text-[#0D1B2A] leading-relaxed">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="font-display text-3xl font-extrabold text-[#0D1B2A]">Privacy & Data Policy</h1>
        <p className="text-xs text-[#64707A] mt-1">Last Updated: February 2026 • Headquarters: 2827 Dunvale Rd, Houston, TX 77063</p>
      </div>
      
      <p>
        Bill Less America ("we," "our," or "us") is dedicated to protecting consumer privacy and safeguarding your sensitive billing records. This policy details how we collect, handle, protect, and dispose of personal and account information submitted during the bill negotiation process.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">1. Information We Collect</h2>
      <p>
        To negotiate on your behalf with third-party service providers, we collect:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#4A5568]">
        <li><strong>Contact Information:</strong> Your full name, email address, phone number, and billing/service street address.</li>
        <li><strong>Provider Account Data:</strong> Name of your service provider, account number, authorized customer name, telephone verification passcode/PIN, and current monthly statement amount.</li>
        <li><strong>Uploaded Statement Records:</strong> Copies of your monthly bills, itemized line items, equipment rental rates, and dates.</li>
      </ul>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">2. Strict Security & Password Prohibition</h2>
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
        <p className="font-bold">We NEVER ask for, store, or accept your web portal login password.</p>
        <p>
          Negotiations with providers are conducted by phone or authorized customer-service channels using your signed Letter of Authorization (LOA) and carrier telephone verification PIN. You should never disclose your online login password to anyone, including our team.
        </p>
      </div>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">3. Zero Selling or Brokerage of Customer Data</h2>
      <p>
        We do not sell, rent, license, or monetize your personal information or bill statements to third-party data brokers, advertising agencies, or marketing companies. Information is utilized solely to analyze, negotiate, and verify rate discounts for your account.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">4. Encryption & Document Retention</h2>
      <p>
        All bill uploads are transmitted with 256-bit TLS/SSL encryption and stored on secure enterprise infrastructure. Uploaded statements are automatically purged from active operational storage after the negotiation and verified savings settlement is complete.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">5. Separate Marketing Consent (No Bundling)</h2>
      <p>
        Consent to receive marketing or promotional text messages and emails is strictly optional, presented as an unchecked checkbox, and never bundled as a prerequisite for using our negotiation service. Consumers can unsubscribe or opt out at any time.
      </p>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-6 text-sm text-[#0D1B2A] leading-relaxed">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="font-display text-3xl font-extrabold text-[#0D1B2A]">Terms of Service</h1>
        <p className="text-xs text-[#64707A] mt-1">Last Updated: February 2026 • Headquarters: 2827 Dunvale Rd, Houston, TX 77063</p>
      </div>

      <p>
        By accessing the Bill Less America website or authorizing us to negotiate on your behalf, you agree to these Terms of Service.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">1. Scope of Representation & Letter of Authorization (LOA)</h2>
      <p>
        Bill Less America acts as your limited authorized representative to communicate with your eligible telecommunications, internet, cable, and recurring household service providers. By submitting an intake form, you execute a Letter of Authorization authorizing our team to inquire about promotional rates, loyalty discounts, equipment credits, and plan adjustments. We do NOT cancel primary services or initiate credit checks without your express consent.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">2. Simple Success-Based Pricing (25% Model)</h2>
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0D1B2A] space-y-2">
        <p className="font-bold text-[#D71920]">Prominent Pricing Disclosure:</p>
        <p>
          Our one-time service fee is <strong>25% of the verified savings</strong> we successfully obtain for you. If we do not obtain qualifying savings, your fee is <strong>$0</strong>.
        </p>
        <p className="text-xs text-[#64707A]">
          "Verified savings" is defined as the mathematical difference between your previous recurring monthly cost and your new negotiated recurring monthly cost, multiplied by the confirmed savings period (up to 12 months).
        </p>
      </div>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">3. Success Fee Authorization & Payment</h2>
      <p>
        You are never billed upfront upon submitting a bill for review. Payment of the 25% success fee is authorized only after we deliver your Verified Savings Report with carrier confirmation codes demonstrating that the savings have been applied to your account.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">4. 60-Day Savings Guarantee & Refund Policy</h2>
      <p>
        If your service provider does not honor the negotiated rate, rescinds the discount, or charges higher recurring fees on your subsequent billing statement within 60 days of the negotiation, Bill Less America will either resolve the issue with the carrier or issue an immediate 100% refund of your success fee. See our full <a href="/refund-policy" className="text-[#D71920] underline font-bold">Refund & Billing Dispute Policy</a>.
      </p>

      <h2 className="text-lg font-bold text-[#0D1B2A] pt-3">5. Independent Negotiation Service</h2>
      <p>
        Bill Less America is an independent consumer rate negotiation service and is not an agent of, affiliate of, or partner with Comcast, AT&T, Spectrum, Verizon, Cox, or any other carrier.
      </p>
    </div>
  );
};

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-6 text-sm text-[#0D1B2A] leading-relaxed">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="font-display text-3xl font-extrabold text-[#0D1B2A]">Disclaimers & Disclosures</h1>
        <p className="text-xs text-[#64707A] mt-1">Bill Less America • Houston, Texas</p>
      </div>
      
      <p>
        <strong>Independent Service Provider:</strong> Bill Less America is an independent consumer advocacy and rate negotiation service headquartered at 2827 Dunvale Rd, Houston, TX 77063.
      </p>

      <p>
        <strong>Non-Affiliation:</strong> Bill Less America is NOT affiliated with, sponsored by, endorsed by, or an authorized dealer for Comcast / Xfinity, AT&T, Spectrum / Charter Communications, Verizon Communications, Cox Communications, Frontier Communications, CenturyLink / Brightspeed, or T-Mobile.
      </p>

      <p>
        <strong>Trademarks:</strong> All provider brand names, service marks, logos, and trademarks shown on this website are the property of their respective owners. They are used on this site solely for purposes of nominative fair use to describe the telecommunications and utility services that Bill Less America negotiates on behalf of consumers.
      </p>

      <p>
        <strong>No Guarantee of Carrier Policy:</strong> While our team has an extensive track record of negotiating rate reductions, final approval of promotional discounts and loyalty credits rests with the third-party service provider. If no qualifying savings can be obtained, the consumer incurs no fee ($0).
      </p>
    </div>
  );
};

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-6 text-sm text-[#0D1B2A] leading-relaxed">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="font-display text-3xl font-extrabold text-[#0D1B2A]">Accessibility Statement</h1>
        <p className="text-xs text-[#64707A] mt-1">Commitment to Digital Accessibility</p>
      </div>
      <p>
        Bill Less America is committed to ensuring that our website and bill review services are accessible to all individuals, including people with disabilities. We adhere to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA principles to ensure high contrast, keyboard navigability, and clear document hierarchy.
      </p>
      <p>
        If you encounter any accessibility barrier on our website, or require assistance submitting your bill information, please contact our dedicated accessibility phone hotline at <strong>(832) 554-6367</strong> or email <strong>accessibility@billlessamerica.com</strong>.
      </p>
    </div>
  );
};
