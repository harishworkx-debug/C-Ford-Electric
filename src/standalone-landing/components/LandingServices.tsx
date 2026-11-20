import { Gauge, Wrench, Plug, Zap, Lightbulb, Building2, Check, ArrowRight } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

interface LandingServicesProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICE_ICONS: Record<string, typeof Zap> = {
  gauge: Gauge,
  wrench: Wrench,
  plug: Plug,
  zap: Zap,
  lightbulb: Lightbulb,
  building: Building2,
};

export function LandingServices({ onSelectService }: LandingServicesProps) {
  const handleServiceClick = (serviceName: string) => {
    onSelectService(serviceName);
    const element = document.querySelector('#contact');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-page">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-600 justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Verified Electrical Solutions
            <span className="h-px w-6 bg-current opacity-60" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Professional Electrical Services in Oklahoma City
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            From emergency breaker repairs to high-capacity 200A panel upgrades and commercial distribution,
            every service is executed to current National Electrical Code (NEC) standards by a licensed Master Electrician.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_DATA.services.map((service) => {
            const Icon = SERVICE_ICONS[service.iconKey] || Zap;
            return (
              <div
                key={service.id}
                className="card flex flex-col justify-between border border-navy-100 bg-white p-7 transition-all duration-300 hover:border-gold-300 hover:shadow-cardHover"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-sm">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-navy-600">
                    {service.short}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-navy-100/70 pt-5 text-xs text-navy-700">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.name)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-gold-500 hover:text-navy-950"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
