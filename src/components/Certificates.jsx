
import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { certificatesData } from '../data/portfolioData';

const CERTIFICATE_DOTS = [
  { left: '6%', top: '85%', size: 5, duration: 12, delay: 0 },
  { left: '20%', top: '92%', size: 4, duration: 15, delay: 3 },
  { left: '34%', top: '80%', size: 6, duration: 13, delay: 6 },
  { left: '52%', top: '94%', size: 4, duration: 16, delay: 1 },
  { left: '68%', top: '86%', size: 5, duration: 12, delay: 4 },
  { left: '82%', top: '90%', size: 6, duration: 14, delay: 7 },
  { left: '94%', top: '82%', size: 4, duration: 11, delay: 2 },
];

/* Animated background matching the Projects section */
function CertificatesBackground() {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]"
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

      {/* Left animated glow */}
      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10 md:h-[26rem] md:w-[26rem]"
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0, scale: 1 }
            : {
                x: [0, 70, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right animated glow */}
      <motion.div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10 md:h-[26rem] md:w-[26rem]"
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0, scale: 1 }
            : {
                x: [0, -70, 0],
                y: [0, -50, 0],
                scale: [1, 1.25, 1],
              }
        }
        transition={{
          duration: 17,
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-500/5" />

      {/* Moving light sweep */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -top-1/4 left-0 h-[150%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent dark:via-white/[0.05]"
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

      {/* Floating particles */}
      {!shouldReduceMotion &&
        CERTIFICATE_DOTS.map((dot, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-blue-500/25 dark:bg-white/30"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
    </div>
  );
}

/* Certificate image with a fallback for missing images */
function CertificateImage({ src, alt, className = '' }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return (
      <div
        className={`flex min-h-40 flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 to-zinc-200 p-5 text-center text-zinc-600 dark:from-zinc-800 dark:to-zinc-950 dark:text-zinc-300 ${className}`}
        role="img"
        aria-label={`${alt || 'Certificate'} preview unavailable`}
      >
        <svg
          aria-hidden="true"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7" />
          <path d="m8.21 13.89-1.2 8.11L12 19l4.99 3-1.2-8.11" />
        </svg>

        <span className="text-sm font-semibold">
          Certificate preview unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Certificate'}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`block h-full w-full object-contain ${className}`}
    />
  );
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = Array.isArray(certificatesData)
    ? certificatesData.filter(Boolean)
    : [];

  /* Close the preview using Escape and prevent background scrolling */
  useEffect(() => {
    if (!selectedCert) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const closeModal = () => setSelectedCert(null);

  return (
    <section
      id="certificates"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 transition-colors duration-300 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/30 sm:py-20 lg:py-24"
    >
      {/* Animated background sits above the section background */}
      <CertificatesBackground />

      {/* All section content stays above the animated background */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            Learning &amp; Achievements
          </span>

          <h2 className="mb-4 break-words font-title text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Certifications{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              &amp; Credentials
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            A collection of technical certifications, professional
            achievements, and continuous learning milestones.
          </p>
        </header>

        {/* Certificate grid */}
        {certificates.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/60 px-6 py-12 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-zinc-700 dark:text-zinc-200">
              Certificates will appear here soon.
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Add your certificates to certificatesData in portfolioData.js.
            </p>
          </div>
        ) : (
          <div
            id="certificates-grid"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {certificates.map((cert, index) => {
              const certificateName = cert.name || 'Untitled Certificate';
              const certificateLink = cert.link || cert.image || '';

              return (
                <article
                  key={cert.id ?? `${certificateName}-${index}`}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/65 p-4 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-blue-400/30 dark:hover:shadow-black/30 sm:p-5"
                >
                  {/* Card highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                  />

                  {/* Certificate image and preview button */}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    aria-label={`Preview ${certificateName}`}
                    className="relative mb-5 block aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/5 bg-zinc-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-zinc-900 dark:focus-visible:ring-offset-zinc-950"
                  >
                    <CertificateImage
                      src={cert.image}
                      alt={`${certificateName} certificate`}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
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
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-4-4" />
                        <path d="M11 8v6M8 11h6" />
                      </svg>
                      Preview certificate
                    </span>
                  </button>

                  {/* Issuer and year */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="max-w-full break-words rounded-md border border-blue-500/15 bg-blue-500/[0.07] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 sm:text-xs">
                      {cert.issuer || 'Certificate'}
                    </span>

                    {cert.year && (
                      <span className="shrink-0 text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  {/* Certificate title */}
                  <h3 className="mb-5 min-w-0 flex-1 break-words font-title text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl">
                    {certificateName}
                  </h3>

                  {/* Certificate actions */}
                  <div className="mt-auto">
                    {certificateLink ? (
                      <a
                        href={certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-zinc-800/70 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-offset-zinc-950"
                      >
                        View Certificate
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 3h7v7" />
                          <path d="M10 14 21 3" />
                          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                        </svg>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/15 dark:bg-zinc-800/70 dark:text-white dark:hover:bg-zinc-700"
                      >
                        Preview Certificate
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Certificate preview modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="relative my-auto flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-2xl dark:bg-zinc-950/95 sm:rounded-3xl"
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-black/10 p-4 dark:border-white/10 sm:p-6">
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 sm:text-xs">
                  Certificate Preview
                </p>

                <h3
                  id="certificate-modal-title"
                  className="break-words pr-2 font-title text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl"
                >
                  {selectedCert.name || 'Untitled Certificate'}
                </h3>

                <p className="mt-2 break-words text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  {[selectedCert.issuer, selectedCert.year]
                    .filter(Boolean)
                    .join(' · ') || 'Credential details'}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                autoFocus
                aria-label="Close certificate preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-zinc-100 text-xl text-zinc-800 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                &times;
              </button>
            </div>

            {/* Modal certificate image */}
            <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5">
              <div className="flex min-h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 sm:rounded-2xl">
                <CertificateImage
                  src={selectedCert.image}
                  alt={`${selectedCert.name || 'Certificate'} full preview`}
                  className="max-h-[55dvh] object-contain"
                />
              </div>
            </div>

            {/* Modal footer */}
            {selectedCert.link && (
              <div className="border-t border-black/10 p-4 dark:border-white/10 sm:p-5">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-200 sm:w-auto"
                >
                  Verify Credential
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
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
