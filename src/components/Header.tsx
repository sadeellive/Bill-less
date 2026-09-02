import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate, onOpenCallModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Bills We Negotiate', path: '/#statements' },
    { label: 'Results', path: '/negotiation-result' },
    { label: 'Savings Calculator', path: '/estimator' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Consumer Guides', path: '/resources' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#d0d5dd] bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top Banner for Trust & Fast Direct Dialing */}
      <div className="bg-[#0D1B2A] py-1.5 px-4 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
          <ShieldCheck className="size-3.5" />
          <span>Independent Consumer Advocate</span>
        </span>
        <span className="hidden md:inline text-slate-500">|</span>
        <span className="hidden sm:inline">Zero fee-sharing with telecom providers</span>
        <span className="text-slate-500">|</span>
        <a 
          href="tel:+18325546367" 
          className="inline-flex items-center gap-1 font-bold text-white hover:text-red-300 transition-colors"
        >
          <Phone className="size-3 text-[#D71920]" />
          <span>Call: (832) 554-6367</span>
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          className="focus-ring group rounded-lg transition-transform hover:opacity-95"
          aria-label="Bill Less America Home"
        >
          <BrandLogo variant="light" size="md" showTagline={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`focus-ring rounded-lg px-2.5 py-1.5 text-xs xl:text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#F2F4F7] text-[#0D1B2A]'
                    : 'text-[#64707A] hover:text-[#0D1B2A] hover:bg-[#F2F4F7]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Red Pill Call Button */}
          <button
            type="button"
            onClick={onOpenCallModal}
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[#D71920] px-4 py-2 text-sm font-bold text-white shadow-sm shadow-red-200 transition-all hover:bg-[#b5141a] active:scale-95"
          >
            <Phone className="size-4 transition-transform group-hover:rotate-12" />
            <span>(832) 554-6367</span>
          </button>

          {/* Start Review CTA */}
          <a
            href="/upload"
            onClick={(e) => handleNavClick('/upload', e)}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[#0D1B2A] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#1B314B]"
          >
            <span>Start Review</span>
            <ChevronRight className="size-4 text-slate-400" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+18325546367"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[#D71920] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#b5141a]"
          >
            <Phone className="size-3.5" />
            <span>Call</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-[#0D1B2A] hover:bg-[#F2F4F7]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#d0d5dd] bg-white px-4 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(link.path, e)}
                    className="focus-ring block rounded-lg px-3 py-2.5 text-base font-semibold text-[#0D1B2A] hover:bg-[#F2F4F7]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/upload"
                  onClick={(e) => handleNavClick('/upload', e)}
                  className="focus-ring block rounded-lg px-3 py-2.5 text-base font-semibold text-[#D71920] hover:bg-red-50"
                >
                  Start a Bill Review ($29)
                </a>
              </li>
            </ul>

            {/* Mobile Call Now Direct Button */}
            <div className="mt-4 pt-3 border-t border-[#d0d5dd] space-y-2">
              <a
                href="tel:+18325546367"
                onClick={() => setMobileMenuOpen(false)}
                className="focus-ring flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#D71920] px-4 py-3.5 text-center text-base font-extrabold text-white shadow-lg shadow-red-200 hover:bg-[#b5141a]"
              >
                <Phone className="size-5" />
                <span>Call Now: (832) 554-6367</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
