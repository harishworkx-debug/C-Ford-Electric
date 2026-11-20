import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { LANDING_DATA } from './data/landingData';
import { LandingHeader } from './components/LandingHeader';
import { LandingHero } from './components/LandingHero';
import { LandingServices } from './components/LandingServices';
import { LandingAbout } from './components/LandingAbout';
import { LandingServiceArea } from './components/LandingServiceArea';
import { LandingWhyUs } from './components/LandingWhyUs';
import { LandingFaq } from './components/LandingFaq';
import { LandingContact } from './components/LandingContact';
import { LandingFooter } from './components/LandingFooter';

export function StandaloneLandingPage() {
  const [selectedService, setSelectedService] = useState<string>(
    'Electrical Panel Upgrades (200A Service)'
  );

  useEffect(() => {
    // 1. Dynamic Isolated SEO Title
    const originalTitle = document.title;
    document.title = `${LANDING_DATA.identity}, OK | Professional Electrical Services & Repairs`;

    // 2. Dynamic Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    const landingDescContent = `Looking for a licensed electrician in Oklahoma City, OK? Professional electrical repairs, 200A panel upgrades, EV chargers, and wiring services. Call ${LANDING_DATA.phoneDisplay}.`;

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', landingDescContent);

    // 3. Dynamic Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute('href') : null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const siteOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    canonical.setAttribute('href', siteOrigin ? `${siteOrigin}/` : '/');

    // 4. Dynamic Isolated JSON-LD Structured Data
    const scriptId = 'standalone-landing-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: LANDING_DATA.identity,
      url: siteOrigin ? `${siteOrigin}/` : '/',
      telephone: LANDING_DATA.phoneDisplay,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: LANDING_DATA.address.street,
        addressLocality: LANDING_DATA.address.city,
        addressRegion: LANDING_DATA.address.state,
        postalCode: LANDING_DATA.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: LANDING_DATA.geo.lat,
        longitude: LANDING_DATA.geo.lng,
      },
      areaServed: LANDING_DATA.serviceAreas.map((a) => a.city),
    };

    script.textContent = JSON.stringify(schemaData);

    // Cleanup upon unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc !== null) {
        metaDesc.setAttribute('content', originalDesc);
      }
      if (canonical && originalCanonical !== null) {
        canonical.setAttribute('href', originalCanonical);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy-900 font-sans antialiased selection:bg-gold-200 selection:text-navy-950">
      {/* Header */}
      <LandingHeader />

      {/* Main Single-Page Sections */}
      <main>
        <LandingHero />
        <LandingServices onSelectService={(svc) => setSelectedService(svc)} />
        <LandingAbout />
        <LandingServiceArea />
        <LandingWhyUs />
        <LandingFaq />
        <LandingContact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* Sticky Mobile Call Floating Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-950/95 p-3 shadow-2xl backdrop-blur-md sm:hidden">
        <a
          href={LANDING_DATA.phoneHref}
          className="btn-gold flex w-full items-center justify-center gap-2.5 py-3 text-center text-sm font-extrabold shadow-lg"
        >
          <Phone className="h-4 w-4" />
          <span>Call {LANDING_DATA.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
