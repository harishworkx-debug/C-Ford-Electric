import { MapPin, CheckCircle } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

export function LandingServiceArea() {
  return (
    <section id="service-area" className="bg-navy-50/50 py-20 sm:py-28">
      <div className="container-page">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-600 justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Metropolitan Coverage
            <span className="h-px w-6 bg-current opacity-60" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Serving Oklahoma City & Surrounding Metro Communities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Centrally based in Oklahoma City, providing responsive electrical service across the entire
            metro area. Contact us with your address to confirm immediate dispatch availability.
          </p>
        </div>

        {/* Content & Map Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Communities List */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-bold text-navy-950">
                <MapPin className="h-5 w-5 text-gold-500" />
                Service Areas & ZIP Codes
              </h3>
              <p className="mt-2 text-xs text-navy-500 leading-relaxed">
                Residential and commercial electrical service coverage across Oklahoma County and neighboring metro communities:
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {LANDING_DATA.serviceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-colors ${
                      area.highlight
                        ? 'border border-gold-300 bg-gold-50/60 font-bold text-navy-950'
                        : 'border border-navy-50 bg-navy-50/40 text-navy-700 hover:bg-navy-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`h-3.5 w-3.5 ${area.highlight ? 'text-gold-600' : 'text-emerald-600'}`} />
                      <span className="font-semibold">{area.city}, OK</span>
                    </div>
                    <span className="font-mono text-[11px] text-navy-500">{area.zip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-navy-100 pt-4 text-center">
                <p className="text-xs text-navy-600">
                  Don't see your specific town? Call <a href={LANDING_DATA.phoneHref} className="font-bold text-navy-950 underline hover:text-gold-600">{LANDING_DATA.phoneDisplay}</a> to check schedule availability.
                </p>
              </div>
            </div>
          </div>

          {/* Clean Google Map Embed (Geographic City Embed Only) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
              <div className="border-b border-navy-100 bg-navy-950 px-5 py-3 text-white">
                <p className="text-xs font-bold tracking-wide uppercase text-gold-400">
                  Oklahoma City Metropolitan Service Region
                </p>
              </div>
              <div className="relative h-[420px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104084.72121703666!2d-97.60830424564244!3d35.4675602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8f281%3A0x33e80dae4c27778e!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing Oklahoma City and surrounding metro service area"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
