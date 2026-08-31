import React from 'react';
import { 
  FileText, 
  Search, 
  FileCheck2, 
  Send, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  PhoneCall,
  Check
} from 'lucide-react';

interface HowItWorksPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ navigate, onOpenCallModal }) => {
  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const detailedSteps = [
    {
      num: '01',
      icon: FileText,
      title: '1 · Intake & Usage Audit',
      subtitle: 'Upload a recent statement and tell us what you actually need.',
      description: 'You upload a PDF or clear picture of your latest internet, cable, or wireless bill. You answer a few quick 30-second questions regarding how many people live in your household, what speed you realistically require, and whether you use features like landline phones or secondary TV boxes.',
      deliverable: 'Your raw statement is securely ingested and sanitized of unnecessary personal payment methods.'
    },
    {
      num: '02',
      icon: Search,
      title: '2 · Line-by-Line Technical Review',
      subtitle: 'An independent human reviewer audits every single line item.',
      description: 'We do not rely on rough AI approximations. A specialist examines every line item against standard rate cards, identifying expired promotional discounts, hidden equipment rental charges, duplicate add-on subscriptions, and rate increases.',
      deliverable: 'A structured breakdown categorizing charges into recurring, one-time, hardware, and non-negotiable taxes.'
    },
    {
      num: '03',
      icon: FileCheck2,
      title: '3 · Draft Documented Request',
      subtitle: 'We draft a customized, professional request letter.',
      description: 'We prepare specific, factual language citing exact line items, expired dates, and local customer loyalty terms. You get to read and edit every single word of the request beforehand.',
      deliverable: 'A formatted request letter with step-by-step talking points for customer retention.'
    },
    {
      num: '04',
      icon: Send,
      title: '4 · Your Explicit Approval',
      subtitle: 'You stay in 100% control of your account.',
      description: 'Nothing is submitted or communicated to your provider until you give explicit written approval. You can choose to read the talking points aloud yourself on a phone call, or authorize our written submission on your behalf.',
      deliverable: 'Full written record of all actions, timestamps, and follow-up guidance.'
    }
  ];

  const whatWeDoVsDont = [
    {
      label: 'What Bill Less America Does',
      items: [
        'Reads and translates every single line item into plain English',
        'Flags expired promotional credits and unreturned hardware leases',
        'Composes a documented request with verifiable facts for your provider',
        'Provides neutral, independent guidance with zero provider kickbacks',
        'Delivers a complete permanent audit record you own forever'
      ]
    },
    {
      label: 'What Bill Less America Never Does',
      items: [
        'Never guarantees arbitrary dollar amounts or false savings promises',
        'Never accepts referral commissions or side deals from telecom carriers',
        'Never alters, cancels, or changes your active services without written consent',
        'Never takes a percentage cut of "theoretical future savings"',
        'Never sells or distributes your personal billing information'
      ]
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Process
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          A careful read of your bill, then a request you control
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Bill Less America does not change your service, sign you up for anything, or contact a provider without your written approval. The review is the deliverable.
        </p>
      </section>

      {/* 4 Detailed Steps */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-8">
          {detailedSteps.map((step) => (
            <div 
              key={step.num}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_2.5fr]">
                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-2xl bg-teal/15 text-teal-foreground flex items-center justify-center font-display font-extrabold text-xl shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h2>
                    <p className="text-sm font-semibold text-primary mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="rounded-xl bg-muted/60 p-4 border border-border/80 text-xs text-foreground flex items-start gap-2.5">
                    <ShieldCheck className="size-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-foreground">Deliverable: </strong>
                      <span className="text-muted-foreground">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do vs What We Don't */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground text-center mb-8">
            Clear boundaries, honest expectations
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {whatWeDoVsDont.map((col, idx) => (
              <div 
                key={col.label}
                className={`p-6 sm:p-8 rounded-2xl border ${
                  idx === 0 ? 'bg-teal/5 border-teal/30' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h3 className={`font-display text-lg font-bold mb-4 ${
                  idx === 0 ? 'text-teal-foreground' : 'text-slate-800'
                }`}>
                  {col.label}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className={`size-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        idx === 0 ? 'bg-teal text-teal-foreground' : 'bg-slate-300 text-slate-700'
                      }`}>
                        <Check className="size-3 stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-50"></div>
          <div className="relative max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-foreground">
              Ready to have your bill reviewed?
            </h2>
            <p className="text-sm text-navy-foreground/80">
              Upload a recent bill for a flat, one-time fee or call our specialists directly for neutral advice.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleNav('/upload')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90"
              >
                Upload a bill for review
              </button>
              <button
                type="button"
                onClick={onOpenCallModal}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-navy-foreground/30 text-navy-foreground font-semibold text-sm hover:bg-navy-foreground/10 flex items-center justify-center gap-2"
              >
                <PhoneCall className="size-4 text-teal" />
                <span>Call specialist: (832) 554-6367</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
