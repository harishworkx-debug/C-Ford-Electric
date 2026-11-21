import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Phone, User, CheckCircle2, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { CallCtaSection } from '@/components/CallCtaSection';
import { CallButton } from '@/components/CallButton';

function renderContentWithLinks(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const anchor = match[1];
    const href = match[2];

    parts.push(
      <Link
        key={`${match.index}-${href}`}
        to={href}
        className="font-semibold text-gold-600 underline underline-offset-2 hover:text-gold-700"
      >
        {anchor}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Article Not Found</h1>
        <p className="mt-3 text-navy-600">The guide you are looking for does not exist.</p>
        <Link to="/blog" className="btn-navy mt-6">
          <ChevronLeft className="h-4 w-4" /> Back to Guides
        </Link>
      </section>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/og-image.svg`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
    },
  };

  useSeo({
    title: `${post.title} | C Ford Electric`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: IMAGES.breakerPanel,
    type: 'article',
    jsonLd: [
      articleJsonLd,
      breadcrumbJsonLd([
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/${post.slug}` },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        crumbs={[
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-navy-200">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-gold-400" />
            {post.author}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-gold-400" />
            {post.date}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-400" />
            {post.readTime}
          </span>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="space-y-10">
                {post.content.map((section, idx) => (
                  <div key={idx} className="prose-tight">
                    <h2 className="text-2xl font-extrabold text-navy-900 border-b border-navy-100 pb-3">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((para, pIdx) => (
                        <p key={pIdx} className="leading-relaxed text-navy-700">
                          {renderContentWithLinks(para)}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Related services banner */}
              <div className="mt-14 rounded-2xl border border-navy-100 bg-navy-50/70 p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">
                  Related Electrical Services in Oklahoma City
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  C Ford Electric provides licensed, code-compliant solutions across the OKC metro. Explore relevant services:
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {post.relatedServices.map((rel) => (
                    <Link
                      key={rel.href}
                      to={rel.href}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3.5 py-2 text-xs font-bold text-navy-800 shadow-sm transition-all hover:border-gold-400 hover:text-gold-600"
                    >
                      <span>{rel.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Call box */}
                <div className="rounded-2xl border border-navy-100 bg-navy-900 p-6 text-white shadow-card">
                  <h3 className="text-xl font-bold">Need a Licensed Electrician?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
                    Talk directly to Glenn and our team about your electrical repair, panel upgrade, or installation.
                  </p>
                  <div className="mt-5">
                    <CallButton size="md" label="Call" showNumber />
                  </div>
                  <div className="mt-4 pt-4 border-t border-navy-800">
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1"
                    >
                      Request an estimate online <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Key takeaways */}
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="text-base font-bold text-navy-900">Why Choose C Ford Electric</h3>
                  <ul className="mt-4 space-y-3 text-sm text-navy-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>5.0 Star Rated (12 Google Reviews)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Free consultations on all services</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Workmanship to Oklahoma electrical code</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Serving 10 OKC metro communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CallCtaSection
        heading={`Have questions about ${post.targetKeyword.toLowerCase()}?`}
        subheading="Call C Ford Electric at (405) 654-8819. We explain available options clearly and provide upfront estimates."
      />
    </>
  );
}
