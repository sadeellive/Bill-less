import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#0D1B2A] text-slate-300 mt-24 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800 bg-[#070F18]/80 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#D71920]/20 p-3 text-[#D71920]">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-base">
                100% Independent Advocacy
              </p>
              <p className="text-xs text-slate-400">
                We work purely for consumers. We do not accept commissions, kickbacks, or affiliate payments from telecom carriers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <Lock className="size-4 text-emerald-400" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Phone className="size-4 text-[#D71920]" />
              <a href="tel:+18325546367" className="text-white hover:underline">(832) 554-6367</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className="inline-block"
              aria-label="Bill Less America Home"
            >
              <BrandLogo variant="dark" size="md" showTagline={true} />
            </a>

            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              Bill Less America provides expert telecom bill auditing, rate benchmarking, and custom negotiation strategies to help everyday households eliminate junk fees and cut recurring monthly utility expenses.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>Headquarters: 2827 Dunvale Rd, Houston, TX 77063</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#D71920] shrink-0" />
                <a href="tel:+18325546367" className="text-slate-200 hover:text-white hover:underline font-semibold">
                  (832) 554-6367
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#D71920] shrink-0" />
                <span>support@billlessamerica.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <nav className="mt-4" aria-label="Footer Quick Links">
              <ul className="space-y-2.5">
                <li>
                  <a href="/how-it-works" onClick={(e) => handleNavClick('/how-it-works', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/estimator" onClick={(e) => handleNavClick('/estimator', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Savings calculator
                  </a>
                </li>
                <li>
                  <a href="/pricing" onClick={(e) => handleNavClick('/pricing', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Pricing & guarantee
                  </a>
                </li>
                <li>
                  <a href="/negotiation-result" onClick={(e) => handleNavClick('/negotiation-result', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Sample negotiation result
                  </a>
                </li>
                <li>
                  <a href="/upload" onClick={(e) => handleNavClick('/upload', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Start a bill review
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Providers Audited */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Providers We Review
            </p>
            <nav className="mt-4" aria-label="Footer Providers">
              <ul className="space-y-2.5">
                <li>
                  <a href="/providers/xfinity" onClick={(e) => handleNavClick('/providers/xfinity', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Xfinity / Comcast
                  </a>
                </li>
                <li>
                  <a href="/providers/att" onClick={(e) => handleNavClick('/providers/att', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    AT&T & DirecTV
                  </a>
                </li>
                <li>
                  <a href="/providers/spectrum" onClick={(e) => handleNavClick('/providers/spectrum', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Spectrum / Charter
                  </a>
                </li>
                <li>
                  <a href="/providers/verizon" onClick={(e) => handleNavClick('/providers/verizon', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Verizon Wireless & Fios
                  </a>
                </li>
                <li>
                  <a href="/providers/cox" onClick={(e) => handleNavClick('/providers/cox', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Cox Communications
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal & Compliance */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Legal & Compliance
            </p>
            <nav className="mt-4" aria-label="Footer Legal">
              <ul className="space-y-2.5">
                <li>
                  <a href="/privacy" onClick={(e) => handleNavClick('/privacy', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/terms" onClick={(e) => handleNavClick('/terms', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" onClick={(e) => handleNavClick('/refund-policy', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Refund & dispute policy
                  </a>
                </li>
                <li>
                  <a href="/accessibility" onClick={(e) => handleNavClick('/accessibility', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Accessibility statement
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" onClick={(e) => handleNavClick('/disclaimer', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Disclaimers & disclosures
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleNavClick('/contact', e)} className="focus-ring rounded text-sm text-slate-300 hover:text-white hover:underline">
                    Contact & support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            <strong className="text-slate-200">Legal Disclosure:</strong> Bill Less America is an independent consumer rate analysis and advisory service. Bill Less America is NOT affiliated with, sponsored by, or endorsed by Comcast/Xfinity, AT&T, Charter/Spectrum, Verizon, Cox, or any other mentioned service provider. All registered trademarks, logos, and service names are the property of their respective owners and are used strictly for nominative identification and consumer comparison purposes.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Bill Less America. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Direct Consumer Hotline:</span>
            <a href="tel:+18325546367" className="font-bold text-slate-300 hover:text-white">
              (832) 554-6367
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
