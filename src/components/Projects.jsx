import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Award, Lock } from 'lucide-react'; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform (Darsh)',
      description: 'A full-stack e-commerce solution developed with React.js for the frontend, Node.js with Express for the backend, and MongoDB. Features optimized API endpoints (40% faster) and integrated Cloudinary for 1,000+ product images, leading to a significant monthly revenue increase.',
      image: './Img/darsh.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Cloudinary', 'Scalability'],
      icon: Globe,
      color: 'from-blue-500 to-purple-600',
      githubLink: '',
      demoLink: 'https://www.darshsaree.com/',
      isPrivate: true
    },
    {
      id: 2,
      title: 'Ayushvaani Healthcare Portal (Frontend)',
      description: 'Developed the responsive and intuitive user interface for a healthcare portal. Focused on creating seamless patient and doctor dashboards, appointment booking flows, and accessible health resource displays using modern frontend technologies.',
      image: './Img/ayush.png',
      tags: ['React', 'Tailwind CSS', 'UI/UX', 'Frontend', 'Responsive Design', 'API Integration'],
      icon: Smartphone,
      color: 'from-green-500 to-teal-600',
      githubLink: 'https://github.com/yourusername/ayushvaani-frontend',
      demoLink: 'https://aayushvaani.clinicalaiassistance.com/',
      isPrivate: true
    },
    {
      id: 3,
      title: 'Annual College Fest Portal',
      description: 'Designed and implemented a comprehensive web portal for annual college festivals. Features included event registration, detailed schedules, live updates, photo galleries, and an administrative panel for event management and attendee data handling.',
      image: './Img/alfresco.png',
      tags: ['React', 'Tailwind CSS', 'Event Management', 'UI/UX', 'Responsive Design'],
      icon: Award,
      color: 'from-orange-500 to-red-600',
      githubLink: 'https://github.com/yourusername/college-fest-portal',
      demoLink: 'https://www.alfresco.co.in/'
    }
  ];

  const cardVariants = {
    initial: {
      rotateY: 0,
      scale: 1,
      z: 0
    },
    hover: {
      rotateY: 15,
      scale: 1.05,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      rotateY: -5,
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const swipeBackVariants = {
    initial: { x: 0, opacity: 1 },
    swipeOut: {
      x: -300,
      opacity: 0,
      rotateY: -90,
      transition: { duration: 0.3 }
    },
    swipeBack: {
      x: 300,
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0 }
    },
    swipeIn: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-purple-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06B6D4 0%, transparent 50%)",
            backgroundSize: "400px 400px",
          }}
        />

        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work. Click on any project to explore more details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeState, setSwipeState] = useState('initial');
  const [privateMessage, setPrivateMessage] = useState(''); 

  const cardVariants = {
    initial: {
      rotateY: 0,
      scale: 1,
      z: 0,
      x: 0,
      opacity: 1
    },
    hover: {
      rotateY: 5,
      scale: 1.03,
      z: 30,
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      rotateY: 0,
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    },
    swipeOut: {
      x: -400,
      opacity: 0,
      rotateY: -90,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    },
    swipeBack: {
      x: 400,
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
      transition: { duration: 0 }
    },
    swipeIn: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handlePrivateGithubClick = (e) => {
    e.stopPropagation();
    setPrivateMessage('This repository is private. Please contact me for access! 🔑');
    setTimeout(() => {
      setPrivateMessage('');
    }, 4000); 
  };

  return (
    <motion.div
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col"
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        style={{
          transformStyle: 'preserve-3d',
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
          >
            <motion.div
              className="text-white text-center"
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {project.icon && <project.icon className="w-12 h-12 mx-auto mb-2" />}
              <p className="font-semibold">Explore Project</p>
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="p-6 flex flex-col flex-grow"
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>

          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-400/30"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + tagIndex * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(139, 92, 246, 0.3)',
                  rotate: 5
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex space-x-3 mt-auto">
            {project.isPrivate ? (
              <motion.button
                className="flex-1 bg-gray-700/50 text-gray-50 whitespace-nowrap md:text-gray-400 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium cursor-not-allowed border border-gray-600"
                whileHover={{ scale: 1 }} 
                whileTap={{ scale: 1 }}
                onClick={handlePrivateGithubClick}
              >
                <Lock className="w-4 h-4" />
                <span>Private Repo</span>
              </motion.button>
            ) : (
              <motion.button
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => { e.stopPropagation(); window.open(project.githubLink, '_blank'); }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.button>
            )}

            <motion.button
              className="flex-1 border border-purple-400/50 text-purple-300 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium hover:bg-purple-600/20"
              whileHover={{
                scale: 1.02,
                borderColor: '#A78BFA'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.button>
          </div>

        </motion.div>

        <motion.div
          className="absolute inset-0 bg-purple-900/20 rounded-3xl -z-10 blur-sm"
          initial={{
            transform: 'translateZ(-50px) translateY(10px) translateX(5px)'
          }}
          whileHover={{
            transform: 'translateZ(-50px) translateY(20px) translateX(10px)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <AnimatePresence>
        {privateMessage && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-600/90 text-white text-xs px-4 py-2 rounded-full shadow-lg z-20 whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {privateMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
