import React from 'react';
import { ArrowRight, BookOpen, Clock, PhoneCall } from 'lucide-react';
import { resourcesList } from '../data/siteContent';

interface ResourcesPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate, onOpenCallModal }) => {
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
          Free Knowledge Base
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Guides, fee glossaries & checklists
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Free educational articles to help you understand your monthly statements, know which questions to ask, and manage service renewals independently.
        </p>
      </section>

      {/* Resource Cards Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {resourcesList.map((r) => (
            <article
              key={r.slug}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  <span>{r.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5" /> {r.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground">
                  <a
                    href={`/resources/${r.slug}`}
                    onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                    className="hover:text-primary transition-colors"
                  >
                    {r.title}
                  </a>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <a
                  href={`/resources/${r.slug}`}
                  onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                  className="text-sm font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="surface-navy rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-foreground">
              Have specific questions not covered here?
            </h2>
            <p className="text-sm text-navy-foreground/80">
              Speak directly with an independent bill review specialist at (832) 554-6367.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCallModal}
            className="px-6 py-3.5 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90 flex items-center gap-2"
          >
            <PhoneCall className="size-4" />
            <span>Call Toll-Free</span>
          </button>
        </div>
      </section>
    </div>
  );
};
