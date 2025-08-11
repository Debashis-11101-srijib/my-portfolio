import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SmoothScroll = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
     const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

     const handleScroll = () => {
      setIsVisible(window.scrollY > 100);  
    };

     window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

     return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
     
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-400/60 rounded-full pointer-events-none z-50 hidden md:block" 
        style={{
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8, 
        }}
        animate={{
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 0.1, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.05 
        }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform-origin-left z-50"
        style={{ scaleX }} 
      />

      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl z-40"
        initial={{ opacity: 0, scale: 0 }} 
        animate={{
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0, 
          rotate: isVisible ? 360 : 0 
        }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" 
        }}
        whileTap={{ scale: 0.9 }} 
        onClick={scrollToTop} 
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }} 
        >
          ↑
        </motion.div>
      </motion.button>

      <div className="fixed right-8 lg:right-24 top-1/2 transform -translate-y-1/2 space-y-4 z-40 hidden lg:block">
        {['Hero', 'About', 'Services', 'Resume', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((section, index) => (
          <motion.div
            key={section}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.2 }} 
            onClick={() => {
              const element = document.getElementById(section.toLowerCase());
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              className="w-3 h-3 rounded-full border-2 border-purple-400 bg-transparent group-hover:bg-purple-400 transition-all duration-300"
              animate={{
                scale: [1, 1.2, 1],
                borderColor: ['#A78BFA', '#06B6D4', '#A78BFA'], 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2, 
              }}
            />
            <motion.span
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {section}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0], 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0], 
            }}
            transition={{
              duration: Math.random() * 5 + 3, 
              repeat: Infinity,
              delay: Math.random() * 3, 
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SmoothScroll;
