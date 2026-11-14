import { Star, MessageSquareQuote, ExternalLink, CheckCircle, PenLine } from 'lucide-react';
import { REVIEWS, REVIEWS_OVERVIEW, type Review } from '@/data/reviews';
import { SectionHeading } from './SectionHeading';

export function ReviewsSection({ limit }: { limit?: number }) {
  const displayedReviews = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section className="bg-gradient-to-b from-navy-50/60 to-white py-20 sm:py-24" id="reviews">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center">
          <SectionHeading
            eyebrow="Verified Client Feedback"
            title="Google Reviews for C Ford Electric"
            intro="Genuine feedback from real customers. C Ford Electric is committed to dependable workmanship, fair pricing, and code-compliant electrical services across the Oklahoma City metro."
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
                  Verified Google Review
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-navy-200 sm:block" />

            <div className="flex items-center gap-2 text-left">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-navy-900">5.0 Star Rating</p>
                <p className="text-xs text-navy-500">Google Business Profile</p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-navy-200 sm:block" />

            <a
              href={REVIEWS_OVERVIEW.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-700 hover:text-gold-600"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {/* Direct CTA card to leave a Google Review */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-dashed border-gold-300 bg-gradient-to-br from-gold-50/50 to-white p-6 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-gold-700">
                <PenLine className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Share Your Feedback</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-navy-900">
                Recently Worked with Glenn?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                We value your feedback. Leaving a review on our Google Business Profile helps other Oklahoma City homeowners and businesses find an honest, licensed Master Electrician.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={REVIEWS_OVERVIEW.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy inline-flex w-full items-center justify-center gap-2 text-sm"
              >
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Write a Review on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
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
          <p className="relative z-10 text-base font-medium leading-relaxed text-navy-900">
            "{review.text}"
          </p>
        </div>

        {/* Services tag */}
        {review.services && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="rounded-md bg-gold-50 px-2.5 py-1 text-[11px] font-medium text-gold-900 border border-gold-200/60">
              {review.services}
            </span>
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
