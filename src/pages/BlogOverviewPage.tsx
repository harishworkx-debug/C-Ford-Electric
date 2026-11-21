import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen, Wrench, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CallCtaSection } from '@/components/CallCtaSection';

export function BlogOverviewPage() {
  useSeo({
    title: 'Electrical Guides & Expert Advice | C Ford Electric | Oklahoma City',
    description:
      'Helpful electrical guides, safety tips, and expert advice from licensed Oklahoma City electricians at C Ford Electric. Learn about panel upgrades, wiring, and repairs.',
    path: '/blog',
    jsonLd: [breadcrumbJsonLd([{ name: 'Blog', href: '/blog' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Educational Guides"
        title="Electrical Guides & Expert Advice"
        intro="Practical electrical advice, homeowner safety tips, and technical troubleshooting guides written by experienced Oklahoma City electricians."
        crumbs={[{ name: 'Blog', href: '/blog' }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Recent Articles"
            title="Learn about your home's electrical system"
            intro="Explore our latest guides covering circuit breaker troubleshooting, panel upgrades, wiring safety, and more."
            center
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 hover:border-gold-300 hover:shadow-cardHover"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-navy-500">
                    <span className="rounded-full bg-gold-50 px-3 py-1 font-bold text-gold-900 border border-gold-200/60">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-navy-400" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-navy-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-navy-400">Target Topic:</span>
                    <span className="rounded bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700">
                      {post.targetKeyword}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-navy-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-navy-500">
                    By {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Read Guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful links band */}
      <section className="bg-navy-50 py-16">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Wrench className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">Electrical Repairs</h3>
              <p className="mt-2 text-sm text-navy-600">
                Fast diagnostic troubleshooting and repairs for faulty outlets, breakers, and wiring.
              </p>
              <Link
                to="/electrical-repair-oklahoma-city-ok"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-600 hover:text-gold-700"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">Panel Upgrades</h3>
              <p className="mt-2 text-sm text-navy-600">
                Safely expand your capacity to 200 amps for modern appliances, HVAC, and EV chargers.
              </p>
              <Link
                to="/electrical-panel-upgrade-oklahoma-city-ok"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-600 hover:text-gold-700"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <BookOpen className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">All Electrical Services</h3>
              <p className="mt-2 text-sm text-navy-600">
                Explore our full catalog of residential, commercial, and industrial electrical solutions.
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-600 hover:text-gold-700"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallCtaSection
        heading="Have an electrical question or need an inspection?"
        subheading="Call C Ford Electric at (405) 654-8819 to speak directly with an Oklahoma City electrician."
      />
    </>
  );
}
