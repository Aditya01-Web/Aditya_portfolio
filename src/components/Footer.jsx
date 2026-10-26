
import React from 'react';
import { profileData } from '../data/portfolioData';

export function Footer() {
  const profile = profileData || {};
  const socialLinks = profile.socialLinks || {};
  const tools = Array.isArray(profile.tools) ? profile.tools : [];
  const currentYear = new Date().getFullYear();

  const socialButtonClasses =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-900 dark:focus-visible:ring-offset-zinc-950 sm:text-sm';

  const externalLinks = [
    {
      id: 'footer-github',
      label: 'GitHub',
      href: socialLinks.github,
      icon: (
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      id: 'footer-linkedin',
      label: 'LinkedIn',
      href: socialLinks.linkedin,
      icon: (
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ].filter((link) => typeof link.href === 'string' && link.href.trim());

  return (
    <footer
      id="footer"
      className="relative isolate w-full overflow-hidden border-t border-black/[0.08] bg-gradient-to-br from-slate-50 via-white to-blue-50/80 py-12 transition-colors duration-300 dark:border-white/10 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/30 sm:py-16"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        {/* Brand and tagline */}
        <div className="flex max-w-2xl flex-col items-center gap-3">
          <a
            href="#hero"
            id="footer-logo-name"
            className="break-words font-title text-2xl font-extrabold tracking-tight text-zinc-900 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white sm:text-3xl"
          >
            {profile.name || 'Your Name'}
            <span
              aria-hidden="true"
              className="text-blue-600 dark:text-blue-400"
            >
              .
            </span>
          </a>

          <p
            id="footer-tagline"
            className="max-w-md break-words text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base"
          >
            {profile.tagline ||
              'Building thoughtful digital experiences with modern web technologies.'}
          </p>
        </div>

        {/* Tools and technologies */}
        {tools.length > 0 && (
          <div className="flex w-full flex-col items-center gap-3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:text-xs">
              Technologies I Use
            </h2>

            <div
              id="footer-tools-list"
              className="flex max-w-2xl flex-wrap items-center justify-center gap-2"
            >
              {tools
                .filter(
                  (tool) =>
                    typeof tool === 'string' && tool.trim().length > 0
                )
                .map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Contact and social links */}
        <nav
          id="footer-socials"
          aria-label="Social and contact links"
          className="flex w-full flex-wrap items-center justify-center gap-3"
        >
          {externalLinks.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} profile (opens in a new tab)`}
              className={socialButtonClasses}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}

          {typeof profile.email === 'string' &&
            profile.email.trim() && (
              <a
                href={`mailto:${profile.email.trim()}`}
                id="footer-email"
                aria-label="Send an email"
                className={socialButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <span>Email</span>
              </a>
            )}

          {typeof profile.phone === 'string' &&
            profile.phone.trim() &&
            /^[+\d\s().-]+$/.test(profile.phone.trim()) && (
              <a
                href={`tel:${profile.phone.trim().replace(/[^\d+]/g, '')}`}
                id="footer-phone"
                aria-label="Call phone number"
                className={socialButtonClasses}
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Phone</span>
              </a>
            )}
        </nav>

        {/* Back to top */}
        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 sm:text-sm"
        >
          Back to top
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
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </a>

        {/* Copyright */}
        <div className="w-full border-t border-black/[0.07] pt-6 dark:border-white/10">
          <p
            id="footer-copyright"
            className="text-xs leading-6 text-zinc-500 dark:text-zinc-400 sm:text-sm"
          >
            © {currentYear} {profile.name || 'Your Name'}. All rights reserved.
          </p>
          <p className="mt-1 text-[10px] text-zinc-400 dark:text-zinc-500 sm:text-xs">
            Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
