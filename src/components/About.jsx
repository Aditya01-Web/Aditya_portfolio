import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutData, profileData } from '../data/portfolioData';
import character from '../assets/character.jpg';

const EASE = [0.22, 1, 0.36, 1];

// Floating dots for the background: left/top in %, size in px, timing in s
const DOTS = [
  { left: '8%', top: '75%', size: 6, duration: 11, delay: 0 },
  { left: '22%', top: '88%', size: 4, duration: 14, delay: 2 },
  { left: '38%', top: '80%', size: 5, duration: 12, delay: 5 },
  { left: '56%', top: '92%', size: 4, duration: 15, delay: 1 },
  { left: '72%', top: '78%', size: 6, duration: 13, delay: 3 },
  { left: '88%', top: '90%', size: 5, duration: 10, delay: 6 },
];

export function About() {
  // useReducedMotion can return null before it resolves; normalise to a boolean
  const shouldReduceMotion = !!useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const imageSrc = character || aboutData.image;
  const displayName = profileData.name || 'Aditya Pawar';

  // Retry loading if the image source changes after a previous failure
  useEffect(() => {
    setImageError(false);
  }, [imageSrc]);

  // ---- Page transition variants ----
  // Parent controls enter/exit and staggers its children.
  const pageVariants = {
    initial: { opacity: shouldReduceMotion ? 1 : 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
    exit: {
      opacity: shouldReduceMotion ? 1 : 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeIn' },
    },
  };

  const photoVariants = {
    initial: shouldReduceMotion ? {} : { opacity: 0, x: -40, scale: 0.96 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: EASE },
    },
    exit: shouldReduceMotion ? {} : { opacity: 0, x: -30 },
  };

  const itemVariants = {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: EASE },
    },
    exit: shouldReduceMotion ? {} : { opacity: 0, y: -16 },
  };

  return (
    <motion.section
      id="about"
      className="relative w-full overflow-hidden py-16 transition-colors duration-300 md:py-24"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Page background: moving grid, pulsing glows, rising dots, light sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Grid that slowly scrolls diagonally */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]"
          animate={
            shouldReduceMotion
              ? { backgroundPosition: '0px 0px' }
              : { backgroundPosition: ['0px 0px', '48px 48px'] }
          }
          transition={{
            duration: 20,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'linear',
          }}
        />

        {/* Diagonal light sweep */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute -top-1/4 left-0 h-[150%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/[0.06]"
            initial={{ x: '-120%' }}
            animate={{ x: '420%' }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Glow 1: drifts and pulses */}
        <motion.div
          className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-zinc-400/30 blur-3xl dark:bg-white/10 md:h-96 md:w-96"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1, opacity: 1 }
              : {
                  x: [0, 60, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }
          }
          transition={{
            duration: 12,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glow 2: drifts the opposite way */}
        <motion.div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-zinc-500/20 blur-3xl dark:bg-white/5 md:h-96 md:w-96"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1, opacity: 1 }
              : {
                  x: [0, -60, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.8, 1, 0.8],
                }
          }
          transition={{
            duration: 15,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

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
              animate={{ y: -320, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
      </div>

      <div
        id="about-container"
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:px-8"
      >
        {/* Photo and character box */}
        <motion.div
          variants={photoVariants}
          className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center isolate overflow-hidden rounded-3xl border border-black/10 bg-zinc-200/80 shadow-lg dark:border-white/10 dark:bg-zinc-800/80"
        >
          {/* Ambient background animation */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-white/20 to-transparent dark:from-white/5 dark:via-transparent dark:to-white/5"
            animate={
              shouldReduceMotion
                ? { scale: 1 }
                : { scale: [1, 1.05, 1] }
            }
            transition={{
              duration: 8,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Character photo */}
          {!imageError && imageSrc ? (
            <motion.img
              src={imageSrc}
              alt={`${displayName} - profile photo`}
              loading="lazy"
              decoding="async"
              className="relative z-10 h-full w-full object-cover"
              animate={
                shouldReduceMotion
                  ? { y: 0, scale: 1 }
                  : { y: [0, -5, 0], scale: [1, 1.015, 1] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                      scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }
              }
              onError={() => setImageError(true)}
            />
          ) : (
            /* Fallback avatar */
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-zinc-100 p-8 text-center dark:bg-zinc-800">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-extrabold text-white dark:bg-white dark:text-black">
                {displayName.charAt(0).toUpperCase()}
              </div>

              <span className="text-base font-bold text-black dark:text-white">
                {displayName}
              </span>

              <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Web Developer
              </span>
            </div>
          )}
        </motion.div>

        {/* About text content (children stagger in one after another) */}
        <div className="flex min-w-0 flex-col gap-6">
          <motion.h2
            variants={itemVariants}
            className="font-title text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
          >
            {aboutData.heading || 'About Me'}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-4 font-sans text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg"
          >
            {aboutData.statement ? (
              <p className="whitespace-pre-line">{aboutData.statement}</p>
            ) : (
              <p>
                Hello! I am {displayName}, a web developer passionate
                about building responsive and user-friendly websites.
              </p>
            )}
          </motion.div>

          {/* Quote card */}
          {aboutData.quote && (
            <motion.blockquote
              variants={itemVariants}
              className="flex items-start gap-4 rounded-2xl rounded-l-none border-y border-r border-l-4 border-black/10 border-l-black bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:border-l-white dark:bg-zinc-900/80"
            >
              <svg
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-black dark:text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-base font-semibold italic leading-relaxed text-black dark:text-white sm:text-lg">
                {aboutData.quote}
              </p>
            </motion.blockquote>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default About;