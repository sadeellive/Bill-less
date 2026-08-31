import React from 'react';
import { providersList } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1B2A] text-slate-300 mt-24 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand Col */}
          <div>
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', e)} 
              className="inline-block transition-opacity hover:opacity-95"
            >
              <BrandLogo variant="dark" size="md" showTagline={true} />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Bill Less America is an independent bill-review and negotiation service. We work with providers so you don't have to — lowering monthly bills on services you already use.
            </p>
            <p className="mt-4 text-sm font-bold text-[#D71920]">
              Lower Bills. Stronger America.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Proud to help American households save money every month.
            </p>
            <p className="mt-3 text-xs text-slate-300">
              Need immediate support? Call our direct line at <a href="tel:+18325546367" className="text-[#D71920] underline font-bold hover:text-white">(832) 554-6367</a>.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <nav aria-label="Service">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Service</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/how-it-works" onClick={(e) => handleNavClick('/how-it-works', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/pricing" onClick={(e) => handleNavClick('/pricing', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/calculator" onClick={(e) => handleNavClick('/calculator', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Savings estimator
                  </a>
                </li>
                <li>
                  <a href="/upload" onClick={(e) => handleNavClick('/upload', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Start a bill review
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Learn">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Learn</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/resources" onClick={(e) => handleNavClick('/resources', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/resources/how-to-read-your-internet-bill" onClick={(e) => handleNavClick('/resources/how-to-read-your-internet-bill', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Read your bill
                  </a>
                </li>
                <li>
                  <a href="/resources/questions-to-ask-your-provider" onClick={(e) => handleNavClick('/resources/questions-to-ask-your-provider', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Questions to ask
                  </a>
                </li>
                <li>
                  <a href="/resources/what-we-cannot-promise" onClick={(e) => handleNavClick('/resources/what-we-cannot-promise', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    What we cannot promise
                  </a>
                </li>
                <li>
                  <a href="/faq" onClick={(e) => handleNavClick('/faq', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Company">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Company</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/about" onClick={(e) => handleNavClick('/about', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    About Bill Less America
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleNavClick('/contact', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/accessibility" onClick={(e) => handleNavClick('/accessibility', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="/disclosures" onClick={(e) => handleNavClick('/disclosures', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Disclosures
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Legal</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/terms" onClick={(e) => handleNavClick('/terms', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="/privacy" onClick={(e) => handleNavClick('/privacy', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Privacy notice
                  </a>
                </li>
                <li>
                  <a href="/disclosures" onClick={(e) => handleNavClick('/disclosures', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Independence & ads
                  </a>
                </li>
                <li>
                  <a href="/do-not-sell" onClick={(e) => handleNavClick('/do-not-sell', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Your privacy choices
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bill Types Directory Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Bill types we review</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {providersList.map((p) => (
              <li key={p.slug}>
                <a
                  href={`/providers/${p.slug}`}
                  onClick={(e) => handleNavClick(`/providers/${p.slug}`, e)}
                  className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline"
                >
                  {p.name} bill review
                </a>
              </li>
            ))}
            <li>
              <a
                href="/providers"
                onClick={(e) => handleNavClick('/providers', e)}
                className="focus-ring rounded text-sm font-semibold text-[#D71920] hover:underline"
              >
                All providers →
              </a>
            </li>
          </ul>
        </div>

        {/* Disclaimers & Legal Fine Print */}
        <div className="mt-10 space-y-3 border-t border-slate-800 pt-8 text-xs leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200">Independence:</strong> Bill Less America is not affiliated with, endorsed by, or sponsored by any service provider named on this site. All trademarks, service marks and trade names are the property of their respective owners and are used solely for identification and descriptive purposes under nominative fair use.
          </p>
          <p>
            <strong className="text-slate-200">No guarantees:</strong> Results depend entirely on your provider. Bill Less America does not promise savings of any amount, does not claim typical results, and does not publish customer counts, ratings or testimonials that have not been independently verified.
          </p>
          <p>
            <strong className="text-slate-200">Advocacy & Scope:</strong> Pricing, timelines, and policies are subject to each carrier's published terms of service. Nothing here is formal legal, financial, or tax advice.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] uppercase tracking-wider">
            <p>© {new Date().getFullYear()} BILL LESS AMERICA INC. ALL RIGHTS RESERVED.</p>
            <p className="text-[#D71920] font-bold">Direct Line: (832) 554-6367</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
