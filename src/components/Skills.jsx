import React from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'Tailwind CSS', level: 95, color: 'from-orange-600 to-orange-500' },
      { name: 'Lucide React', level: 95, color: 'from-blue-600 to-blue-500' },
      { name: 'Swiper.js', level: 90, color: 'from-yellow-500 to-yellow-400' },
      { name: 'Framer Motion', level: 90, color: 'from-teal-500 to-cyan-500' },
    ],
    backend: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
      { name: 'Express.js', level: 85, color: 'from-gray-700 to-gray-600' },
      { name: 'Python', level: 80, color: 'from-blue-700 to-blue-500' },
      { name: 'REST', level: 85, color: 'from-purple-500 to-pink-500' },
      { name: 'MongoDB', level: 80, color: 'from-green-700 to-lime-600' },
      { name: 'SQL', level: 75, color: 'from-indigo-600 to-blue-500' },
    ],
    tools: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-600', icon: '🐙' },
      { name: 'GitHub', level: 90, color: 'from-gray-800 to-gray-600', icon: '🔗' },
      { name: 'Random Forest', level: 70, color: 'from-emerald-500 to-lime-500', icon: '🌳' },
       { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-700', icon: '💻' },
      { name: 'C/C++', level: 70, color: 'from-blue-700 to-indigo-700', icon: '⚙️' },
      { name: 'Java', level: 60, color: 'from-red-500 to-orange-500', icon: '☕' },
    ],
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 } },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/20 filter blur-3xl"
          animate={{
            x: ['-20%', '80%', '-20%'],
            y: ['-20%', '50%', '-20%'],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-500/20 filter blur-3xl"
          animate={{
            x: ['100%', '0%', '100%'],
            y: ['50%', '-10%', '50%'],
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Skills & Expertise ✨
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Technologies and tools I leverage to transform innovative concepts into robust realities.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          <SkillCategory
            title="Frontend"
            skills={skillsData.frontend}
            cardContainerVariants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,  
                },
              },
            }}
            cardItemVariants={{
              hidden: { opacity: 0, y: 50, scale: 0.7, rotateX: 30 }, 
              visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 150, damping: 20, duration: 0.8 } },  
            }}
            isFrontend={true} 
          />

          <SkillCategory
            title="Backend"
            skills={skillsData.backend}
            cardContainerVariants={cardContainerVariants}
            cardItemVariants={cardItemVariants}
          />

          <div className="md:col-span-2 lg:col-span-1 hidden md:block">
            <SkillCategory
              title="Tools & Others"
              skills={skillsData.tools}
              cardContainerVariants={cardContainerVariants}
              cardItemVariants={cardItemVariants}
            />
          </div>

          <div className="md:hidden col-span-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Tools & Others
            </h3>
            <SwipeableSkillCards skills={skillsData.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};
const SkillCategory = ({ title, skills, cardContainerVariants, cardItemVariants, isFrontend = false }) => {
  return (
    <motion.div
      className={`
        relative group
        bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8
        shadow-2xl border border-white/20
        transition-all duration-300
        ${isFrontend
          ? 'bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-cyan-900/40 border-purple-500/50 hover:border-cyan-400/80 shadow-purple-900/50 hover:shadow-cyan-900/60'
          : 'hover:border-purple-500 hover:shadow-purple-900/40'
        }
      `}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {isFrontend && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
          style={{ pointerEvents: 'none' }}
        />
      )}

      <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent ${isFrontend ? 'bg-gradient-to-r from-blue-300 to-cyan-300' : 'bg-gradient-to-r from-purple-400 to-cyan-400'}`}>
        {title}
      </h3>
      <motion.div
        className="space-y-4 sm:space-y-6"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`
              flex flex-col relative z-10 p-3 rounded-lg border border-transparent
              transition-colors duration-300
              ${isFrontend
                ? 'hover:border-cyan-400 hover:bg-white/5'
                : 'hover:border-blue-400/50'
              }
            `}
            variants={cardItemVariants}
            whileHover={{
              scale: isFrontend ? 1.05 : 1.02, 
              x: isFrontend ? 10 : 5,
              boxShadow: isFrontend ? "0 0 25px rgba(96, 165, 250, 0.4)" : "none", 
              rotateZ: isFrontend ? [0, 1, -1, 0] : 0, 
              y: isFrontend ? -5 : 0 
            }}
            transition={{ type: "spring", stiffness: isFrontend ? 250 : 200, damping: 15 }} 
          >
            <div className="flex justify-between items-center mb-1">
              <motion.span
                className={`text-base sm:text-lg font-medium text-gray-100 transition-colors duration-200 ${isFrontend ? 'group-hover:text-cyan-300' : 'group-hover:text-cyan-300'}`}
                whileHover={{ textShadow: isFrontend ? "0 0 8px rgba(96, 165, 250, 0.8)" : "none", scale: isFrontend ? 1.02 : 1 }}  
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.span>
              <motion.span
                className={`text-base sm:text-lg font-bold text-gray-300 transition-colors duration-200 ${isFrontend ? 'group-hover:text-cyan-200' : 'group-hover:text-cyan-200'}`}
                whileHover={{ textShadow: isFrontend ? "0 0 8px rgba(96, 165, 250, 0.8)" : "none", scale: isFrontend ? 1.02 : 1 }}  
                transition={{ duration: 0.2 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div
              className="w-full bg-gray-700 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner relative z-10"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + 0.08 * skills.indexOf(skill),
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: isFrontend ? "0 0 15px rgba(96, 165, 250, 0.8)" : "none" }}  
              >
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

 const SwipeableSkillCards = ({ skills }) => {
  const containerRef = React.useRef(null);
  const [dragConstraints, setDragConstraints] = React.useState({ left: 0, right: 0 });
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  React.useEffect(() => {
    const calculateDragConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 160;
        const gap = 16;
        const totalContentWidth = skills.length * cardWidth + (skills.length - 1) * gap;
        const maxDragLeft = -(totalContentWidth - containerWidth);
        setDragConstraints({
          left: maxDragLeft < 0 ? maxDragLeft : 0,
          right: 0,
        });
      }
    };

    calculateDragConstraints();
    window.addEventListener('resize', calculateDragConstraints);
    return () => window.removeEventListener('resize', calculateDragConstraints);
  }, [skills.length]);

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        ref={containerRef}
        className="flex space-x-4 px-4 pb-2"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.3}
        whileDrag={{ cursor: 'grabbing' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`min-w-[160px] sm:min-w-[180px] flex-shrink-0 bg-[#2A2A3E] rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-white border border-[#3A3A4E] cursor-grab active:cursor-grabbing transform perspective-[1000px] shadow-lg`}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
              rotateY: 5,
            }}
            whileTap={{ scale: 0.9, rotateX: 0 }}
          >
            {skill.icon && (
              <motion.div
                className="text-4xl sm:text-5xl mb-2 sm:mb-3"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                {skill.icon}
              </motion.div>
            )}
            <span className="text-lg sm:text-xl font-bold text-center">{skill.name}</span>
            <span className="text-sm sm:text-md text-gray-400 mt-1">{skill.level}%</span>
            <div
              className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 overflow-hidden"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: index * 0.15 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

       <motion.div
        className="flex flex-col items-center mt-4 sm:mt-6 text-purple-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="text-3xl sm:text-4xl"
          animate={{ x: isInView ? [0, 10, -10, 0] : 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {isInView ? '👉' : '👇'}
        </motion.div>
        <p className="text-sm sm:text-lg font-semibold mt-1 sm:mt-2">
          {isInView ? 'Drag horizontally to explore more tools!' : 'Scroll down for more!'}
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;
