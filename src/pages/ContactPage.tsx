import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onOpenCallModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenCallModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-12">
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#D71920]">
          Get in touch
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Contact Bill Less America
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Have questions about our review process, pricing, or need advice on a recent statement? Reach out directly.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-red-200 bg-red-50/40 p-6 space-y-4">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Phone className="size-5 text-[#D71920]" />
                <span>Direct Phone Support</span>
              </h2>
              <a
                href="tel:+18325546367"
                className="text-2xl font-extrabold text-foreground hover:text-[#D71920] transition-colors block"
              >
                (832) 554-6367
              </a>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#D71920]" /> Monday–Friday: 8:00 AM – 7:00 PM ET
              </p>
              <button
                type="button"
                onClick={onOpenCallModal}
                className="w-full py-2.5 rounded-xl bg-[#D71920] text-white font-bold text-xs hover:bg-[#b5141a] transition-colors"
              >
                Open Quick Call Assistant
              </button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#D71920] font-bold text-sm">
                <Mail className="size-4" />
                <span>Email Support</span>
              </div>
              <p className="text-xs text-muted-foreground">
                For general questions or partnership inquiries:
              </p>
              <p className="font-mono text-xs font-semibold text-foreground">
                support@billlessamerica.com
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-[#D71920] font-bold text-sm">
                <MapPin className="size-4" />
                <span>Headquarters</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bill Less America Inc.<br />
                2827 Dunvale Rd<br />
                Houston, TX 77063, United States
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground">
                  Our customer care team typically responds within 4 business hours.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">How can we help?</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your question or request here..."
                    className="w-full rounded-xl border border-input bg-background p-3 text-sm focus-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="size-12 text-emerald-600 mx-auto" />
                <h3 className="font-display text-xl font-bold text-foreground">Message Sent</h3>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Thank you, {name}. A member of our bill review team will email you at <strong>{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-teal underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
