import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate, onOpenCallModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/how-it-works', label: 'How it works' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/providers', label: 'Providers' },
    { path: '/calculator', label: 'Estimator' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d5dd] bg-white/95 backdrop-blur-md transition-colors shadow-sm">
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-[#D71920] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick('/', e)} 
          aria-label="Bill Less America home"
          className="focus-ring rounded-md group flex items-center transition-opacity hover:opacity-95"
        >
          <BrandLogo variant="light" size="md" showTagline={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`focus-ring text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'text-[#D71920]' 
                    : 'text-[#0D1B2A] hover:text-[#D71920]'
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
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#D71920] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-200 hover:bg-[#b5141a] transition-all active:scale-95 cursor-pointer"
            title="Call Bill Less America Specialists"
          >
            <Phone className="size-4" />
            <span>Call Now</span>
          </button>
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
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-[#d0d5dd] text-[#0D1B2A] hover:bg-[#F2F4F7]"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-[#d0d5dd] bg-white lg:hidden animate-in slide-in-from-top-2 duration-150">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(link.path, e)}
                    className="focus-ring block rounded-lg px-3 py-2.5 text-base font-semibold text-[#0D1B2A] hover:bg-[#F2F4F7] hover:text-[#D71920]"
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
                  Start saving today
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
