import React, { useState, useEffect, useRef } from 'react';

const SECTION_IDS = ['about', 'services', 'why-me', 'projects', 'certificates', 'process', 'faq', 'contact'];

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Me', href: '#why-me' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(false);

  // keep a ref in sync so the scroll handler always sees the latest value
  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  // Fix 5: offset anchor jumps so sections are not hidden under the sticky header
  useEffect(() => {
    const root = document.documentElement;
    const prevPadding = root.style.scrollPaddingTop;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollPaddingTop = '6rem';
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollPaddingTop = prevPadding;
      root.style.scrollBehavior = prevBehavior;
    };
  }, []);

  // Fix 4 + minor: ONE scroll listener, throttled with requestAnimationFrame,
  // and scroll-spy uses getBoundingClientRect (correct inside nested layouts)
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 20);

      // Hide on scroll down, show on scroll up
      const delta = y - lastScrollY.current;
      if (menuOpenRef.current || y < 80) {
        setHidden(false); // always visible at the top or while the menu is open
        lastScrollY.current = y;
      } else if (Math.abs(delta) > 8) { // ignore tiny movements
        setHidden(delta > 0);
        lastScrollY.current = y;
      }

      const scrollPos = window.scrollY + 160;
      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos) current = id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Fix 3: close menu on Escape and when resizing up to desktop width
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Fix 3: lock page scroll while the mobile drawer is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="header"
      onFocus={() => setHidden(false)}
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-[#eaedf0]/90 dark:bg-[#09090b]/90 border-b border-black/10 dark:border-white/10 shadow-sm'
          : 'bg-[#eaedf0]/75 dark:bg-[#09090b]/75 border-b border-transparent'
      }`}
    >
      {/* Fix 1: h-18 does not exist in Tailwind, use an arbitrary 72px height */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="font-title text-xl font-bold tracking-tight text-black dark:text-white inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          id="header-logo"
        >
          <span>Aditya Pawar</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" id="header-nav" aria-label="Main navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative py-1 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-black dark:text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white after:rounded-full'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button (Dark / Light) */}
          <button
            id="theme-toggle-btn"
            type="button"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-800/70 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm cursor-pointer"
            onClick={() => toggleTheme && toggleTheme()}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* CTA Hire Me Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all shadow-sm"
          >
            Let's Connect
          </a>

          {/* Mobile Hamburger Button
              Fix 2: bars are absolutely positioned around the button's vertical center,
              so the translate distance (6px) always matches the bar spacing exactly. */}
          <button
            id="hamburger-btn"
            type="button"
            className="lg:hidden relative w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-800/70 text-black dark:text-white cursor-pointer transition-all"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute left-2.5 right-2.5 top-1/2 -mt-px h-0.5 bg-current rounded-full transition-transform duration-300 ${
                menuOpen ? 'rotate-45' : '-translate-y-[6px]'
              }`}
            ></span>
            <span
              className={`absolute left-2.5 right-2.5 top-1/2 -mt-px h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute left-2.5 right-2.5 top-1/2 -mt-px h-0.5 bg-current rounded-full transition-transform duration-300 ${
                menuOpen ? '-rotate-45' : 'translate-y-[6px]'
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden w-full max-h-[calc(100vh-72px)] overflow-y-auto bg-[#eaedf0]/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-6 shadow-xl transition-all"
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block py-1 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-black dark:text-white font-bold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 border-t border-black/10 dark:border-white/10 sm:hidden">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all shadow-sm"
                onClick={closeMenu}
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;