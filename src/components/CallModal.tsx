import React, { useState } from 'react';
import { Phone, PhoneCall, X, ShieldCheck, Clock, CheckCircle2, User, FileText } from 'lucide-react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    provider: 'xfinity',
    preferredTime: 'morning',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackRequested(true);
  };

  const handleReset = () => {
    setCallbackRequested(false);
    setFormData({
      name: '',
      phone: '',
      provider: 'xfinity',
      preferredTime: 'morning',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0D1B2A] relative px-6 py-6 border-b border-slate-800 text-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300 mb-2 border border-red-500/30">
            <PhoneCall className="size-3.5" />
            <span>Direct Consumer Hotline</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            Speak with an Audit Specialist
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Fast, confidential assistance for your household bills
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!callbackRequested ? (
            <div className="space-y-6">
              {/* Direct Instant Call Box */}
              <div className="rounded-2xl bg-[#FAFBFD] p-5 border border-slate-200 text-center space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64707A]">
                  Option 1: Call Directly Now
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="tel:+18325546367"
                    className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D71920] px-6 py-3.5 text-base font-black text-white shadow-lg shadow-red-200 hover:bg-[#b5141a] transition-all hover:scale-105 active:scale-95"
                  >
                    <Phone className="size-5" />
                    <span>Call (832) 554-6367</span>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-[#64707A] pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5 text-emerald-600" />
                    <span>Mon–Sat 8am–7pm CST</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-emerald-600" />
                    <span>No wait times</span>
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-200 w-full"></div>
                <span className="bg-white px-3 text-xs font-bold text-[#64707A] uppercase tracking-wider">
                  Or Request a Callback
                </span>
              </div>

              {/* Callback Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 size-4 text-[#64707A]" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#d0d5dd] bg-white py-2 pl-9 pr-3 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 size-4 text-[#64707A]" />
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#d0d5dd] bg-white py-2 pl-9 pr-3 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Primary Provider
                    </label>
                    <select
                      value={formData.provider}
                      onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white py-2 px-3 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                    >
                      <option value="xfinity">Xfinity / Comcast</option>
                      <option value="att">AT&T / DirecTV</option>
                      <option value="spectrum">Spectrum / Charter</option>
                      <option value="verizon">Verizon Wireless / Fios</option>
                      <option value="cox">Cox Communications</option>
                      <option value="tmobile">T-Mobile</option>
                      <option value="other">Other Provider</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Best Time to Call
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white py-2 px-3 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                    >
                      <option value="morning">Morning (9am – 12pm CST)</option>
                      <option value="afternoon">Afternoon (12pm – 4pm CST)</option>
                      <option value="evening">Evening (4pm – 7pm CST)</option>
                      <option value="asap">As Soon As Possible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Optional Notes or Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. My monthly bill went up by $50 last week..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-[#d0d5dd] bg-white py-2 px-3 text-sm focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0D1B2A] py-3 text-sm font-bold text-white shadow hover:bg-[#1B314B] transition-colors cursor-pointer"
                >
                  Schedule Specialist Callback
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0D1B2A]">
                Callback Scheduled!
              </h3>
              <p className="text-sm text-[#64707A] max-w-sm mx-auto">
                Thank you, <strong className="text-[#0D1B2A]">{formData.name || 'there'}</strong>. An audit specialist will call you at <strong className="text-[#0D1B2A]">{formData.phone}</strong> during your preferred window.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-[#0D1B2A] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1B314B]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
