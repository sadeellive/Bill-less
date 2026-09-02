import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Phone, 
  AlertCircle, 
  X, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Printer,
  Download,
  Building2,
  Calendar,
  UserCheck
} from 'lucide-react';

interface UploadPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const UploadPage: React.FC<UploadPageProps> = ({ navigate, onOpenCallModal }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isPrinting, setIsPrinting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Customer
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: 'TX',
    zipCode: '',

    // Step 2: Provider & Account
    provider: 'xfinity',
    otherProviderName: '',
    accountNumber: '',
    nameOnAccount: '',
    accountPin: '',
    currentMonthlyBill: '140',
    services: {
      internet: true,
      mobile: false,
      tv: true,
      phone: false,
      bundle: true
    },

    // Step 3: Bill upload & preferences
    statementDate: new Date().toISOString().split('T')[0],
    preferences: '',
    
    // Step 4: LOA & Consents (CRITICAL: NOT PRE-CHECKED)
    digitalSignature: '',
    agreementConsent: false, // NOT PRE-CHECKED
    marketingConsent: false  // NOT PRE-CHECKED & NOT BUNDLED
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const providerNames: { [key: string]: string } = {
    xfinity: 'Xfinity / Comcast',
    att: 'AT&T / DirecTV',
    spectrum: 'Spectrum / Charter',
    verizon: 'Verizon Wireless & Fios',
    cox: 'Cox Communications',
    frontier: 'Frontier Communications',
    centurylink: 'CenturyLink / Brightspeed',
    tmobile: 'T-Mobile Home Internet & Mobile',
    optimum: 'Optimum / Suddenlink',
    other: 'Other Provider'
  };

  const getEffectiveProviderName = () => {
    if (formData.provider === 'other' && formData.otherProviderName) {
      return formData.otherProviderName;
    }
    return providerNames[formData.provider] || formData.provider;
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newFiles = Array.from(files).map((f) => ({
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateStep1 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full legal name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email address is required.';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid phone number is required.';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Service address is required.';
    if (!formData.city.trim()) errors.city = 'City is required.';
    if (!formData.zipCode.trim()) errors.zipCode = 'ZIP code is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.accountNumber.trim()) errors.accountNumber = 'Account number is required.';
    if (formData.provider === 'other' && !formData.otherProviderName.trim()) {
      errors.otherProviderName = 'Please enter your provider name.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = () => {
    const errors: { [key: string]: string } = {};
    if (uploadedFiles.length === 0) {
      errors.files = 'Please attach at least one page or screenshot of your recent bill statement.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep4 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.digitalSignature.trim()) {
      errors.digitalSignature = 'Please type your full legal name as an electronic signature.';
    }
    if (!formData.agreementConsent) {
      errors.agreementConsent = 'You must authorize Bill Less America and agree to the 25% verified savings fee terms to proceed.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo(0, 0);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      window.scrollTo(0, 0);
    } else if (currentStep === 3 && validateStep3()) {
      // Pre-fill signature if empty
      if (!formData.digitalSignature) {
        setFormData((prev) => ({ ...prev, digitalSignature: prev.fullName }));
      }
      setCurrentStep(4);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    const generatedId = `BLA-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handlePrintLOA = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 space-y-10">
      {/* Header */}
      {!isSubmitted && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
            Secure Client Intake & Authorization
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0D1B2A]">
            Get Started with Bill Less America
          </h1>
          <p className="text-sm text-[#64707A]">
            We negotiate on your behalf. Simple success-based pricing: our fee is <strong>25% of verified savings</strong>. No qualifying savings = No success fee.
          </p>

          {/* Progress Indicator */}
          <div className="pt-6 pb-2">
            <div className="grid grid-cols-4 gap-2 text-xs font-bold">
              <div className={`p-2 rounded-xl border text-center transition-all ${
                currentStep >= 1 ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]' : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}>
                <span>1. Customer Info</span>
              </div>
              <div className={`p-2 rounded-xl border text-center transition-all ${
                currentStep >= 2 ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]' : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}>
                <span>2. Provider & Acct</span>
              </div>
              <div className={`p-2 rounded-xl border text-center transition-all ${
                currentStep >= 3 ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]' : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}>
                <span>3. Bill Upload</span>
              </div>
              <div className={`p-2 rounded-xl border text-center transition-all ${
                currentStep >= 4 ? 'bg-[#D71920] text-white border-[#D71920]' : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}>
                <span>4. LOA & Consent</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMITTED CONFIRMATION VIEW */}
      {isSubmitted ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-md space-y-8">
          <div className="text-center space-y-3">
            <div className="size-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-10" />
            </div>
            <span className="inline-block bg-emerald-50 text-emerald-800 font-black text-xs px-3 py-1 rounded-full border border-emerald-200">
              Authorization Signed & Intake Received
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1B2A]">
              We're Ready to Negotiate Your Bill!
            </h2>
            <p className="text-sm text-[#64707A] max-w-md mx-auto">
              Your intake has been assigned Reference ID: <strong className="text-[#0D1B2A]">{referenceId}</strong>. A copy of your signed Letter of Authorization has been archived.
            </p>
          </div>

          {/* Details Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4">
            <h3 className="text-sm font-bold text-[#0D1B2A] uppercase tracking-wider">
              Submission Summary
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-500">Authorized Account Holder:</span>
                <p className="font-bold text-[#0D1B2A]">{formData.fullName}</p>
              </div>
              <div>
                <span className="text-slate-500">Service Provider:</span>
                <p className="font-bold text-[#0D1B2A]">{getEffectiveProviderName()}</p>
              </div>
              <div>
                <span className="text-slate-500">Account Number:</span>
                <p className="font-bold text-[#0D1B2A]">{formData.accountNumber}</p>
              </div>
              <div>
                <span className="text-slate-500">Service Address:</span>
                <p className="font-bold text-[#0D1B2A]">{formData.streetAddress}, {formData.city}, {formData.state} {formData.zipCode}</p>
              </div>
              <div>
                <span className="text-slate-500">Pricing Model:</span>
                <p className="font-bold text-emerald-700">25% of Verified Savings ($0 if no savings)</p>
              </div>
              <div>
                <span className="text-slate-500">Attached Statements:</span>
                <p className="font-bold text-[#0D1B2A]">{uploadedFiles.length} file(s) attached</p>
              </div>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0D1B2A]">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-[#0D1B2A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0D1B2A]">Forensic Audit & Benchmark (Today)</p>
                  <p className="text-xs text-[#64707A]">Our specialists verify all line items, promotional expiration dates, and competitor benchmark rates in your ZIP code.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-[#D71920] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0D1B2A]">Live Carrier Negotiation (Within 24–48 Hours)</p>
                  <p className="text-xs text-[#64707A]">Using your signed Letter of Authorization, our team speaks directly with {getEffectiveProviderName()} loyalty and retention teams to apply available discounts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0D1B2A]">Verified Savings Report & Fee Settlement</p>
                  <p className="text-xs text-[#64707A]">We send you carrier confirmation of your lower bill. Only then do you authorize the one-time 25% fee. If no savings are obtained, your fee is $0.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrintLOA}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-[#0D1B2A] hover:bg-slate-50 cursor-pointer"
            >
              <Printer className="size-4 text-slate-500" />
              <span>Print / Save Signed LOA</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/negotiation-result')}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#0D1B2A] px-6 py-3 text-xs font-bold text-white hover:bg-[#1B314B] cursor-pointer"
            >
              <span>See Sample Negotiation Result</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      ) : (
        /* MULTI-STEP FORM */
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* STEP 1: CUSTOMER INFORMATION */}
          {currentStep === 1 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-[#0D1B2A]">Step 1: Customer Contact & Service Address</h2>
                <p className="text-xs text-[#64707A] mt-1">
                  Enter the primary account holder contact details and service address where bills are delivered.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                      formErrors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                      formErrors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Phone Number (Mobile preferred for status updates) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(832) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                      formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Street Service Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="2827 Dunvale Rd, Apt 4B"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                      formErrors.streetAddress ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.streetAddress && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.streetAddress}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Houston"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                      formErrors.city ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.city && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.city}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring bg-white"
                    >
                      <option value="TX">Texas (TX)</option>
                      <option value="CA">California (CA)</option>
                      <option value="FL">Florida (FL)</option>
                      <option value="NY">New York (NY)</option>
                      <option value="PA">Pennsylvania (PA)</option>
                      <option value="IL">Illinois (IL)</option>
                      <option value="OH">Ohio (OH)</option>
                      <option value="GA">Georgia (GA)</option>
                      <option value="NC">North Carolina (NC)</option>
                      <option value="MI">Michigan (MI)</option>
                      <option value="CO">Colorado (CO)</option>
                      <option value="AZ">Arizona (AZ)</option>
                      <option value="WA">Washington (WA)</option>
                      <option value="OTHER">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="77063"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                        formErrors.zipCode ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.zipCode && (
                      <p className="text-[11px] text-red-600 mt-1">{formErrors.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#0D1B2A] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1B314B] transition-colors cursor-pointer"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PROVIDER & ACCOUNT DETAILS */}
          {currentStep === 2 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-[#0D1B2A]">Step 2: Provider & Account Details</h2>
                <p className="text-xs text-[#64707A] mt-1">
                  Specify the service provider you want us to negotiate with and your account identifier.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Service Provider *
                  </label>
                  <select
                    value={formData.provider}
                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring bg-white"
                  >
                    <option value="xfinity">Xfinity / Comcast</option>
                    <option value="att">AT&T / DirecTV</option>
                    <option value="spectrum">Spectrum / Charter</option>
                    <option value="verizon">Verizon Wireless & Fios</option>
                    <option value="cox">Cox Communications</option>
                    <option value="frontier">Frontier Communications</option>
                    <option value="centurylink">CenturyLink / Brightspeed</option>
                    <option value="tmobile">T-Mobile Home Internet & Mobile</option>
                    <option value="optimum">Optimum / Suddenlink</option>
                    <option value="other">Other Provider</option>
                  </select>
                </div>

                {formData.provider === 'other' && (
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Provider Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mediacom, Breezeline, Sparklight"
                      value={formData.otherProviderName}
                      onChange={(e) => setFormData({ ...formData, otherProviderName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring"
                    />
                    {formErrors.otherProviderName && (
                      <p className="text-[11px] text-red-600 mt-1">{formErrors.otherProviderName}</p>
                    )}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Account Number * (As shown on statement)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 8495-201-928"
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                      className={`w-full rounded-xl border p-3 text-sm focus-ring ${
                        formErrors.accountNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.accountNumber && (
                      <p className="text-[11px] text-red-600 mt-1">{formErrors.accountNumber}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                      Name on Statement (If different from yours)
                    </label>
                    <input
                      type="text"
                      placeholder="Leave blank if same as above"
                      value={formData.nameOnAccount}
                      onChange={(e) => setFormData({ ...formData, nameOnAccount: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring"
                    />
                  </div>
                </div>

                {/* Account Security PIN with Strict Security Note */}
                <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                    <Lock className="size-4 text-amber-700" />
                    <span>Carrier Telephone Security PIN / Passcode (Optional but recommended)</span>
                  </div>
                  <input
                    type="password"
                    maxLength={10}
                    placeholder="4 to 6 digit carrier phone passcode"
                    value={formData.accountPin}
                    onChange={(e) => setFormData({ ...formData, accountPin: e.target.value })}
                    className="w-full sm:w-64 rounded-xl border border-amber-300 p-2.5 text-sm bg-white focus-ring"
                  />
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    <strong>Notice:</strong> This is the verbal phone security PIN or passcode used by carrier representatives to authenticate authorized callers. <strong>We NEVER ask for, store, or accept your web portal password.</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Estimated Current Monthly Amount ($)
                  </label>
                  <div className="relative w-full sm:w-48">
                    <span className="absolute left-3 top-3 text-sm font-bold text-slate-400">$</span>
                    <input
                      type="number"
                      value={formData.currentMonthlyBill}
                      onChange={(e) => setFormData({ ...formData, currentMonthlyBill: e.target.value })}
                      className="w-full pl-7 rounded-xl border border-slate-300 p-3 text-sm focus-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-2">
                    Services on this Account:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { key: 'internet', label: 'Internet / Fiber' },
                      { key: 'mobile', label: 'Mobile / Phone' },
                      { key: 'tv', label: 'Cable / TV' },
                      { key: 'phone', label: 'Landline' },
                      { key: 'bundle', label: 'Bundle' }
                    ].map((s) => (
                      <label 
                        key={s.key}
                        className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer text-xs font-bold text-[#0D1B2A]"
                      >
                        <input
                          type="checkbox"
                          checked={(formData.services as any)[s.key]}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              services: {
                                ...formData.services,
                                [s.key]: e.target.checked
                              }
                            });
                          }}
                          className="size-4 rounded text-[#D71920] accent-[#D71920]"
                        />
                        <span>{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold text-[#0D1B2A] hover:bg-slate-50 cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#0D1B2A] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1B314B] transition-colors cursor-pointer"
                >
                  <span>Continue to Step 3</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: BILL UPLOAD & PREFERENCES */}
          {currentStep === 3 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-[#0D1B2A]">Step 3: Upload Statement & Preferences</h2>
                <p className="text-xs text-[#64707A] mt-1">
                  Attach a PDF or image of your most recent bill statement.
                </p>
              </div>

              {/* Drag and Drop Zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  handleFileUpload(e.dataTransfer.files);
                }}
                className={`relative border-2 border-dashed rounded-3xl p-8 text-center transition-all ${
                  dragOver
                    ? 'border-[#D71920] bg-red-50/50 scale-[1.01]'
                    : formErrors.files
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-slate-300 bg-[#FAFBFD] hover:border-slate-400'
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept=".pdf,image/png,image/jpeg,image/webp"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />

                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="size-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#D71920]">
                    <Upload className="size-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D1B2A]">
                      Drag and drop your bill statement here
                    </p>
                    <p className="text-xs text-[#64707A] mt-0.5">
                      Supports PDF, PNG, JPG (Max 25MB). Or click to browse files.
                    </p>
                  </div>
                  <span className="inline-block text-xs bg-slate-200 font-bold px-3 py-1.5 rounded-full text-[#0D1B2A]">
                    Select Bill File
                  </span>
                </div>
              </div>

              {formErrors.files && (
                <p className="text-xs font-bold text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-4" />
                  <span>{formErrors.files}</span>
                </p>
              )}

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">
                    Attached Files ({uploadedFiles.length})
                  </p>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#0D1B2A]"
                      >
                        <div className="flex items-center gap-2 truncate pr-4">
                          <FileText className="size-4 text-[#D71920] shrink-0" />
                          <span className="truncate">{file.name}</span>
                          <span className="text-slate-400 font-normal">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-slate-400 hover:text-red-600 p-1 cursor-pointer"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Statement Date
                  </label>
                  <input
                    type="date"
                    value={formData.statementDate}
                    onChange={(e) => setFormData({ ...formData, statementDate: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                    Special Negotiation Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Keep my 500Mbps speed; don't remove HBO"
                    value={formData.preferences}
                    onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm focus-ring"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold text-[#0D1B2A] hover:bg-slate-50 cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#0D1B2A] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1B314B] transition-colors cursor-pointer"
                >
                  <span>Continue to Step 4 (LOA)</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: LETTER OF AUTHORIZATION (LOA) & CONSENTS */}
          {currentStep === 4 && (
            <div className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-md space-y-6">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-[#0D1B2A]">Step 4: Digital Letter of Authorization (LOA)</h2>
                  <p className="text-xs text-[#64707A] mt-0.5">
                    Federal and state rules require your explicit authorization for us to represent you in negotiations.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePrintLOA}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D1B2A] border border-slate-300 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg shrink-0 cursor-pointer"
                >
                  <Printer className="size-3.5 text-slate-500" />
                  <span>Download / Print LOA</span>
                </button>
              </div>

              {/* Formal LOA Document Preview */}
              <div className="rounded-2xl border-2 border-slate-200 bg-slate-50/70 p-6 font-serif text-slate-800 text-xs sm:text-sm leading-relaxed space-y-4 shadow-inner">
                <div className="border-b border-slate-200 pb-3 flex justify-between items-start">
                  <div>
                    <p className="font-sans font-black text-base text-[#0D1B2A]">LETTER OF AUTHORIZATION (LOA)</p>
                    <p className="font-sans text-[11px] text-[#64707A]">Limited Representative Authority for Rate Review & Negotiation</p>
                  </div>
                  <div className="text-right font-sans text-xs">
                    <span className="font-bold text-[#0D1B2A]">Date:</span> {formData.statementDate || new Date().toLocaleDateString()}
                  </div>
                </div>

                <div className="space-y-1 font-sans text-xs">
                  <p><strong>To:</strong> {getEffectiveProviderName()}</p>
                  <p><strong>Account Holder:</strong> {formData.nameOnAccount || formData.fullName || '[Account Holder Name]'}</p>
                  <p><strong>Account Number:</strong> {formData.accountNumber || '[Account Number]'}</p>
                  <p><strong>Service Address:</strong> {formData.streetAddress}, {formData.city}, {formData.state} {formData.zipCode}</p>
                </div>

                <p>
                  I, the undersigned account holder or authorized representative for the account identified above, hereby designate and grant limited authority to <strong>Bill Less America</strong> (and its designated billing specialists) to act as my authorized representative solely for the purposes of:
                </p>

                <ol className="list-decimal pl-5 space-y-1 text-xs">
                  <li>Inquiring into current service rates, promotional discounts, retention packages, and loyalty credits.</li>
                  <li>Requesting billing adjustments, fee removals, and rate corrections on my behalf.</li>
                  <li>Reviewing statement line items, equipment rental records, and plan optimization options.</li>
                </ol>

                <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                  <strong>Scope Limitation:</strong> Bill Less America is NOT authorized to terminate, disconnect, or port primary service, nor to authorize credit checks or purchase new hardware without my prior approval.
                </p>

                <div className="pt-2 font-sans text-xs flex justify-between items-end">
                  <div>
                    <p className="font-bold text-[#0D1B2A]">Authorized Representative:</p>
                    <p className="text-slate-600">Bill Less America • 2827 Dunvale Rd, Houston, TX 77063</p>
                    <p className="text-slate-600">Hotline: (832) 554-6367 • support@billlessamerica.com</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#0D1B2A]">Customer Electronic Signature:</p>
                    <p className="font-mono text-emerald-800 text-sm font-bold underline">
                      {formData.digitalSignature || '[Sign Below]'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Signature Input */}
              <div>
                <label className="block text-xs font-bold text-[#0D1B2A] mb-1">
                  Type Full Legal Name (Electronic Signature) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.digitalSignature}
                  onChange={(e) => setFormData({ ...formData, digitalSignature: e.target.value })}
                  className={`w-full rounded-xl border p-3 text-sm focus-ring font-medium ${
                    formErrors.digitalSignature ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {formErrors.digitalSignature && (
                  <p className="text-[11px] text-red-600 mt-1">{formErrors.digitalSignature}</p>
                )}
              </div>

              {/* CONSENTS SECTION - STRICT COMPLIANCE:
                  1. Customer Agreement Consent: NOT PRE-CHECKED
                  2. Marketing Consent: NOT PRE-CHECKED & NOT BUNDLED
              */}
              <div className="space-y-4 pt-2">
                {/* 1. Customer Agreement Consent (MANDATORY, NOT PRE-CHECKED) */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  formData.agreementConsent ? 'bg-emerald-50/40 border-emerald-300' : 'bg-white border-slate-300'
                }`}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="agreement-consent-checkbox"
                      type="checkbox"
                      checked={formData.agreementConsent}
                      onChange={(e) => setFormData({ ...formData, agreementConsent: e.target.checked })}
                      className="mt-1 size-5 rounded text-[#D71920] accent-[#D71920] shrink-0"
                    />
                    <div className="space-y-1 text-xs text-[#0D1B2A] leading-relaxed">
                      <p className="font-bold">
                        Customer Authorization & Success-Based Fee Agreement *
                      </p>
                      <p className="text-[#4A5568]">
                        I authorize Bill Less America to contact my service provider to negotiate rates on my behalf. I confirm that I am the account holder or authorized representative. I understand and agree that <strong>our one-time service fee is 25% of the verified savings successfully obtained</strong> for my account. <strong>If no qualifying savings are obtained, there is no fee ($0).</strong>
                      </p>
                    </div>
                  </label>
                  {formErrors.agreementConsent && (
                    <p className="text-xs font-bold text-red-600 mt-2 pl-8 flex items-center gap-1">
                      <AlertCircle className="size-4" />
                      <span>{formErrors.agreementConsent}</span>
                    </p>
                  )}
                </div>

                {/* 2. Marketing Consent (OPTIONAL, NOT PRE-CHECKED, NOT BUNDLED) */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="marketing-consent-checkbox"
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                      className="mt-1 size-5 rounded text-slate-700 accent-slate-700 shrink-0"
                    />
                    <div className="space-y-1 text-xs text-[#0D1B2A] leading-relaxed">
                      <p className="font-bold text-slate-800">
                        Optional: Communications & Savings Tips
                      </p>
                      <p className="text-[#64707A]">
                        I agree to receive automated or text/email updates regarding my bill negotiation progress, renewal milestones, and periodic household money-saving tips. <em>(Consent is completely optional, not bundled with service, and you may unsubscribe at any time).</em>
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold text-[#0D1B2A] hover:bg-slate-50 cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[#D71920] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-red-200 hover:bg-[#b5141a] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
                >
                  <span>Submit Authorization & Start Negotiation</span>
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Trust & Security Footnote */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-[#D71920]" />
          <span>Texas Data Privacy Compliant • 256-Bit Encrypted Intake • Zero Data Selling</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-[#0D1B2A]">
          <Phone className="size-4 text-[#D71920]" />
          <span>Questions? Call (832) 554-6367</span>
        </div>
      </div>
    </div>
  );
};
