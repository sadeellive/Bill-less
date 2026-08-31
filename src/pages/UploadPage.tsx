import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  PhoneCall, 
  Trash2,
  Sparkles,
  Check
} from 'lucide-react';
import { providersList } from '../data/siteContent';

interface UploadPageProps {
  navigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const UploadPage: React.FC<UploadPageProps> = ({ navigate, onOpenCallModal }) => {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState('xfinity');
  const [serviceType, setServiceType] = useState('internet');
  const [fileAttached, setFileAttached] = useState<string | null>(null);
  const [isSampleLoaded, setIsSampleLoaded] = useState(false);
  const [householdNotes, setHouseholdNotes] = useState('');
  const [hasOwnedEquipment, setHasOwnedEquipment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'single' | 'household'>('single');
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileAttached(e.target.files[0].name);
      setIsSampleLoaded(false);
    }
  };

  const handleLoadSample = () => {
    setFileAttached('Sample_Xfinity_Residential_Statement_Feb2026.pdf');
    setIsSampleLoaded(true);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Intake Portal
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Start Your Independent Bill Review
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Share your statement securely. We read every line and prepare a plain-language audit package for your approval.
        </p>

        {/* Wizard Steps indicator */}
        {!submitted && (
          <div className="mt-8 flex items-center justify-center gap-2 max-w-md mx-auto">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`h-2 w-full rounded-full transition-colors ${
                  step >= s ? 'bg-teal' : 'bg-muted'
                }`}></div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Main Wizard Form */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        {!submitted ? (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            {/* Step 1: Provider & Service */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Step 1: Select Your Service & Carrier
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Which utility statement are we reviewing today?
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'internet', label: 'Internet & WiFi' },
                    { id: 'wireless', label: 'Cell Phone' },
                    { id: 'tv', label: 'Cable / TV' },
                    { id: 'bundle', label: 'Multi-Service' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        serviceType === s.id
                          ? 'border-teal bg-teal/10 text-teal-foreground ring-1 ring-teal'
                          : 'border-border bg-background text-foreground hover:bg-muted'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="select-provider-dropdown" className="block text-xs font-semibold text-foreground mb-1.5">
                    Carrier / Provider Name
                  </label>
                  <select
                    id="select-provider-dropdown"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus-ring"
                  >
                    {providersList.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                    <option value="other">Other U.S. Carrier</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 flex items-center gap-2"
                  >
                    <span>Continue to Document Intake</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Upload Statement */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Step 2: Upload Your Recent Statement
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload a PDF or picture of your bill (all pages). Sensitive bank details are sanitized automatically.
                  </p>
                </div>

                {/* Upload Drag & Drop Area */}
                {!fileAttached ? (
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-teal/60 transition-colors bg-muted/20">
                    <UploadCloud className="size-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm font-bold text-foreground">
                      Drag and drop your PDF statement here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports PDF, PNG, JPG (up to 25MB)
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <label className="cursor-pointer px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90">
                        <span>Browse Files</span>
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          onChange={handleFileUpload}
                          className="sr-only"
                        />
                      </label>

                      <span className="text-xs text-muted-foreground">or</span>

                      <button
                        type="button"
                        onClick={handleLoadSample}
                        className="px-4 py-2 rounded-lg border border-teal/40 bg-teal/10 text-teal-foreground text-xs font-bold hover:bg-teal/20 flex items-center gap-1.5"
                      >
                        <Sparkles className="size-3.5 text-teal" />
                        <span>Load Sample Bill</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-teal/40 bg-teal/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center">
                        <FileText className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">{fileAttached}</p>
                        <p className="text-[0.7rem] text-teal font-semibold">
                          {isSampleLoaded ? 'Sample Statement Loaded' : 'Document Ready for Review'}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFileAttached(null)}
                      className="p-1.5 text-muted-foreground hover:text-rose-600 rounded-md"
                      title="Remove file"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted flex items-center gap-1.5"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    disabled={!fileAttached}
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2"
                  >
                    <span>Continue to Usage Questions</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Usage details */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Step 3: What Does Your Household Actually Use?
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Help us identify unnecessary add-ons or hardware you don't need.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-border cursor-pointer hover:bg-muted/40">
                    <input
                      type="checkbox"
                      checked={hasOwnedEquipment}
                      onChange={(e) => setHasOwnedEquipment(e.target.checked)}
                      className="size-4 rounded text-teal focus:ring-teal mt-0.5"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">
                        We are open to purchasing our own modem/router to eliminate monthly rentals
                      </span>
                      <span className="text-muted-foreground">
                        Most retail modems pay for themselves in 6 to 9 months.
                      </span>
                    </div>
                  </label>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Any specific notes about your bill or service? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={householdNotes}
                      onChange={(e) => setHouseholdNotes(e.target.value)}
                      placeholder="e.g. We only have 2 people working from home; we rarely watch live sports; our bill jumped $35 last month unexpectedly."
                      className="w-full rounded-xl border border-input bg-background p-3 text-xs focus-ring"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted flex items-center gap-1.5"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 flex items-center gap-2"
                  >
                    <span>Continue to Review Tier</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Authorization & Finalization */}
            {step === 4 && (
              <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Step 4: Select Service Tier & Authorize Audit
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Flat one-time fee. No recurring charges or commissions.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div
                    onClick={() => setSelectedPlan('single')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlan === 'single'
                        ? 'border-teal bg-teal/5 ring-2 ring-teal/50'
                        : 'border-border bg-background hover:bg-muted/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-foreground">Single Bill Review</span>
                      <span className="font-display font-extrabold text-lg text-foreground">$29</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Full line-by-line breakdown and draft letter for 1 statement.
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedPlan('household')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlan === 'household'
                        ? 'border-teal bg-teal/5 ring-2 ring-teal/50'
                        : 'border-border bg-background hover:bg-muted/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-foreground">Household Review</span>
                      <span className="font-display font-extrabold text-lg text-foreground">$79</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Up to 4 statements + cross-bill duplicate subscription check.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/60 border border-border text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold">
                    <Lock className="size-4 text-teal" />
                    <span>Independent Authorization & Privacy</span>
                  </div>
                  <p>
                    By submitting, you request an independent line-by-line review from Bill Less America. We guarantee delivery within 1–2 business days. Nothing is communicated to your provider without your final written approval of the draft request.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted flex items-center gap-1.5"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-teal text-teal-foreground font-bold text-sm shadow hover:bg-teal/90"
                  >
                    Submit Statement for Review ({selectedPlan === 'single' ? '$29' : '$79'})
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="rounded-3xl border border-teal/40 bg-card p-8 sm:p-12 text-center shadow-xl space-y-5 animate-in zoom-in-95">
            <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-10" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
              Statement Received for Independent Review
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Your document <strong className="text-foreground">{fileAttached}</strong> has been securely logged for review under reference ID <strong className="font-mono text-teal">BLA-84920</strong>.
            </p>
            <div className="p-4 rounded-xl bg-muted/50 max-w-md mx-auto text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Carrier:</span>
                <span className="font-bold text-foreground uppercase">{provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Turnaround:</span>
                <span className="font-bold text-foreground">1 to 2 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Step:</span>
                <span className="font-bold text-teal">You will receive an alert when the draft request is ready for approval</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-xl bg-[#D71920] text-white font-bold text-sm shadow hover:bg-[#b5141a] transition-colors"
              >
                Return to Home
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setFileAttached(null);
                }}
                className="px-5 py-3 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted"
              >
                Submit another statement
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Call support footer banner */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="p-4 rounded-2xl bg-muted/60 border border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PhoneCall className="size-5 text-teal" />
            <p className="text-xs text-muted-foreground">
              Prefer to talk through your bill directly with a review analyst?
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCallModal}
            className="text-xs font-bold text-teal hover:underline shrink-0"
          >
            Call (832) 554-6367 →
          </button>
        </div>
      </section>
    </div>
  );
};
