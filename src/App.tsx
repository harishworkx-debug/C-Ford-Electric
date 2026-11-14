import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCall } from '@/components/StickyMobileCall';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesOverviewPage } from '@/pages/ServicesOverviewPage';

import { ServiceAreasOverviewPage } from '@/pages/ServiceAreasOverviewPage';
import { LocationDetailPage } from '@/pages/LocationDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceLocationPage } from '@/pages/ServiceLocationPage';
import { BlogOverviewPage } from '@/pages/BlogOverviewPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';

const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/service-areas" element={<ServiceAreasOverviewPage />} />
          {LOCATION_SLUGS.map((slug) => (
            <Route
              key={slug}
              path={`/electrician-${slug}`}
              element={<LocationDetailPage slug={slug} />}
            />
          ))}
          {LOCATION_SLUGS.map((slug) => (
            <Route
              key={`legacy-service-area-${slug}`}
              path={`/service-areas/${slug}`}
              element={<Navigate to={`/electrician-${slug}`} replace />}
            />
          ))}
          {LOCATION_SLUGS.map((slug) => (
            <Route
              key={`slash-electrician-${slug}`}
              path={`/electrician/${slug}`}
              element={<Navigate to={`/electrician-${slug}`} replace />}
            />
          ))}
          {LOCATION_SLUGS.map((slug) => (
            <Route
              key={`direct-location-${slug}`}
              path={`/${slug}`}
              element={<Navigate to={`/electrician-${slug}`} replace />}
            />
          ))}
          {SERVICE_SLUGS.map((slug) => (
            <Route
              key={`direct-service-${slug}`}
              path={`/${slug}`}
              element={<Navigate to={`/${slug}-oklahoma-city-ok`} replace />}
            />
          ))}
          {SERVICE_SLUGS.map((slug) => (
            <Route
              key={`services-service-${slug}`}
              path={`/services/${slug}`}
              element={<Navigate to={`/${slug}-oklahoma-city-ok`} replace />}
            />
          ))}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogOverviewPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Service-location landing pages: /{service-slug}-{location-slug} */}
          {SERVICE_SLUGS.map((serviceSlug) =>
            LOCATION_SLUGS.map((locationSlug) => (
              <Route
                key={`${serviceSlug}-${locationSlug}`}
                path={`/${serviceSlug}-${locationSlug}`}
                element={
                  <ServiceLocationPage serviceSlug={serviceSlug} locationSlug={locationSlug} />
                }
              />
            )),
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCall />
    </div>
  );
}

export default App;
