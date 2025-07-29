import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { skills, projects, experience, achievements, navLinks } from '@/data/portfolioData';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import Navigation from '@/components/Navigation';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import PixelWipe from '@/components/PixelWipe';
import SettingsPanel from '@/components/SettingsPanel';
import BackgroundMusic from '@/components/BackgroundMusic';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [gameStarted, setGameStarted] = useState(false);
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'dark');
  const [isMusicPlaying, setIsMusicPlaying] = useLocalStorage('portfolio-music', false);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSaveSettings = () => {
    toast({
      className: 'pixel-card text-white text-lg',
      title: <p className="pixel-font text-[var(--pixel-accent-4)]">PROGRESS SAVED!</p>,
      description: <p>Your theme and music preferences are saved.</p>,
    });
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleMusic = () => {
    setIsMusicPlaying(prev => !prev);
  };

  return (
    <>
      <Helmet>
        <title>Anantraj Prasad - A Retro Portfolio Adventure</title>
        <meta name="description" content="Anantraj Prasad's interactive portfolio. A computer science student specializing in Data Structures, Algorithms, and full-stack development." />
      </Helmet>

      <BackgroundMusic src="/assets/background.mp3" play={gameStarted && isMusicPlaying} />

      <AnimatePresence mode="wait">
        {!gameStarted && <Home onStart={handleStartGame} />}
      </AnimatePresence>

      <AnimatePresence>
        {gameStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen scanlines"
          >
            <PixelWipe />
            <Navigation activeSection={activeSection} onNavClick={handleNavClick} links={navLinks} />

            <main className="pt-16">
              <div id="home"></div>
              <About />
              <Skills skills={skills} />
              <Projects projects={projects} />
              <Experience experience={experience} />
              <Achievements achievements={achievements} />
              <Contact />
            </main>
            
            <Footer />
            
            <SettingsPanel 
              theme={theme}
              toggleTheme={toggleTheme}
              isMusicPlaying={isMusicPlaying}
              toggleMusic={toggleMusic}
              onSave={handleSaveSettings}
            />
            <Toaster />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;