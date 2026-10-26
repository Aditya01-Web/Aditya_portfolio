
import React from 'react';

const techItems = [
  { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
  { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'Java', iconClass: 'devicon-java-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'Firebase', iconClass: 'devicon-firebase-plain colored' },
  { name: 'Git', iconClass: 'devicon-git-plain colored' },
  { name: 'GitHub', iconClass: 'devicon-github-original colored' },
  { name: 'Vercel', iconClass: 'devicon-vercel-original colored' },
  { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
];

function TechBadge({ item }) {
  return (
    <div className="tech-badge group inline-flex shrink-0 items-center gap-3 rounded-xl border border-zinc-300/70 bg-white/75 px-5 py-3 text-zinc-900 shadow-sm backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-zinc-900/70 dark:text-white dark:hover:border-cyan-300/40 dark:hover:bg-zinc-800">
      <i
        className={`${item.iconClass} text-xl leading-none sm:text-2xl`}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
        {item.name}
      </span>
    </div>
  );
}

export function TechStrip() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-title"
      className="tech-strip relative isolate mx-4 my-8 w-auto overflow-hidden rounded-3xl border border-zinc-200 bg-[#f8fafc] py-14 shadow-xl transition-colors duration-500 dark:border-white/10 dark:bg-[#09090b] sm:mx-6 sm:py-16 lg:mx-10 xl:mx-auto xl:max-w-7xl md:py-20"
    >
      <style>{`
        .tech-strip .tech-atmosphere {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          border-radius: inherit;
        }

        .tech-strip .tech-spotlight {
          position: absolute;
          width: 600px;
          height: 350px;
          left: 50%;
          top: -230px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(6, 182, 212, 0.15) 0%,
            rgba(99, 102, 241, 0.08) 38%,
            transparent 72%
          );
          filter: blur(12px);
          animation: tech-spotlight-pulse 8s ease-in-out infinite alternate;
        }

        .dark .tech-strip .tech-spotlight {
          background: radial-gradient(
            ellipse,
            rgba(34, 211, 238, 0.17) 0%,
            rgba(99, 102, 241, 0.10) 38%,
            transparent 72%
          );
        }

        .tech-strip .tech-ring {
          position: absolute;
          width: 420px;
          height: 420px;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(100, 116, 139, 0.10);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: tech-ring-breathe 12s ease-in-out infinite alternate;
        }

        .tech-strip .tech-ring-two {
          width: 560px;
          height: 560px;
          animation-delay: -6s;
        }

        .dark .tech-strip .tech-ring {
          border-color: rgba(148, 163, 184, 0.09);
        }

        .tech-strip .tech-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(100, 116, 139, 0.22) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
          opacity: 0.30;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 25%,
            black 75%,
            transparent
          );
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 25%,
            black 75%,
            transparent
          );
        }

        .dark .tech-strip .tech-dots {
          background-image: radial-gradient(
            rgba(148, 163, 184, 0.35) 1px,
            transparent 1px
          );
          opacity: 0.24;
        }

        .tech-strip .tech-marquee-viewport {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .tech-strip .tech-marquee-track {
          display: flex;
          width: max-content;
          transform: translate3d(0, 0, 0);
          animation: tech-marquee-scroll 52s linear infinite;
          will-change: transform;
        }

        .tech-strip .tech-marquee-group {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 1rem;
          padding-right: 1rem;
        }

        .tech-strip .tech-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes tech-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes tech-spotlight-pulse {
          from {
            opacity: 0.65;
            transform: translateX(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes tech-ring-breathe {
          from {
            opacity: 0.45;
            scale: 0.96;
          }
          to {
            opacity: 1;
            scale: 1.04;
          }
        }

        @media (max-width: 640px) {
          .tech-strip .tech-ring {
            width: 280px;
            height: 280px;
          }

          .tech-strip .tech-ring-two {
            width: 380px;
            height: 380px;
          }

          .tech-strip .tech-spotlight {
            width: 360px;
          }

          .tech-strip .tech-marquee-track {
            animation-duration: 42s;
          }

          .tech-strip .tech-marquee-group {
            gap: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-strip .tech-spotlight,
          .tech-strip .tech-ring,
          .tech-strip .tech-marquee-track {
            animation: none;
          }

          .tech-strip .tech-marquee-viewport {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .tech-strip .tech-marquee-track {
            width: max-content;
            transform: none;
          }

          .tech-strip .tech-marquee-group[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>

      {/* Animated background contained within the rectangle */}
      <div className="tech-atmosphere -z-10" aria-hidden="true">
        <div className="tech-spotlight" />
        <div className="tech-ring" />
        <div className="tech-ring tech-ring-two" />
        <div className="tech-dots" />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/[0.06] dark:text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          MY TOOLKIT
        </span>

        <h2
          id="technologies-title"
          className="font-title text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
        >
          Technologies{' '}
          <span className="text-cyan-600 dark:text-cyan-300">&</span> Tools
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
          The tools and technologies I use to turn ideas into modern digital
          experiences.
        </p>
      </div>

      {/* Infinite scrolling technology badges */}
      <div
        className="tech-marquee-viewport relative z-10 w-full overflow-hidden py-5"
        role="region"
        aria-label="Technologies and development tools"
      >
        <div className="tech-marquee-track">
          <div className="tech-marquee-group">
            {techItems.map((item) => (
              <TechBadge key={item.name} item={item} />
            ))}
          </div>

          <div className="tech-marquee-group" aria-hidden="true">
            {techItems.map((item) => (
              <TechBadge key={`duplicate-${item.name}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="relative z-10 mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

export default TechStrip;
