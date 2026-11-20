import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

interface LandingContactProps {
  selectedService?: string;
}

export function LandingContact({ selectedService }: LandingContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || 'Electrical Panel Upgrades (200A Service)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    // Simulate instant client confirmation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-600 justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Direct Communication & Scheduling
            <span className="h-px w-6 bg-current opacity-60" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Contact an Electrician in Oklahoma City
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Speak directly with a licensed Master Electrician. Call immediately for urgent electrical troubleshooting, or submit the form below to request an estimate on your project.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Phone & Base Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <a
              href={LANDING_DATA.phoneHref}
              className="group block rounded-2xl border-2 border-gold-400 bg-gradient-to-br from-navy-950 to-navy-900 p-6 text-white shadow-xl transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-navy-950 shadow-md">
                  <Phone className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                    Direct Master Electrician Line
                  </p>
                  <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {LANDING_DATA.phoneDisplay}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-navy-200 leading-relaxed border-t border-white/10 pt-3">
                Tap to call directly. We provide phone consultations to diagnose your electrical requirements and confirm schedule availability.
              </p>
            </a>

            {/* Address & Hours Card */}
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-6 shadow-card space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold-600 shrink-0" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-400">
                    Physical Dispatch Base
                  </h3>
                  <p className="mt-0.5 text-sm font-bold text-navy-950">
                    {LANDING_DATA.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-navy-100/80 pt-4">
                <Clock className="mt-0.5 h-5 w-5 text-gold-600 shrink-0" />
                <div className="w-full">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-400">
                    Business Hours
                  </h3>
                  <ul className="mt-1 divide-y divide-navy-100/50 text-xs">
                    {LANDING_DATA.hours.map((h, i) => (
                      <li key={i} className="flex justify-between py-1.5">
                        <span className="font-medium text-navy-700">{h.day}</span>
                        <span className="font-bold text-navy-950">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-navy-100/80 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Licensed, Insured & NEC Code Compliant in Oklahoma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Service Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 sm:text-2xl">
                Request an Electrical Estimate
              </h3>
              <p className="mt-1.5 text-xs text-navy-500 sm:text-sm">
                Fill out the details below. We will review your request and get back to you promptly.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="mt-4 text-xl font-extrabold text-navy-950">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    Your request regarding <span className="font-bold">{formData.service}</span> has been received.
                    A licensed Master Electrician will call you shortly at <span className="font-bold">{formData.phone}</span>.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-gold-700 underline hover:text-gold-800"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="landing-name" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                        Full Name *
                      </label>
                      <input
                        id="landing-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-1.5 w-full rounded-xl border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="landing-phone" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                        Phone Number *
                      </label>
                      <input
                        id="landing-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(405) 555-0123"
                        className="mt-1.5 w-full rounded-xl border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="landing-email" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                        Email Address (Optional)
                      </label>
                      <input
                        id="landing-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-1.5 w-full rounded-xl border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="landing-service" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                        Service Needed *
                      </label>
                      <select
                        id="landing-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        {LANDING_DATA.services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="landing-message" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                      Project Details / Issues Noticed
                    </label>
                    <textarea
                      id="landing-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are experiencing (e.g. breaker tripping, adding 200A panel, EV outlet location)..."
                      className="mt-1.5 w-full rounded-xl border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-navy flex w-full items-center justify-center gap-2 py-3.5 text-sm font-bold disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-gold-400" />
                          <span>Submit Electrical Service Request</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-navy-400">
                      Your information is never shared. Direct phone scheduling at {LANDING_DATA.phoneDisplay}.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
