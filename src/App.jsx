import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStrip } from './components/TechStrip';
import { Services } from './components/Services';
import { WhyMe } from './components/WhyMe';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Process } from './components/Process';
//import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PageTransition } from './components/ui/PageTransition';
import { ScrollProgress } from './components/ui/ScrollProgress';

export function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="w-full min-h-screen bg-[#eaedf0] dark:bg-[#09090b] text-black dark:text-zinc-100 transition-colors duration-300">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main id="main-content" className="w-full">
        <PageTransition delay={0.05}>
          <Hero />
        </PageTransition>

        <PageTransition>
          <About />
        </PageTransition>

        <PageTransition>
          <TechStrip />
        </PageTransition>

        <PageTransition>
          <Services />
        </PageTransition>

        <PageTransition>
          <WhyMe />
        </PageTransition>

        <PageTransition>
          <Projects />
        </PageTransition>

        <PageTransition>
          <Certificates />
        </PageTransition>

        <PageTransition>
          <Process />
        </PageTransition>
      
        <PageTransition>
          <Faq />
        </PageTransition>

        <PageTransition>
          <Contact />
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}

export default App;
