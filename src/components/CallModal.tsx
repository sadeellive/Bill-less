import React, { useState } from 'react';
import { Phone, X, Clock, CheckCircle2, Shield, ArrowRight, Copy, Check } from 'lucide-react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [provider, setProvider] = useState('');
  const [timePreference, setTimePreference] = useState('asap');

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('(832) 554-6367');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setCallbackRequested(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1B2A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#d0d5dd] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0D1B2A] relative px-6 py-6 border-b border-slate-800 text-white">
          <div aria-hidden="true" className="grid-atlas pointer-events-none absolute inset-0 opacity-30"></div>
          <button 
            type="button" 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="size-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex size-2 rounded-full bg-[#D71920] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D71920]">Direct Savings Consultation</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Speak with a Savings Specialist</h2>
          <p className="mt-1 text-sm text-slate-300">
            Find out how much you can save on your bills every month. Plain answers, zero pressure.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto bg-white">
          {/* Direct Call Box */}
          <div className="p-5 rounded-2xl border border-red-100 bg-[#F2F4F7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#D71920]">Direct Phone Line</p>
              <a 
                href="tel:+18325546367" 
                className="text-2xl font-black text-[#0D1B2A] hover:text-[#D71920] transition-colors flex items-center gap-2 mt-0.5"
              >
                (832) 554-6367
              </a>
              <p className="text-xs text-[#64707A] mt-1 flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#D71920]" /> Mon–Fri 8:00 AM – 8:00 PM ET
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3.5 py-2 text-xs font-bold rounded-xl border border-[#d0d5dd] bg-white hover:bg-slate-50 text-[#0D1B2A] transition-colors flex items-center gap-1.5 shadow-sm"
                title="Copy phone number"
              >
                {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href="tel:+18325546367"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D71920] text-white font-bold text-sm shadow-md shadow-red-200 hover:bg-[#b5141a] transition-transform active:scale-95"
              >
                <Phone className="size-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Request Callback Section */}
          {!callbackRequested ? (
            <div className="space-y-3">
              <div className="border-t border-slate-100 pt-4">
                <h3 className="font-display text-base font-bold text-[#0D1B2A]">Or Request an Instant Callback</h3>
                <p className="text-xs text-[#64707A] mt-0.5">
                  Leave your number and a Bill Less America specialist will call you back shortly.
                </p>
              </div>

              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white px-3.5 py-2.5 text-sm focus-ring text-[#0D1B2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white px-3.5 py-2.5 text-sm focus-ring text-[#0D1B2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">Service Provider (Optional)</label>
                    <select
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white px-3.5 py-2.5 text-sm focus-ring text-[#0D1B2A]"
                    >
                      <option value="">Select a provider...</option>
                      <option value="Xfinity">Xfinity (Comcast)</option>
                      <option value="Spectrum">Spectrum</option>
                      <option value="AT&T">AT&T</option>
                      <option value="Verizon">Verizon</option>
                      <option value="T-Mobile">T-Mobile</option>
                      <option value="Cox">Cox</option>
                      <option value="Optimum">Optimum</option>
                      <option value="DIRECTV">DIRECTV</option>
                      <option value="Frontier">Frontier</option>
                      <option value="Other">Other Provider</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">When to Call</label>
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full rounded-xl border border-[#d0d5dd] bg-white px-3.5 py-2.5 text-sm focus-ring text-[#0D1B2A]"
                    >
                      <option value="asap">Right now (Next 5–10 mins)</option>
                      <option value="morning">Morning (9 AM – 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                      <option value="evening">Evening (5 PM – 8 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D1B2A] py-3 px-4 text-sm font-bold text-white hover:bg-[#1a2f47] transition-colors shadow-md"
                >
                  <span>Request Callback</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-950 space-y-2 text-center animate-in fade-in">
              <CheckCircle2 className="size-8 text-emerald-600 mx-auto" />
              <p className="font-bold text-base">Callback Request Received!</p>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                A Bill Less America specialist will call <strong>{phone}</strong> shortly. We do not store or sell your contact information.
              </p>
              <button
                type="button"
                onClick={() => setCallbackRequested(false)}
                className="text-xs font-bold text-[#D71920] underline mt-2"
              >
                Submit another request
              </button>
            </div>
          )}

          {/* Independence disclosure */}
          <div className="flex items-start gap-2.5 pt-3 border-t border-slate-100 text-xs text-[#64707A]">
            <Shield className="size-4 text-[#D71920] shrink-0 mt-0.5" />
            <p>
              Bill Less America is fully dedicated to household advocacy. We negotiate so you can save on internet, cable, phone, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
