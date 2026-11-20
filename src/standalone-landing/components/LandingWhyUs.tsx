import { ShieldCheck, Search, DollarSign, MapPin } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

const PILLAR_ICONS = [ShieldCheck, Search, DollarSign, MapPin];

export function LandingWhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-600 justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Dependable Service Standards
            <span className="h-px w-6 bg-current opacity-60" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Why Homeowners & Businesses Rely on Our Electricians
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Electrical systems demand rigorous technical precision and unwavering commitment to safety.
            Here is how we deliver lasting quality on every residential and commercial project.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_DATA.whyChooseUs.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-navy-50/40 p-7 transition-all duration-300 hover:border-gold-300 hover:bg-white hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400 shadow-sm">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
