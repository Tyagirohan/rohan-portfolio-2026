import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="loading-screen"
      >
        <div className="text-center max-w-md mx-auto px-4">
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-24 h-24 mx-auto mb-8 rounded-lg bg-gradient-to-br from-pcb-copper to-pcb-gold flex items-center justify-center chip-glow"
          >
            <span className="text-white font-bold text-4xl font-mono">RT</span>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-pcb-gold mb-2 font-mono">
              Initializing System...
            </h2>
            <p className="text-gray-400 text-sm font-mono">
              Loading portfolio modules
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full bg-pcb-green/30 rounded-full h-3 overflow-hidden border border-pcb-copper/50 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <div className="text-pcb-gold font-bold font-mono text-xl">
            {Math.floor(progress)}%
          </div>

          {/* Loading Messages */}
          <motion.div
            key={Math.floor(progress / 25)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-500 text-sm font-mono"
          >
            {progress < 25 && '> Loading 3D components...'}
            {progress >= 25 && progress < 50 && '> Compiling circuit board...'}
            {progress >= 50 && progress < 75 && '> Optimizing performance...'}
            {progress >= 75 && '> Ready to launch!'}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;

