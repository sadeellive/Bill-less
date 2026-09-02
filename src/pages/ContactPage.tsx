import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0D1B2A] tracking-tight">
          Contact Bill Less America
        </h1>
        <p className="text-base text-[#64707A]">
          We are here to assist with billing audits, statement questions, or general consumer inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Contact Info */}
        <div className="md:col-span-5 rounded-3xl bg-[#0D1B2A] p-8 text-white space-y-6 shadow-lg">
          <div>
            <h2 className="text-xl font-bold text-white">Direct Hotline</h2>
            <p className="text-xs text-slate-300 mt-1">Speak directly with an audit representative</p>
          </div>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-[#D71920] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-sm">(832) 554-6367</p>
                <p className="text-[11px] text-slate-400">Toll-free consumer line</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="size-5 text-[#D71920] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-sm">support@billlessamerica.com</p>
                <p className="text-[11px] text-slate-400">Response within 24 business hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-[#D71920] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-sm">National Headquarters</p>
                <p className="text-[11px] text-slate-400">2827 Dunvale Rd, Houston, TX 77063</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="size-5 text-[#D71920] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-sm">Operating Hours</p>
                <p className="text-[11px] text-slate-400">Monday–Friday: 8:00 AM – 7:00 PM CST</p>
                <p className="text-[11px] text-slate-400">Saturday: 9:00 AM – 3:00 PM CST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#0D1B2A] mb-4">Send a Message</h2>
              <div>
                <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-[#d0d5dd] p-2.5 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-[#d0d5dd] p-2.5 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#d0d5dd] p-2.5 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Message / Question</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you with your telecom bills?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-[#d0d5dd] p-2.5 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0D1B2A] font-bold text-sm text-white hover:bg-[#1B314B] transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="mx-auto size-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A]">Message Sent!</h3>
              <p className="text-xs text-[#64707A]">
                Thank you for contacting us. One of our team members will get back to you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
