import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';
import { IMAGES } from '@/data/images';

export function LandingHero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
    <section id="top" className="relative isolate overflow-hidden bg-navy-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background Image & Contrast Gradients */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.heroPanel}
          alt="Licensed electrician troubleshooting circuit breaker panel in Oklahoma City, OK"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm sm:text-sm">
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            Licensed Master Electrician • Oklahoma City Metro
          </div>

          {/* Primary H1 Heading */}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {LANDING_DATA.heroHeadline}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-relaxed text-navy-200 sm:text-xl">
            {LANDING_DATA.heroSubheadline}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={LANDING_DATA.phoneHref}
              className="btn-gold flex items-center justify-center gap-2.5 px-6 py-4 text-base font-extrabold shadow-xl transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" />
              <span>Call {LANDING_DATA.phoneDisplay}</span>
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-outline flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white border-white/20 hover:bg-white/10"
            >
              <span>Request Service Online</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Meta Information Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-navy-300 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold-400" />
              {LANDING_DATA.fullLocation}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold-400" />
              Mon–Fri 8:00 AM – 5:30 PM
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Verified 5.0 Google Review Rating
            </span>
          </div>
        </div>

        {/* Trust Badges Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {LANDING_DATA.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-gold-400/40"
            >
              <CheckCircle2 className="h-5 w-5 text-gold-400" />
              <h2 className="mt-2 text-sm font-bold text-white">{badge.title}</h2>
              <p className="mt-1 text-xs text-navy-300">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
