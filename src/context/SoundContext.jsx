import React, { createContext, useState, useContext, useEffect } from 'react';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [isSoundOn, setIsSoundOn] = useState(true); // Set to true by default
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    // Initialize AudioContext
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    return () => {
      if (context) {
        context.close();
      }
    };
  }, []);

  const toggleSound = () => {
    setIsSoundOn(prev => !prev);
  };

  const playClickSound = () => {
    if (isSoundOn && audioContext) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  const playHoverSound = () => {
    if (isSoundOn && audioContext) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.05);
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound, playClickSound, playHoverSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}