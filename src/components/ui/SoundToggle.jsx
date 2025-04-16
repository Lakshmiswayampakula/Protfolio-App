import React from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSound } from '../../context/SoundContext';

const SoundToggle = () => {
  const { isSoundOn, toggleSound } = useSound();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none"
      onClick={toggleSound}
      aria-label={isSoundOn ? 'Mute sound' : 'Enable sound'}
    >
      {isSoundOn ? (
        <FaVolumeUp className="text-primary" />
      ) : (
        <FaVolumeMute className="text-gray-500" />
      )}
    </motion.button>
  );
};

export default SoundToggle;