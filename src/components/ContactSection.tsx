import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import {
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Send,
  Calendar
} from 'lucide-react';

interface ContactSectionProps {
  initialBudget?: string;
  initialServices?: string[];
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialBudget = '$5,000–$10,000/mo',
  initialServices = [],
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    budget: initialBudget,
    services: initialServices.length > 0 ? initialServices : ['Lead Generation'],
    notes: initialNotes
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync if initial props change
  React.useEffect(() => {
    if (initialBudget) setFormData((prev) => ({ ...prev, budget: initialBudget }));
  }, [initialBudget]);

  React.useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setFormData((prev) => ({ ...prev, services: initialServices }));
    }
  }, [initialServices]);

  React.useEffect(() => {
    if (initialNotes) setFormData((prev) => ({ ...prev, notes: initialNotes }));
  }, [initialNotes]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const toggleService = (title: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(title);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== title) };
      } else {
        return { ...prev, services: [...prev.services, title] };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (formData.services.length === 0) errs.services = 'Please select at least one capability';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`QM-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9FAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Initiate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Start a project with Quickmail Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Tell us about your customer acquisition goals. We evaluate every inquiry with technical rigor and respond with a preliminary strategy assessment within 24 business hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="py-8">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
                  <span>CONFIRMATION ID:</span>
                  <span className="text-neutral-950 font-bold">{submissionId}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-950">
                  Project Brief Received
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-neutral-900">{formData.fullName}</span>. We've logged your request for <span className="font-semibold text-neutral-900">{formData.company}</span>. A senior strategist from Quickmail Solutions LLC will review your metrics and reply to <span className="font-semibold text-neutral-900">{formData.email}</span> within 24 hours.
                </p>

                {/* Summary Box */}
                <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-2 text-neutral-700">
                  <div>
                    <span className="font-semibold text-neutral-900">Requested Capabilities: </span>
                    {formData.services.join(', ')}
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Monthly Budget Tier: </span>
                    {formData.budget}
                  </div>
                  {formData.website && (
                    <div>
                      <span className="font-semibold text-neutral-900">Website: </span>
                      {formData.website}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=Follow-up%20re:%20Brief%20${submissionId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Additional Assets via Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors ${
                          errors.company ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Website URL
                      </label>
                      <input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Multi-Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Capabilities Needed *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const active = formData.services.includes(s.title);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.title)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                              active
                                ? 'bg-neutral-950 text-white border-neutral-950'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            {s.title}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="mt-1 text-xs text-red-600">{errors.services}</p>
                    )}
                  </div>

                  {/* Monthly Ad Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Estimated Monthly Ad Spend
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors"
                    >
                      <option value="$2,500–$5,000/mo">$2,500 – $5,000 / month</option>
                      <option value="$5,000–$10,000/mo">$5,000 – $10,000 / month</option>
                      <option value="$10,000–$25,000/mo">$10,000 – $25,000 / month</option>
                      <option value="$25,000–$50,000/mo">$25,000 – $50,000 / month</option>
                      <option value="$50,000+/mo">$50,000+ / month (Enterprise)</option>
                    </select>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Target Goals or Current Bottlenecks
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Current LinkedIn CPL is too high, need dedicated landing pages and Google search ads to scale to 50 demo bookings per month..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-neutral-950 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 disabled:bg-neutral-400 transition-colors cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Zero spam. Strict client privacy. 24-hour turnaround SLA.</span>
                    </div>
                  </div>

                </div>
              </form>
            )}
          </div>

          {/* Right Column: Business Details Box (Exact prompt requirement) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Specific Business Details Box */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200 shadow-xs">
              <div className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Official Corporate Registry
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                {BUSINESS_INFO.name}
              </h3>
              <p className="mt-1 text-xs text-neutral-500">
                Registered Limited Liability Company · {BUSINESS_INFO.jurisdiction}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-4">
                
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                      Registered Principal Address
                    </div>
                    <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-900 hover:text-neutral-700 mt-1.5"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                      Direct Email Contact
                    </div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs font-mono text-neutral-800 hover:text-neutral-950 block mt-1 break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 hover:text-neutral-950 mt-1.5 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy email address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                      Operating Hours & SLA
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">
                      {BUSINESS_INFO.businessHours}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Client sprint updates delivered weekly.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 bg-neutral-900 text-white rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>PREFER A LIVE INTRO?</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  Schedule a 20-Minute Fit Call
                </h4>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Discuss your unit economics, historical ad benchmarks, and conversion targets directly with an acquisition strategist.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">Available slots this week</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Consultation%20Call%20Request%20-%20Quickmail%20Solutions`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <span>Request calendar link</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
