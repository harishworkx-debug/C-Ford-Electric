import { ShieldCheck, Flame, Zap, Award } from 'lucide-react';
import { IMAGES } from '@/data/images';

export function LandingAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Text Column */}
          <div>
            <p className="eyebrow text-gold-600">
              <span className="h-px w-6 bg-current opacity-60" />
              Master Craftsmanship & Local Standards
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Local Electrical Expertise Grounded in Oklahoma City
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Electrical work in the Oklahoma City metropolitan area requires specialized understanding
              of local architecture, municipal permitting requirements, and severe regional weather demands.
              From older mid-century homes in central OKC to modern commercial developments, proper electrical
              engineering protects property value and personal safety.
            </p>

            {/* Local Realities Grid */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 rounded-xl border border-navy-100 bg-navy-50/50 p-4">
                <Flame className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h3 className="text-sm font-bold text-navy-900">
                    Oklahoma Climate & Peak Load Demands
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy-600">
                    Oklahoma summer heatwaves push central air conditioning circuits to extreme loads.
                    Proper wire sizing, breaker ratings, and dedicated circuits prevent nuisance tripping
                    and dangerous conductor overheating.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-navy-100 bg-navy-50/50 p-4">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-bold text-navy-900">
                    Storm & Lightning Surge Vulnerabilities
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy-600">
                    Severe Oklahoma storms and power grid fluctuations can compromise external service
                    masts and meter enclosures. Whole-home surge protection and robust grounding electrodes
                    safeguard expensive appliances and modern electronics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-navy-100 bg-navy-50/50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="text-sm font-bold text-navy-900">
                    Full Oklahoma CIB & NEC Compliance
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy-600">
                    All electrical services comply with Oklahoma Construction Industries Board (CIB)
                    regulations and the latest National Electrical Code (NEC). Every installation is inspected,
                    tested, and clearly labeled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images Column */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={IMAGES.panelMultimeter}
                alt="Electrician testing circuit breaker voltage with a multimeter in Oklahoma City, OK"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={IMAGES.wiring}
                alt="Clean electrical wiring and branch circuits installed to code in Oklahoma City"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white shadow-card">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-gold-400" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    Master Electrician Direct Oversight
                  </h4>
                  <p className="text-xs text-navy-300">
                    You work directly with a licensed Master Electrician — no sub-contractors or third-party call centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
