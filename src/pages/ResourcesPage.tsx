import React from 'react';
import { BookOpen, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { resourcesList } from '../data/siteContent';

interface ResourcesPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Consumer Knowledge Base
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          Telecom Billing Guides & Scripts
        </h1>
        <p className="text-base text-[#64707A]">
          Step-by-step guides, phone scripts, and legal consumer rights to help you lower internet and pay-TV bills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {resourcesList.map((r) => (
          <div
            key={r.slug}
            onClick={() => navigate(`/resources/${r.slug}`)}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#D71920] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-[#D71920] uppercase tracking-wider">{r.category}</span>
                <span className="text-[#64707A]">{r.readTime}</span>
              </div>
              <h2 className="font-display text-base font-bold text-[#0D1B2A] group-hover:text-[#D71920] transition-colors leading-snug">
                {r.title}
              </h2>
              <p className="text-xs text-[#64707A] leading-relaxed line-clamp-3">
                {r.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D1B2A]">
              <span>Read Full Guide</span>
              <ChevronRight className="size-4 text-[#D71920] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
