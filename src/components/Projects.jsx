import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';


const EASE = [0.22, 1, 0.36, 1];

const CATEGORY_LABELS = {
  web: 'Web App',
  ai: 'AI & Automation',
  content: 'Content & SEO',
};

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'content', label: 'Content Tools' },
];

// Floating dots for the background: left/top in %, size in px, timing in s
const DOTS = [
  { left: '6%', top: '85%', size: 5, duration: 12, delay: 0 },
  { left: '20%', top: '92%', size: 4, duration: 15, delay: 3 },
  { left: '34%', top: '80%', size: 6, duration: 13, delay: 6 },
  { left: '52%', top: '94%', size: 4, duration: 16, delay: 1 },
  { left: '68%', top: '86%', size: 5, duration: 12, delay: 4 },
  { left: '82%', top: '90%', size: 6, duration: 14, delay: 7 },
  { left: '94%', top: '82%', size: 4, duration: 11, delay: 2 },
];

// Only allow http(s) links so a bad data entry can't inject "javascript:" URLs.
const safeUrl = (url) =>
  typeof url === 'string' && /^https?:\/\//i.test(url.trim()) ? url.trim() : null;

const getProjectKey = (project, index) =>
  project?.id ?? `${project?.title ?? 'project'}-${index}`;

export function Projects() {
  const shouldReduceMotion = !!useReducedMotion();
  const sectionRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [failedImages, setFailedImages] = useState({});

  // Memoised so the array reference stays stable between renders.
  const safeProjects = useMemo(
    () => (Array.isArray(projectsData) ? projectsData.filter(Boolean) : []),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return safeProjects;
    return safeProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory, safeProjects]);

  // Show only two projects until the user clicks View All.
  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 2);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setShowAllProjects(false);
  }, []);

  const handleImageError = useCallback((key) => {
    setFailedImages((current) =>
      current[key] ? current : { ...current, [key]: true }
    );
  }, []);

  const handleToggleProjects = () => {
    const next = !showAllProjects;
    setShowAllProjects(next);

    // After collapsing, bring the top of the section back into view.
    if (!next) {
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      });
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white py-14 transition-colors duration-300 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 sm:py-16 lg:py-20"
    >
      {/* Animated background: scrolling grid, glows, light sweep, rising dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Grid that slowly scrolls diagonally */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
          animate={
            shouldReduceMotion
              ? { backgroundPosition: '0px 0px' }
              : { backgroundPosition: ['0px 0px', '-56px 56px'] }
          }
          transition={{
            duration: 24,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'linear',
          }}
        />

        {/* Glow 1 */}
        <motion.div
          className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-zinc-400/30 blur-3xl dark:bg-white/10 md:h-[26rem] md:w-[26rem]"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : { x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }
          }
          transition={{
            duration: 14,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glow 2 */}
        <motion.div
          className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-zinc-500/20 blur-3xl dark:bg-white/5 md:h-[26rem] md:w-[26rem]"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : { x: [0, -70, 0], y: [0, -50, 0], scale: [1, 1.25, 1] }
          }
          transition={{
            duration: 17,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Diagonal light sweep */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute -top-1/4 left-0 h-[150%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/[0.05]"
            initial={{ x: '-120%' }}
            animate={{ x: '420%' }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Dots that float upward and fade out */}
        {!shouldReduceMotion &&
          DOTS.map((dot, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-black/25 dark:bg-white/30"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -360, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          {...fadeUp(0)}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            My Work
          </p>

          <h2 className="mb-3 break-words font-title text-3xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-xl break-words text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-7">
            A showcase of my web applications, AI tools, and automation
            solutions.
          </p>
        </motion.header>

        {/* Category Filters */}
        <motion.div
          {...fadeUp(0.1)}
          className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-10 sm:gap-3"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORY_FILTERS.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                aria-pressed={isActive}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={`max-w-full rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950 sm:px-5 sm:text-sm ${
                  isActive
                    ? 'border-black bg-black text-white shadow-md dark:border-white dark:bg-white dark:text-black'
                    : 'border-black/10 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Screen-reader announcement (instead of aria-live on the whole grid) */}
        <p className="sr-only" role="status" aria-live="polite">
          Showing {visibleProjects.length} of {filteredProjects.length}{' '}
          projects
        </p>

        {/* Projects Grid */}
        {visibleProjects.length > 0 ? (
          <div
            id="projects-grid"
            className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const key = getProjectKey(project, index);
                const categoryLabel =
                  CATEGORY_LABELS[project.category] ||
                  project.category ||
                  'Featured';
                const showImage = project.image && !failedImages[key];
                const liveUrl = safeUrl(project.liveUrl);
                const codeUrl = safeUrl(project.codeUrl);

                return (
                  <motion.article
                    key={key}
                    layout={!shouldReduceMotion}
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.95 }
                    }
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : Math.min(index, 5) * 0.08,
                      ease: EASE,
                    }}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/90 sm:rounded-3xl"
                  >
                    {/* Project Image */}
<div className="relative aspect-[1366/728] w-full shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
  {showImage ? (
    <img
      src={project.image}
      alt={`${project.title || 'Project'} preview`}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => handleImageError(key)}
    />
  ) : (
    /* Image fallback */
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-100 p-4 text-center text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
      <svg
        aria-hidden="true"
        className="h-10 w-10 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>

      <span className="max-w-full break-words text-sm font-semibold">
        {project.title || 'Project Preview'}
      </span>
    </div>
  )}

  {/* Category Badge */}
  <span className="absolute right-3 top-3 max-w-[85%] truncate rounded-full bg-black/80 px-3 py-1.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-md sm:text-xs">
    {categoryLabel}
  </span>
</div>
                      

                    
                    {/* Project Details */}
                    <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5 lg:p-6">
                      <div className="flex min-w-0 flex-1 flex-col gap-3">
                        <h3 className="break-words font-title text-lg font-bold leading-snug text-black dark:text-white sm:text-xl">
                          {project.title || 'Untitled Project'}
                        </h3>

                        {project.result && (
                          <div className="flex min-w-0 items-start gap-2 text-xs font-medium leading-5 text-zinc-700 dark:text-zinc-300 sm:text-sm">
                            <svg
                              aria-hidden="true"
                              className="mt-0.5 h-4 w-4 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                              <polyline points="17 6 23 6 23 12" />
                            </svg>

                            <p className="min-w-0 break-words [overflow-wrap:anywhere]">
                              {project.result}
                            </p>
                          </div>
                        )}

                        {Array.isArray(project.tools) &&
                          project.tools.length > 0 && (
                            <div className="flex min-w-0 flex-wrap gap-2 pt-1">
                              {project.tools.map((tool, toolIndex) => (
                                <span
                                  key={`${tool}-${toolIndex}`}
                                  className="max-w-full rounded-lg border border-black/5 bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200"
                                >
                                  <span className="break-words [overflow-wrap:anywhere]">
                                    {tool}
                                  </span>
                                </span>
                              ))}
                            </div>
                          )}
                      </div>

                      {/* Project Links */}
                      {(liveUrl || codeUrl) && (
                        <div className="mt-auto flex flex-wrap items-stretch gap-2 border-t border-black/5 pt-4 dark:border-white/10 sm:gap-3">
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View live demo of ${project.title || 'project'} (opens in a new tab)`}
                              className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900 sm:px-4 sm:text-sm"
                            >
                              <span>Live Demo</span>
                              <svg
                                aria-hidden="true"
                                className="h-3.5 w-3.5 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M14 3h7v7" />
                                <path d="M10 14 21 3" />
                                <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
                              </svg>
                            </a>
                          )}

                          {codeUrl && (
                            <a
                              href={codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View source code for ${project.title || 'project'} (opens in a new tab)`}
                              className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-3 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-white/15 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900 sm:px-4 sm:text-sm"
                            >
                              <span>Code</span>
                              <svg
                                aria-hidden="true"
                                className="h-3.5 w-3.5 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
            No projects found in this category.
          </p>
        )}

        {/* View All / Show Less */}
        {filteredProjects.length > 2 && (
          <div className="mt-8 flex justify-center sm:mt-10">
            <motion.button
              type="button"
              onClick={handleToggleProjects}
              aria-expanded={showAllProjects}
              aria-controls="projects-grid"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-950 dark:hover:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950"
            >
              <span>
                {showAllProjects ? 'Show Less' : 'View All Projects'}
              </span>

              <svg
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAllProjects ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;