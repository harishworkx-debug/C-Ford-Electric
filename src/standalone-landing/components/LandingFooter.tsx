import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white pt-14 pb-12">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 text-navy-950 shadow-sm">
                <Zap className="h-5 w-5 fill-navy-950" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                {LANDING_DATA.identity}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-navy-300 max-w-sm">
              Professional residential, commercial, and industrial electrical services throughout Oklahoma City and the surrounding metro area. Completed to National Electrical Code (NEC) standards by a licensed Master Electrician.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Quick Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-navy-300">
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Electrical Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  Local Craftsmanship
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-gold-400 transition-colors">
                  Oklahoma City Metro Coverage
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  Request an Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Dispatch Column */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Contact & Location
            </p>
            <div className="space-y-2 text-xs text-navy-300">
              <a
                href={LANDING_DATA.phoneHref}
                className="flex items-center gap-2 font-bold text-white hover:text-gold-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                <span>{LANDING_DATA.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{LANDING_DATA.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-4 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {LANDING_DATA.identity}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
