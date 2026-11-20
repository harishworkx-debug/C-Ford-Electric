import { useState, useEffect } from 'react';
import { Phone, Zap, Menu, X } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 py-3 shadow-lg backdrop-blur-md border-b border-navy-800'
          : 'bg-navy-950/80 py-4 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        {/* Text Identity */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="group flex items-center gap-2.5 text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 text-navy-950 shadow-sm transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5 fill-navy-950" />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
              {LANDING_DATA.identity}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
              Licensed Master Electrician
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-navy-200 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Call Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={LANDING_DATA.phoneHref}
            className="btn-gold flex items-center gap-2 px-4 py-2.5 text-sm font-bold shadow-md"
          >
            <Phone className="h-4 w-4" />
            <span>{LANDING_DATA.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-navy-800 bg-navy-950 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-base font-medium text-navy-200 transition-colors hover:bg-white/5 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={LANDING_DATA.phoneHref}
                className="btn-gold flex w-full items-center justify-center gap-2 py-3 text-center text-sm font-bold"
              >
                <Phone className="h-4 w-4" />
                <span>Call {LANDING_DATA.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
