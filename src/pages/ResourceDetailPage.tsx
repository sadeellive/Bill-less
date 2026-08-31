import React from 'react';
import { ArrowLeft, Clock, ArrowRight, BookOpen, PhoneCall } from 'lucide-react';
import { resourcesList } from '../data/siteContent';

interface ResourceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ slug, navigate, onOpenCallModal }) => {
  const article = resourcesList.find((r) => r.slug === slug) || resourcesList[0];
  const related = resourcesList.filter((r) => r.slug !== article.slug).slice(0, 2);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12">
      {/* Back Link */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNav('/resources')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to all guides</span>
        </button>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
          <span>{article.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="size-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed border-b border-border pb-8">
          {article.description}
        </p>

        {/* Article Body */}
        <div className="mt-8 space-y-10">
          {article.body.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-foreground/90 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 pt-2">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="size-1.5 rounded-full bg-teal shrink-0 mt-2"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* In-Article Call Assistance Card */}
        <div className="mt-12 p-6 rounded-2xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-foreground">Need help deciphering your statement?</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Talk directly with a Bill Less America review specialist today.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCallModal}
            className="px-5 py-2.5 rounded-xl bg-[#D71920] text-white font-bold text-xs hover:bg-[#b5141a] flex items-center gap-2 shrink-0 shadow-sm"
          >
            <PhoneCall className="size-3.5" />
            <span>Call (832) 554-6367</span>
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 border-t border-border">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Related Guides
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {related.map((r) => (
            <div key={r.slug} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">{r.category}</p>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">
                  <a
                    href={`/resources/${r.slug}`}
                    onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                    className="hover:text-primary"
                  >
                    {r.title}
                  </a>
                </h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.description}</p>
              </div>
              <a
                href={`/resources/${r.slug}`}
                onClick={(e) => handleNav(`/resources/${r.slug}`, e)}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-4"
              >
                <span>Read guide</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
