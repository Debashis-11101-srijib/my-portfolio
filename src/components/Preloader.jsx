import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';  

   const Preloader = ({ onComplete }) => {
   const [progress, setProgress] = useState(0);
   const [currentText, setCurrentText] = useState(0);
   const [isComplete, setIsComplete] = useState(false);

   const loadingTexts = [
    "Compiling Data Stream...",
    "Synchronizing Modules...",
    "Establishing Connection...",
    "Optimizing User Interface...",
    "Ready to Launch..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval); 
          setTimeout(() => {
            setIsComplete(true); 
            setTimeout(onComplete, 800); 
          }, 500); 
          return 100; 
        }
        return prev + 2; 
      });
    }, 50); 

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length); 
    }, 1500); 

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, loadingTexts.length]); 

  return (
    <AnimatePresence >
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }} 
          exit={{
            opacity: 0,     
            scale: 1.05,       
            filter: "blur(8px)" 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }} 
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 40, 
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px", 
            }}
          />

          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
              style={{
                top: `${20 + i * 15}%`, 
                height: `${Math.random() * 3 + 1}px`, 
                width: '100%',
                opacity: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0], 
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2, 
                ease: "linear",
              }}
            />
          ))}

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl"
            style={{ width: '400px', height: '400px' }} 
            animate={{
              scale: [1, 1.05, 1], 
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-20 text-center px-4 md:px-6"> 
            <motion.div
              className="mb-8 md:mb-12"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="w-20 h-20 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg"  
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(139, 92, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  animate={{ rotate: 360 }}
                 >
                  <Code2 className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Debashis's Portfolio
            </motion.h1>

            <motion.div
              className="mb-6 md:mb-8 h-6 md:h-8"
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-purple-300 text-sm md:text-base font-medium">
                {loadingTexts[currentText]}
              </p>
            </motion.div>

            <div className="w-full max-w-xs md:max-w-md mx-auto mb-6 md:mb-8">
              <div className="flex justify-between text-xs md:text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 md:h-3 overflow-hidden border border-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-50">
              {[Sparkles, Zap, Code2].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-purple-400/30"
                  style={{
                    left: `${10 + index * 40}%`, 
                    top: `${15 + index * 25}%`,  
                  }}
                  animate={{
                    y: [0, -10, 0], 
                    rotate: [0, 180], 
                    opacity: [0.1, 0.4, 0.1], 
                  }}
                  transition={{
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              ))}
            </div>

            {progress === 100 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 border-4 border-purple-400 rounded-full"
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
