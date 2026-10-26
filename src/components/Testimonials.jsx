
import React from 'react';
import { testimonialsData } from '../data/portfolioData';

export function Testimonials() {
  const testimonials = Array.isArray(testimonialsData)
    ? testimonialsData.filter(Boolean)
    : [];

  return (
    <section
      id="testimonials"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 transition-colors duration-300 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/30 sm:py-20 lg:py-24"
    >
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-500/5"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            Testimonials
          </span>

          <h2 className="mb-4 break-words font-title text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Client{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Feedback
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Feedback and experiences from clients and project partners
            about our collaboration.
          </p>
        </header>

        {/* Testimonials Grid */}
        {testimonials.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/60 p-8 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-zinc-700 dark:text-zinc-200">
              Testimonials will appear here soon.
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Add testimonials to testimonialsData in portfolioData.js.
            </p>
          </div>
        ) : (
          <div
            id="testimonials-container"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {testimonials.map((item, index) => (
              <article
                key={item.id ?? `${item.author ?? 'testimonial'}-${index}`}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/65 p-5 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-blue-400/30 dark:hover:shadow-black/30 sm:p-6 md:p-7"
              >
                {/* Top highlight */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                />

                {/* Decorative quotation mark */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-9xl leading-none text-blue-500/[0.08] transition-colors duration-300 group-hover:text-violet-500/[0.12] dark:text-blue-300/[0.08]"
                >
                  “
                </div>

                {/* Quote icon */}
                <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/15 bg-blue-500/[0.07] text-blue-600 dark:text-blue-300">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h7v-6H5.5v-.83A1.67 1.67 0 0 1 7.17 9.5H9V6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V18h7v-6h-3.5v-.83a1.67 1.67 0 0 1 1.67-1.67H19V6h-1.83Z" />
                  </svg>
                </div>

                {/* Testimonial quote */}
                <blockquote className="relative z-10 flex-1">
                  <p className="break-words text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
                    {item.quote
                      ? `“${item.quote}”`
                      : 'No testimonial text provided.'}
                  </p>
                </blockquote>

                {/* Author details */}
                <footer className="relative z-10 mt-7 border-t border-black/[0.07] pt-5 dark:border-white/10">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 font-title text-base font-extrabold text-blue-700 dark:text-blue-300"
                    >
                      {(item.author || 'C')
                        .trim()
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-title text-base font-bold text-zinc-900 dark:text-white">
                        {item.author || 'Client'}
                      </h3>

                      {item.role && (
                        <p className="mt-1 break-words text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:text-sm">
                          {item.role}
                        </p>
                      )}
                    </div>
                  </div>
                </footer>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-60 transition-all duration-300 group-hover:w-20 group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
