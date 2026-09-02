import React from 'react';
import { ArrowLeft, Clock, Calendar, PhoneCall, ArrowRight, Share2 } from 'lucide-react';
import { resourcesList } from '../data/siteContent';

interface ResourceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ slug, navigate }) => {
  const resource = resourcesList.find((r) => r.slug === slug) || resourcesList[0];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-8">
      <button
        type="button"
        onClick={() => navigate('/resources')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64707A] hover:text-[#0D1B2A] transition-colors"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Guides</span>
      </button>

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="bg-red-50 text-[#D71920] px-2.5 py-1 rounded-md uppercase tracking-wider">
            {resource.category}
          </span>
          <span className="text-[#64707A] flex items-center gap-1">
            <Clock className="size-3.5" />
            <span>{resource.readTime}</span>
          </span>
          <span className="text-[#64707A]">· {resource.date}</span>
        </div>

        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0D1B2A] leading-tight">
          {resource.title}
        </h1>

        <p className="text-base text-[#64707A] leading-relaxed">
          {resource.summary}
        </p>
      </header>

      {/* Guide Content Render */}
      <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#0D1B2A] space-y-6">
        {resource.content.split('\n\n').map((block, idx) => {
          if (block.startsWith('### ')) {
            return (
              <h2 key={idx} className="font-display text-xl font-bold text-[#0D1B2A] pt-4">
                {block.replace('### ', '')}
              </h2>
            );
          }
          if (block.startsWith('> ')) {
            return (
              <blockquote key={idx} className="border-l-4 border-[#D71920] bg-slate-50 p-4 rounded-r-xl text-sm italic text-[#0D1B2A]">
                {block.replace('> ', '')}
              </blockquote>
            );
          }
          return <p key={idx} className="text-[#64707A]">{block}</p>;
        })}
      </div>

      {/* Action CTA */}
      <div className="rounded-3xl bg-[#0D1B2A] p-8 text-center text-white space-y-4 mt-12">
        <h3 className="text-xl font-bold">Want our experts to handle your negotiation?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          We audit your statement and craft a tailored action plan for a flat $29.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate('/upload')}
            className="px-6 py-3 rounded-xl bg-[#D71920] font-bold text-sm text-white hover:bg-[#b5141a]"
          >
            Start Bill Review ($29)
          </button>
          <a
            href="tel:+18325546367"
            className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800 font-bold text-sm text-white hover:bg-slate-700"
          >
            Call (832) 554-6367
          </a>
        </div>
      </div>
    </article>
  );
};
