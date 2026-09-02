import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { providersList } from '../data/siteContent';

interface ProvidersPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ProvidersPage: React.FC<ProvidersPageProps> = ({ navigate, onOpenCallModal }) => {
  const [filter, setFilter] = useState<'all' | 'internet' | 'wireless' | 'tv'>('all');
  const [search, setSearch] = useState('');

  const filteredProviders = providersList.filter((p) => {
    const matchesFilter = filter === 'all' || p.category.toLowerCase().includes(filter);
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Carrier Directory
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Bills We Review by Provider
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Explore common billing line items, fee structures, and promotional roll-off timelines for major U.S. service providers.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search providers (e.g. Spectrum)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus-ring"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Providers' },
              { id: 'internet', label: 'Internet & Cable' },
              { id: 'wireless', label: 'Wireless' },
              { id: 'tv', label: 'TV & Satellite' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  filter === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Cards Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal/10 text-teal text-[0.7rem] font-bold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground">U.S. Carrier</span>
                </div>

                <h2 className="font-display text-xl font-bold text-foreground">
                  <a
                    href={`/providers/${p.slug}`}
                    onClick={(e) => handleNav(`/providers/${p.slug}`, e)}
                    className="hover:text-primary transition-colors"
                  >
                    {p.name}
                  </a>
                </h2>

                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-[0.7rem] font-bold uppercase tracking-wider text-primary mb-1.5">
                    Common items flagged:
                  </p>
                  <ul className="text-xs text-foreground/80 space-y-1">
                    {p.commonFees.slice(0, 2).map((fee, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-teal shrink-0"></span>
                        <span className="truncate">{fee}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <a
                  href={`/providers/${p.slug}`}
                  onClick={(e) => handleNav(`/providers/${p.slug}`, e)}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>View fee breakdown</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimers & Call Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-foreground">
              Don't see your specific regional utility or provider?
            </h2>
            <p className="text-sm text-navy-foreground/80">
              We review all standard U.S. residential telecom, fiber, cable, and wireless statements.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav('/upload')}
              className="px-5 py-3 rounded-xl bg-teal text-teal-foreground font-bold text-xs shadow hover:bg-teal/90"
            >
              Upload Any Bill
            </button>
            <button
              type="button"
              onClick={onOpenCallModal}
              className="px-5 py-3 rounded-xl border border-navy-foreground/30 text-navy-foreground font-semibold text-xs hover:bg-navy-foreground/10 flex items-center gap-1.5"
            >
              <PhoneCall className="size-3.5 text-teal" />
              <span>Call Specialist</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
