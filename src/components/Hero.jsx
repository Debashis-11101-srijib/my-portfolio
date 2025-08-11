import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
   const starVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const planetVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

   const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }));

   const [downloadMessage, setDownloadMessage] = useState('');

   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumePath = "./Img/DebashisPaulResume.pdf";
    const fileName = "Debashis_Paul_Resume.pdf";

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = fileName; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link); 

    setDownloadMessage('Awesome! Resume downloaded successfully! 🚀');

    setTimeout(() => {
      setDownloadMessage('');
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8">  
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            variants={starVariants}
            animate="animate"
            initial={{ opacity: 0 }}
            transition={{ delay: star.delay }}
          />
        ))}

        <motion.div
          className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm" 
          variants={planetVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-30 blur-sm" 
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0], 
            scale: [1, 1.1, 1], 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1], 
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {typeof window !== 'undefined' && (  
          <motion.div
            className="absolute top-[20%] sm:top-[25%] left-0 w-1 h-1 bg-white rounded-full"
            animate={{
              x: [0, window.innerWidth + 200], 
              y: [0, window.innerHeight * 0.3], 
              opacity: [0, 1, 0], 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5, 
              ease: "easeOut"
            }}
          />
        )}
      </div>

      {/* Main content*/}
      <div className="container mx-auto px-0 mb-6 text-center text-white relative z-10"> 
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Animated Title and Subtitle */}
          <motion.div className="mb-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight mt-16 sm:mt-20 md:mt-20 lg:mt-20" 
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Debashis Paul
            </motion.h1>
            <motion.div
              className="text-lg md:text-3xl mb-6 text-gray-300 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, delay: 1 }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-purple-400"
              >
                Full Stack Developer & UI Designer
              </motion.span>
           
          </motion.div>
          </motion.div>

          {/* Floating Description*/}
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed px-4" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Crafting extraordinary digital experiences across the galaxy of modern web technologies.
            Transforming ideas into reality with pixel-perfect precision and cosmic creativity.
          </motion.p>

           <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-12 px-4"  
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { Icon: Github, href: "https://github.com/Debashis-11101-srijib", color: "from-gray-600 to-gray-800", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/debashis-paul-a12795231/", color: "from-blue-600 to-blue-800", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:adebashispaul@gmail.com", color: "from-red-600 to-red-800", label: "Email" }
            ].map(({ Icon, href, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`relative p-3 sm:p-4 bg-gradient-to-br ${color} rounded-full backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden`} // Responsive padding for icons
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -8, 0],  
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }
                }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" /> 
                 <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full scale-0"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 px-4"  
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm sm:text-base font-semibold hover:shadow-2xl transform transition-all duration-300 relative overflow-hidden group min-w-[180px] sm:min-w-[200px]"  
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              onClick={() => scrollToSection('about')} 
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Explore My Universe</span>
            </motion.button>

            <motion.button
              onClick={handleDownloadResume} 
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-purple-400 rounded-full text-purple-300 text-sm sm:text-base font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group min-w-[180px] sm:min-w-[200px]" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />  
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

           {downloadMessage && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.5 }}
              className="text-purple-300 text-sm sm:text-base mt-4" 
            >
              {downloadMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
      <br />

       <motion.div
        className="absolute   bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 sm:space-y-2" // Responsive space-y
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-4 h-7 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-purple-400 rounded-full flex justify-center relative backdrop-blur-sm bg-white/5" // Responsive size for mouse icon
            whileHover={{ scale: 1.2, borderColor: "#60A5FA" }}
          >
            <motion.div
              className="w-1 h-2 sm:h-2 md:h-3 bg-purple-400 rounded-full mt-1 sm:mt-1.5 md:mt-2"  
              animate={{
                y: [0, 8, 0], 
                opacity: [1, 0.3, 1]  
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />  
        </motion.div>
      </motion.div>

       <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
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
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
