
import React from 'react';
import { FlipText } from '@/components/ui/flip-text';
import { profileData } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative isolate w-full overflow-hidden bg-white py-16 transition-colors duration-300 dark:bg-zinc-950 md:py-16 lg:py-24"
    >
      {/* Scoped animation styles */}
      <style>{`
        .hero-section .hero-glow {
          background:
            radial-gradient(
              ellipse at 15% 20%,
              rgba(99, 102, 241, 0.16),
              transparent 42%
            ),
            radial-gradient(
              ellipse at 85% 35%,
              rgba(14, 165, 233, 0.15),
              transparent 40%
            ),
            radial-gradient(
              ellipse at 50% 100%,
              rgba(168, 85, 247, 0.12),
              transparent 45%
            );
        }

        .hero-section .hero-orb {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          filter: blur(75px);
          opacity: 0.45;
          pointer-events: none;
          animation: hero-float 16s ease-in-out infinite alternate;
        }

        .hero-section .hero-orb-one {
          top: 0;
          left: 4%;
          background: #818cf8;
        }

        .hero-section .hero-orb-two {
          top: 10%;
          right: 2%;
          width: 300px;
          height: 300px;
          background: #38bdf8;
          animation-duration: 20s;
          animation-delay: -5s;
        }

        .hero-section .hero-orb-three {
          bottom: -15%;
          left: 38%;
          width: 240px;
          height: 240px;
          background: #c084fc;
          animation-duration: 22s;
          animation-delay: -8s;
        }

        .dark .hero-section .hero-orb {
          opacity: 0.3;
        }

        .hero-section .hero-grid {
          background-image:
            linear-gradient(
              rgba(113, 113, 122, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(113, 113, 122, 0.08) 1px,
              transparent 1px
            );
          background-size: 42px 42px;
          -webkit-mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .dark .hero-section .hero-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );
        }

        @keyframes hero-float {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(30px, -25px, 0) scale(1.08);
          }

          100% {
            transform: translate3d(-25px, 25px, 0) scale(0.96);
          }
        }

        @media (max-width: 640px) {
          .hero-section .hero-orb {
            width: 180px;
            height: 180px;
            filter: blur(60px);
          }

          .hero-section .hero-orb-two {
            width: 200px;
            height: 200px;
          }

          .hero-section .hero-orb-three {
            left: 20%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-section .hero-orb {
            animation: none;
          }
        }
      `}</style>

      {/* Animated background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="hero-glow absolute inset-0" />

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        <div className="hero-grid absolute inset-0" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 dark:to-zinc-950/70" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:px-8">
        {/* Left content */}
        <div className="flex max-w-2xl flex-col items-start">
          <FlipText
            disableHover={true}
            as="h1"
            className="mb-5 cursor-default text-4xl font-extrabold leading-[1.12] tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl"
            id="hero-title"
          >
            I build fast websites and AI tools for small businesses
          </FlipText>

          <p
            id="hero-intro"
            className="mb-8 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg"
          >
            {profileData.intro}
          </p>

          <div className="flex w-full flex-wrap items-center gap-4 sm:w-auto">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
            >
              Start a project
            </a>

            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-xl border border-black/15 bg-white/80 px-6 py-3.5 text-base font-semibold text-black shadow-sm transition-all duration-200 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-zinc-800/80 dark:text-white dark:hover:bg-white dark:hover:text-black sm:w-auto"
            >
              See my projects
            </a>
          </div>
        </div>

        {/* Right glass card */}
        <div
          id="hero-side-card"
          className="flex flex-col gap-6 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/70 sm:p-8"
        >
          {/* Availability */}
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-black/10 bg-zinc-100/90 px-4 py-2 dark:border-white/10 dark:bg-zinc-800/90">
            <span
              className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            <span
              id="hero-availability"
              className="text-xs font-semibold text-black dark:text-white sm:text-sm"
            >
              {profileData.availability}
            </span>
          </div>

          {/* Response time */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Response Time
            </span>

            <p
              id="hero-reply-time"
              className="text-base font-bold text-black dark:text-white sm:text-lg"
            >
              {profileData.replyTime}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Tech Stack &amp; Tools
            </span>

            <div
              id="hero-tools-list"
              className="flex flex-wrap gap-2"
            >
              {profileData.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-black/10 bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:border-black/30 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-white/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
