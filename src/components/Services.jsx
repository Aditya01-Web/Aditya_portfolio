
import React, { useMemo, useState } from 'react';
import { servicesData } from '../data/portfolioData';

const MAX_ALL_SERVICES = 6;

const SERVICE_COLORS = [
  {
    background: '#D8226C',
    text: '#FFFFFF',
    description: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.25)',
  },
  {
    background: '#B2DAE4',
    text: '#10252B',
    description: '#304950',
    border: 'rgba(16, 37, 43, 0.15)',
  },
  {
    background: '#F86A38',
    text: '#FFFFFF',
    description: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.25)',
  },
  {
    background: '#029456',
    text: '#FFFFFF',
    description: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.25)',
  },
  {
    background: '#005BB3',
    text: '#FFFFFF',
    description: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.25)',
  },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Services' },
  { id: 'web', label: 'Web Development' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'content', label: 'Content & Media' },
];

export function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const allServices = Array.isArray(servicesData) ? servicesData : [];

  const filteredServices = useMemo(() => {
    const matchingServices =
      activeFilter === 'all'
        ? allServices
        : allServices.filter(
            (service) => service.category === activeFilter
          );

    return activeFilter === 'all'
      ? matchingServices.slice(0, MAX_ALL_SERVICES)
      : matchingServices;
  }, [activeFilter, allServices]);

  const displayedCount = filteredServices.length;

  return (
    <section
      id="services"
      className="w-full py-16 transition-colors duration-300 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#005BB3] dark:text-[#B2DAE4]">
            What I Can Do
          </p>

          <h2 className="mb-4 font-title text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Services &amp; Solutions
          </h2>

          <p className="font-sans text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Custom web applications, modern website redesigns, and
            intelligent AI automation built to grow your business.
          </p>
        </header>

        {/* Category Filters */}
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-12 sm:gap-3"
          role="group"
          aria-label="Filter services by category"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005BB3] focus-visible:ring-offset-2 sm:px-5 sm:text-sm ${
                  isActive
                    ? 'border-[#005BB3] bg-[#005BB3] text-white shadow-md dark:border-[#B2DAE4] dark:bg-[#B2DAE4] dark:text-[#10252B]'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-[#D8226C] hover:text-[#D8226C] dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-[#D8226C] dark:hover:text-[#ff6b9d]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        {displayedCount > 0 ? (
          <div
            id="services-grid"
            aria-live="polite"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {filteredServices.map((service, index) => {
              const color = SERVICE_COLORS[index % SERVICE_COLORS.length];

              return (
                <article
                  key={service.id ?? `${service.title}-${index}`}
                  className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7"
                  style={{
                    backgroundColor: color.background,
                    color: color.text,
                    borderColor: color.border,
                  }}
                >
                  {/* Decorative Circle */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundColor: color.text }}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: color.description }}
                    >
                      Service {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border text-lg transition-transform duration-300 group-hover:rotate-45"
                      style={{
                        borderColor: color.border,
                        color: color.text,
                      }}
                    >
                      ↗
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="relative z-10 mb-3 break-words font-title text-xl font-bold leading-snug sm:text-2xl">
                    {service.title}
                  </h3>

                  <p
                    className="relative z-10 text-sm leading-relaxed sm:text-base"
                    style={{ color: color.description }}
                  >
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-300 px-6 py-12 text-center dark:border-white/15">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">
              No services found in this category.
            </p>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Please select another category.
            </p>
          </div>
        )}

        {/* Service Count */}
        <p
          className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
          aria-live="polite"
        >
          Showing {displayedCount} service
          {displayedCount !== 1 ? 's' : ''}
          {activeFilter === 'all' && allServices.length > MAX_ALL_SERVICES
            ? ` of ${allServices.length}`
            : ''}
        </p>
      </div>
    </section>
  );
}

export default Services;
