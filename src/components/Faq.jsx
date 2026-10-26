import React, { useId, useMemo, useState } from 'react';
import { faqsData } from '../data/portfolioData';

const faqTabs = [
  { id: 'all', label: 'All Questions' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'Process' },
  { id: 'support', label: 'Support' },
];

export function Faq() {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaqId, setOpenFaqId] = useState(null);

  // Unique prefix so element ids never clash with other components
  const baseId = useId();

  const allFaqs = useMemo(
    () => (Array.isArray(faqsData) ? faqsData.filter(Boolean) : []),
    []
  );

  const filteredFaqs = useMemo(() => {
    if (activeTab === 'all') return allFaqs;

    return allFaqs.filter(
      (faq) => String(faq.category ?? '').toLowerCase() === activeTab
    );
  }, [activeTab, allFaqs]);

  const toggleFaq = (id) => {
    setOpenFaqId((currentId) => (currentId === id ? null : id));
  };

  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setOpenFaqId(null);
  };

  return (
    <section
      id="faq"
      aria-labelledby={`${baseId}-title`}
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

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (keeps the font-title font) */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
            />
            Need Help?
          </span>

          <h2
            id={`${baseId}-title`}
            className="mb-4 break-words font-title text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Questions
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Find answers about pricing, project workflows, communication,
            and ongoing support.
          </p>
        </header>

        {/* Category Filters */}
        <div
          className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-10 sm:gap-3"
          role="group"
          aria-label="Filter frequently asked questions by category"
        >
          {faqTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => changeTab(tab.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 sm:px-5 sm:text-sm ${
                  isActive
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-md dark:border-white dark:bg-white dark:text-zinc-900'
                    : 'border-black/10 bg-white/60 text-zinc-700 shadow-sm backdrop-blur-xl hover:border-blue-500/30 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Screen-reader announcement when the filter changes */}
        <p className="sr-only" role="status" aria-live="polite">
          Showing {filteredFaqs.length}{' '}
          {filteredFaqs.length === 1 ? 'question' : 'questions'}
        </p>

        {/* FAQ Accordion */}
        <div
          id="faq-accordion"
          className="flex w-full flex-col gap-3 sm:gap-4"
        >
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-black/10 bg-white/60 px-5 py-10 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="font-semibold text-zinc-700 dark:text-zinc-200">
                No questions found in this category.
              </p>
              <button
                type="button"
                onClick={() => changeTab('all')}
                className="mt-3 rounded text-sm font-semibold text-blue-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
              >
                View all questions
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const faqId = faq.id ?? `${faq.category ?? 'faq'}-${index}`;
              const isOpen = openFaqId === faqId;
              const questionId = `${baseId}-question-${index}`;
              const answerId = `${baseId}-answer-${index}`;

              return (
                <article
                  key={faqId}
                  className={`group relative overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 motion-reduce:transition-none ${
                    isOpen
                      ? 'border-blue-500/30 bg-white/85 shadow-lg shadow-blue-950/5 dark:border-blue-400/25 dark:bg-zinc-900/85 dark:shadow-black/20'
                      : 'border-black/[0.08] bg-white/65 shadow-sm hover:border-blue-500/20 hover:shadow-md dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-blue-400/20'
                  }`}
                >
                  {/* Subtle top highlight */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-opacity ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleFaq(faqId)}
                      className="flex min-h-[76px] w-full items-center justify-between gap-4 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 sm:p-6"
                    >
                      {/* Question text uses the Sora font (font-faq) */}
                      <span className="min-w-0 break-words font-faq text-sm font-semibold leading-6 text-zinc-900 [overflow-wrap:anywhere] dark:text-white sm:text-base sm:leading-7">
                        {faq.question || 'Question unavailable'}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
                          isOpen
                            ? 'rotate-180 border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900'
                            : 'border-black/10 bg-white/70 text-zinc-700 group-hover:border-blue-500/30 dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-300'
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {/* Answer: smooth open and close, hidden from screen readers when closed */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                      isOpen
                        ? 'visible grid-rows-[1fr] opacity-100'
                        : 'invisible grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-black/[0.06] px-4 py-4 dark:border-white/10 sm:px-6 sm:py-5">
                        <p className="whitespace-pre-line break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                          {faq.answer || 'Answer will be available soon.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs leading-6 text-zinc-500 dark:text-zinc-400 sm:mt-10 sm:text-sm">
          Have another question? Feel free to get in touch to discuss your
          project.
        </p>
      </div>
    </section>
  );
}

export default Faq;