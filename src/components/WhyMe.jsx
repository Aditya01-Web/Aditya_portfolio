
import React, { useEffect, useState } from 'react';
import { whyMeData } from '../data/portfolioData';

const getCardPosition = (index, activeIndex, total) => {
  if (index === activeIndex) return 'center';
  if (total <= 1) return 'hidden';

  if (index === (activeIndex - 1 + total) % total) return 'left';
  if (index === (activeIndex + 1) % total) return 'right';

  return 'hidden';
};

export function WhyMe() {
  const items = Array.isArray(whyMeData) ? whyMeData : [];
  const totalItems = items.length;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((current) =>
      totalItems > 0 ? current % totalItems : 0
    );
  }, [totalItems]);

  const goToPrevious = () => {
    if (totalItems <= 1) return;

    setActiveIndex((current) =>
      current === 0 ? totalItems - 1 : current - 1
    );
  };

  const goToNext = () => {
    if (totalItems <= 1) return;

    setActiveIndex((current) => (current + 1) % totalItems);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < totalItems) {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="why-me"
      className="relative isolate w-full bg-white py-14 transition-colors duration-300 dark:bg-zinc-950 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto  max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            My Difference
          </p>

          <h2 className="mb-3 break-words font-title text-3xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Why Choose Me
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
            Clear solutions to common web development and business
            automation challenges.
          </p>
        </header>

        {totalItems === 0 ? (
          <p className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            My advantages and solutions will appear here soon.
          </p>
        ) : (
          <div className="mx-auto w-full max-w-5xl">
            {/* Carousel Stage */}
            <div
              className="relative mx-auto h-[460px] w-full sm:h-[440px] lg:h-[430px]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Why choose me"
            >
              {items.map((item, index) => {
                const position = getCardPosition(
                  index,
                  activeIndex,
                  totalItems
                );

                const isActive = position === 'center';

                const positionClasses = {
                  center:
                    '-translate-x-1/2 scale-100 opacity-100 z-30',
                  left:
                    '-translate-x-[calc(50%+42px)] scale-[0.86] opacity-60 z-20 sm:-translate-x-[calc(50%+190px)] lg:-translate-x-[calc(50%+270px)]',
                  right:
                    'translate-x-[calc(-50%+42px)] scale-[0.86] opacity-60 z-20 sm:translate-x-[calc(-50%+190px)] lg:translate-x-[calc(-50%+270px)]',
                  hidden:
                    'pointer-events-none invisible -translate-x-1/2 scale-75 opacity-0 z-0',
                };

                return (
                  <article
                    key={item.id ?? `${item.title ?? 'reason'}-${index}`}
                    aria-hidden={!isActive}
                    className={`absolute left-1/2 top-1/2 flex h-auto min-h-[330px] w-[calc(100%-32px)] max-w-[350px] -translate-y-1/2 flex-col rounded-2xl border p-4 transition-[transform,opacity,background-color,border-color,box-shadow] duration-700 ease-out motion-reduce:transition-none sm:w-[350px] sm:p-5 lg:w-[360px] ${
                      positionClasses[position]
                    } ${
                      isActive
                        ? 'border-white/15 bg-black text-white shadow-2xl shadow-black/25'
                        : 'border-white/10 bg-zinc-900/75 text-white shadow-xl backdrop-blur-md'
                    }`}
                  >
                    {/* Decorative Accent */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.05]"
                    />

                    {/* Card Header */}
                    <div className="relative z-10 mb-4 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 pb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                        Why Me
                      </span>

                      <span className="shrink-0 text-xs font-semibold tabular-nums text-white/60">
                        {String(index + 1).padStart(2, '0')} /{' '}
                        {String(totalItems).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Card Content: No Internal Scrolling */}
                    <div className="relative z-10 flex flex-col gap-3">
                      {item.problem && (
                        <div className="rounded-lg border-l-2 border-white/70 bg-white/[0.06] px-3 py-2.5">
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-[10px]">
                            Common Issue
                          </p>

                          <p className="break-words text-xs leading-5 text-white/85 sm:text-sm [overflow-wrap:anywhere]">
                            {item.problem}
                          </p>
                        </div>
                      )}

                      {item.solution && (
                        <div className="flex items-start gap-2 text-[10px] font-bold uppercase tracking-wider text-white/65 sm:text-xs">
                          <svg
                            aria-hidden="true"
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>

                          <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                            {item.solution}
                          </span>
                        </div>
                      )}

                      {item.title && (
                        <h3 className="break-words font-title text-lg font-bold leading-snug text-white sm:text-xl [overflow-wrap:anywhere]">
                          {item.title}
                        </h3>
                      )}

                      {item.description && (
                        <p className="whitespace-pre-line break-words text-xs leading-6 text-white/75 sm:text-sm sm:leading-6 [overflow-wrap:anywhere]">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Accent */}
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 h-px shrink-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    />
                  </article>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="relative z-40 mt-2 flex flex-col items-center gap-4 sm:mt-4">
              <div className="flex items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={goToPrevious}
                  disabled={totalItems <= 1}
                  aria-label="Show previous card"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black bg-black text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none dark:border-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                </button>

                <span
                  className="min-w-[58px] text-center text-xs font-semibold tabular-nums text-zinc-600 dark:text-zinc-300"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(totalItems).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={goToNext}
                  disabled={totalItems <= 1}
                  aria-label="Show next card"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black bg-black text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none dark:border-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Pagination Dots */}
              <div
                className="flex max-w-full flex-wrap items-center justify-center gap-2"
                aria-label="Choose a card"
              >
                {items.map((item, index) => (
                  <button
                    key={item.id ?? `dot-${index}`}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to card ${index + 1}`}
                    aria-current={
                      activeIndex === index ? 'step' : undefined
                    }
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950 ${
                      activeIndex === index
                        ? 'w-7 bg-black dark:bg-white'
                        : 'w-2 bg-zinc-300 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyMe;
