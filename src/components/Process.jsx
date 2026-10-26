import React from 'react';
import { processSteps } from '../data/portfolioData';

/*
 * Neon tech palette, one theme per step.
 * Full class names are written out on purpose: Tailwind cannot detect
 * classes that are built from template strings or variables.
 */
const STEP_THEMES = [
  {
    // Cyan to blue
    gradient: 'from-cyan-400 to-blue-600',
    numberText: 'text-white',
    topLine: 'via-cyan-500/80',
    label: 'text-cyan-700 dark:text-cyan-300',
    hover:
      'hover:border-cyan-500/50 hover:shadow-cyan-500/25 dark:hover:border-cyan-400/50',
    glow: 'bg-cyan-400/10 group-hover:bg-cyan-400/30',
  },
  {
    // Fuchsia to purple
    gradient: 'from-fuchsia-500 to-purple-600',
    numberText: 'text-white',
    topLine: 'via-fuchsia-500/80',
    label: 'text-fuchsia-700 dark:text-fuchsia-300',
    hover:
      'hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/25 dark:hover:border-fuchsia-400/50',
    glow: 'bg-fuchsia-400/10 group-hover:bg-fuchsia-400/30',
  },
  {
    // Lime to green (dark number text, because white is hard to read on lime)
    gradient: 'from-lime-400 to-green-600',
    numberText: 'text-zinc-900',
    topLine: 'via-lime-500/80',
    label: 'text-lime-700 dark:text-lime-300',
    hover:
      'hover:border-lime-500/50 hover:shadow-lime-500/25 dark:hover:border-lime-400/50',
    glow: 'bg-lime-400/10 group-hover:bg-lime-400/30',
  },
  {
    // Orange to pink
    gradient: 'from-orange-400 to-pink-600',
    numberText: 'text-white',
    topLine: 'via-orange-500/80',
    label: 'text-orange-700 dark:text-orange-300',
    hover:
      'hover:border-orange-500/50 hover:shadow-orange-500/25 dark:hover:border-orange-400/50',
    glow: 'bg-orange-400/10 group-hover:bg-pink-400/30',
  },
];

export function Process() {
  const steps = Array.isArray(processSteps)
    ? processSteps.filter(Boolean)
    : [];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 transition-colors duration-300 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/30 sm:py-20 lg:py-24"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-fuchsia-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl dark:bg-lime-500/5"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
            />
            My Workflow
          </span>

          <h2
            id="process-title"
            className="mb-4 break-words font-title text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
          >
            How We Work{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-fuchsia-400 dark:to-orange-300">
              Together
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            A simple, transparent four-step process, from our first
            conversation to the successful launch of your project.
          </p>
        </header>

        {/* Process Steps */}
        {steps.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/60 p-8 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-zinc-700 dark:text-zinc-200">
              Your workflow steps will appear here soon.
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Add your steps to processSteps in portfolioData.js.
            </p>
          </div>
        ) : (
          <ol
            id="process-grid"
            className="grid list-none grid-cols-1 items-stretch gap-5 p-0 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
          >
            {steps.map((step, index) => {
              const theme = STEP_THEMES[index % STEP_THEMES.length];
              const stepNumber = step.step ?? index + 1;

              return (
                <li
                  key={step.step ?? step.id ?? index}
                  className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/70 p-5 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.055] sm:p-6 ${theme.hover}`}
                >
                  {/* Neon top line */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${theme.topLine} to-transparent`}
                  />

                  {/* Step number and label */}
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${theme.gradient} ${theme.numberText} font-title text-xl font-extrabold shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100`}
                    >
                      {String(stepNumber).padStart(2, '0')}
                    </div>

                    <span
                      className={`whitespace-nowrap rounded-full border border-black/[0.06] bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] dark:border-white/10 dark:bg-white/5 ${theme.label}`}
                    >
                      Step {stepNumber}
                    </span>
                  </div>

                  {/* Step content */}
                  <h3 className="mb-3 break-words font-title text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl">
                    {step.title || 'Project Step'}
                  </h3>

                  <p className="flex-1 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                    {step.description ||
                      'Details for this step will be available soon.'}
                  </p>

                  {/* Bottom line that grows on hover */}
                  <div
                    aria-hidden="true"
                    className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${theme.gradient} opacity-70 transition-all duration-500 group-hover:w-full group-hover:opacity-100 motion-reduce:transition-none`}
                  />

                  {/* Corner glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full blur-2xl transition-colors duration-500 motion-reduce:transition-none ${theme.glow}`}
                  />
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}

export default Process;