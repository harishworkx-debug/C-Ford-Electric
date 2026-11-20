import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_DATA } from '../data/landingData';

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-page">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-600 justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Clear Answers for Homeowners
            <span className="h-px w-6 bg-current opacity-60" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Have questions about electrical panel upgrades, EV charger installations, or safety troubleshooting in Oklahoma City? Here is what property owners commonly ask.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {LANDING_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-colors hover:border-gold-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-base font-bold text-navy-950 sm:text-lg">
                    <HelpCircle className="h-5 w-5 shrink-0 text-gold-500" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gold-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-navy-50 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
