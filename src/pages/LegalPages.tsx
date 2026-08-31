import React from 'react';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  pageType: 'terms' | 'privacy' | 'disclosures' | 'accessibility' | 'do-not-sell';
  navigate: (path: string) => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ pageType, navigate }) => {
  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageContent = () => {
    switch (pageType) {
      case 'terms':
        return {
          title: 'Terms of Service',
          updated: 'Updated February 2026',
          sections: [
            {
              h: '1. Overview of Services',
              p: 'Bill Less America provides independent, informational bill review and negotiation strategy services for residential telecom, cable, internet, and utility accounts. We analyze customer-provided statements, prepare summary breakdowns, and draft customized request letters for provider customer support representatives.'
            },
            {
              h: '2. Independence and No Guarantee of Outcome',
              p: 'Bill Less America is an independent analytical consultancy and household advocacy organization. We are not an agent of, affiliate of, or endorsed by any service provider. Service providers make all final pricing, credit, and contract decisions at their sole discretion. Bill Less America does not guarantee rate reductions, refunds, or credits.'
            },
            {
              h: '3. Explicit Customer Authorization',
              p: 'Bill Less America does not cancel, modify, or contractually alter client accounts without the client’s explicit written approval of the exact request draft.'
            },
            {
              h: '4. Flat Fee Structure',
              p: 'Services are billed at flat published rates at the time of intake. We do not assess percentage-of-savings charges or recurring subscriptions unless an annual monitoring plan is explicitly selected.'
            }
          ]
        };
      case 'privacy':
        return {
          title: 'Privacy Notice',
          updated: 'Updated February 2026',
          sections: [
            {
              h: '1. Information We Collect',
              p: 'We collect statement files uploaded by users, contact email addresses, phone numbers provided for review consultations, and household usage preferences submitted during intake.'
            },
            {
              h: '2. Use of Information',
              p: 'Data is used exclusively to conduct line-by-line statement analysis, prepare requested deliverables, and communicate status alerts to the customer. We never sell, rent, or trade customer data with advertising brokers or third-party telecom carriers.'
            },
            {
              h: '3. Data Sanitization & Security',
              p: 'Payment information, credit card numbers, and banking details present on raw statements are redacted or ignored. Files are encrypted in transit (TLS 1.3) and at rest.'
            }
          ]
        };
      case 'disclosures':
        return {
          title: 'Independence, Disclosures & Advertising Notice',
          updated: 'Updated February 2026',
          sections: [
            {
              h: '1. Nominative Fair Use of Trademarks',
              p: 'All provider names, brand marks, and logos (such as Xfinity, Comcast, Spectrum, Charter, AT&T, Verizon, Cox, Optimum, DIRECTV, Frontier, and DISH) are trademarks of their respective owners. They are referenced strictly for descriptive and nominative fair-use purposes to identify the service statements we review.'
            },
            {
              h: '2. No Carrier Kickbacks or Affiliate Links',
              p: 'Bill Less America does not accept affiliate commissions, referral fees, sales bonuses, or marketing subsidies from any telecom provider. Our revenue comes solely from flat client fees.'
            }
          ]
        };
      case 'accessibility':
        return {
          title: 'Accessibility Statement',
          updated: 'Updated February 2026',
          sections: [
            {
              h: '1. Our Commitment',
              p: 'Bill Less America is committed to ensuring digital accessibility for all users, including those with visual, auditory, motor, and cognitive disabilities. We adhere to WCAG 2.1 Level AA standards.'
            },
            {
              h: '2. Phone & Assisted Access',
              p: 'Users who experience difficulty interacting with our web portal can call our direct phone line at (832) 554-6367 for live telephone assistance.'
            }
          ]
        };
      case 'do-not-sell':
        return {
          title: 'Your Privacy Choices / Do Not Sell My Info',
          updated: 'Updated February 2026',
          sections: [
            {
              h: '1. State Privacy Rights (CPRA, CPA, VCDPA)',
              p: 'Under California, Colorado, Virginia, and other state laws, consumers have the right to opt out of the sale or sharing of their personal information for cross-context behavioral advertising.'
            },
            {
              h: '2. Our Standard Practice',
              p: 'Bill Less America does NOT sell personal information or share personal data with third-party data brokers for commercial monetization.'
            }
          ]
        };
      default:
        return {
          title: 'Legal Information',
          updated: 'Updated February 2026',
          sections: []
        };
    }
  };

  const content = getPageContent();

  return (
    <div className="space-y-12 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920] mb-2">
          <ShieldCheck className="size-4" />
          <span>Bill Less America Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {content.title}
        </h1>
        <p className="text-xs text-muted-foreground mt-2">{content.updated}</p>

        <div className="mt-10 space-y-8 divide-y divide-border border-y border-border py-8">
          {content.sections.map((sec, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-8' : ''}>
              <h2 className="font-display text-lg font-bold text-foreground mb-3">
                {sec.h}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {sec.p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
