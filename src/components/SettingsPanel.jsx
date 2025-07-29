import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Sun, Moon, Save } from 'lucide-react';
import ButtonSound from '@/components/ButtonSound';

const SettingsPanel = ({ theme, toggleTheme, isMusicPlaying, toggleMusic, onSave }) => {
  const [playButtonSound, setPlayButtonSound] = useState(false);

  const handleButtonClick = (action) => {
    setPlayButtonSound(true);
    action();
    setTimeout(() => setPlayButtonSound(false), 500);
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="pixel-card flex items-center gap-2 p-2">
        <button onClick={() => handleButtonClick(toggleTheme)} className="pixel-button !p-2">
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <button onClick={() => handleButtonClick(toggleMusic)} className={`pixel-button !p-2 ${isMusicPlaying ? 'bg-[var(--pixel-accent-3)]' : ''}`}>
          <Music className="w-6 h-6" />
        </button>
        <button onClick={() => handleButtonClick(onSave)} className="pixel-button !p-2">
          <Save className="w-6 h-6" />
        </button>
        <ButtonSound src="/assets/button1.mp3" play={playButtonSound} />
      </div>
    </motion.div>
  );
};

export default SettingsPanel;