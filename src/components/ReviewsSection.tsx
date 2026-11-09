import { useState } from 'react';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { REVIEWS, REVIEWS_OVERVIEW, type Review } from '@/data/reviews';
import { SectionHeading } from './SectionHeading';

const CATEGORIES = [
  { id: 'all', label: 'All Reviews', count: 12 },
  { id: 'ev', label: 'EV Charger / Outlets', count: 3 },
  { id: 'promptness', label: 'Speed & Promptness', count: 4 },
  { id: 'pricing', label: 'Great Pricing', count: 3 },
  { id: 'wiring', label: 'Wiring & Repairs', count: 2 },
];

export function ReviewsSection({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = REVIEWS.filter((r) => {
    if (activeCategory === 'all') return true;
    return r.category === activeCategory;
  });

  const displayLimit = limit || (showAll ? filtered.length : 6);
  const displayedReviews = filtered.slice(0, displayLimit);

  return (
    <section className="bg-gradient-to-b from-navy-50/60 to-white py-20 sm:py-24" id="reviews">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Trusted by Homeowners Across Oklahoma"
            intro="Real feedback from real customers. We take pride in honest communication, fair pricing, and code-compliant electrical work."
            center
          />

          {/* Rating Summary Banner */}
          <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-navy-100 bg-white px-6 py-3.5 shadow-card sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-navy-900">
                {REVIEWS_OVERVIEW.rating.toFixed(1)}
              </span>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-navy-500">
                  {REVIEWS_OVERVIEW.totalReviews} Google Reviews
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-navy-200 sm:block" />

            <div className="flex items-center gap-2 text-left">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-navy-900">100% 5-Star Rating</p>
                <p className="text-xs text-navy-500">Verified Client Feedback</p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-navy-200 sm:block" />

            <a
              href={REVIEWS_OVERVIEW.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-700 hover:text-gold-600"
            >
              <span>View on Google</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-navy-900 text-gold-400 shadow-sm'
                    : 'border border-navy-200 bg-white text-navy-700 hover:border-gold-300 hover:text-gold-600'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Expand / View All button if not hard-limited */}
        {!limit && filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-card transition-all hover:border-gold-400 hover:text-gold-600 hover:shadow-cardHover"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All {filtered.length} Reviews <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-gold-300 hover:shadow-cardHover">
      <div>
        {/* Top bar: Stars + Source */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded bg-navy-50 px-2 py-0.5 text-[10px] font-semibold text-navy-600">
            Google Review
          </span>
        </div>

        {/* Review body */}
        <div className="relative mt-4">
          <MessageSquareQuote className="absolute -left-1 -top-2 h-7 w-7 text-navy-100 opacity-60" />
          <p className="relative z-10 text-sm leading-relaxed text-navy-700">
            "{review.text}"
          </p>
        </div>

        {/* Services & Price tags if any */}
        {(review.services || review.priceAssessment) && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {review.services && (
              <span className="rounded-md bg-gold-50 px-2.5 py-1 text-[11px] font-medium text-gold-900 border border-gold-200/60">
                {review.services}
              </span>
            )}
            {review.priceAssessment && (
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800 border border-emerald-200/60">
                💰 {review.priceAssessment}
              </span>
            )}
          </div>
        )}

        {/* Owner response if any */}
        {review.ownerResponse && (
          <div className="mt-4 rounded-xl border-l-2 border-gold-400 bg-navy-50/70 p-3 text-xs">
            <p className="font-bold text-navy-900">Response from Glenn (Owner):</p>
            <p className="mt-1 text-navy-600">{review.ownerResponse}</p>
          </div>
        )}
      </div>

      {/* Author Info Footer */}
      <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-navy-900">{review.author}</p>
          <p className="text-xs text-navy-400">{review.authorMeta} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}

