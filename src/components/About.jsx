import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Development Expertise",
      description: "Designing, developing, and deploying robust web applications across the full stack with modern frameworks and best practices."
    },
    {
      icon: Palette,
      title: "Intuitive Design",
      description: "Crafting intuitive and engaging user interfaces (UI) and exceptional user experiences (UX) with a keen eye for aesthetics."
    },
    {
      icon: Rocket,
      title: "Scalable Innovation",
      description: "Delivering scalable and efficient solutions while continuously exploring new technologies to drive innovation and project success."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Cosmic Background*/}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06B6D4 0%, transparent 50%)",
            backgroundSize: "600px 600px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* About Me Title and Description Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            About Me
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            I'm a highly motivated and results-driven Full Stack Web Developer with 1.5+ years of experience in designing, developing, and deploying robust web applications. My focus is on delivering scalable and efficient solutions while continuously embracing new technologies.
          </p>
        </motion.div>

        {/* Image Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          <motion.div
            className="relative flex justify-center items-center p-4 sm:p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 filter blur-xl opacity-70"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform-gpu"
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="./Img/myImage.jpeg" 
                alt="Debashis Paul's Professional Headshot"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-white">Full Stack Web Developer | Innovator</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              My Journey
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed">
              My professional journey began with developing an e-commerce platform, where I utilized React.js for the frontend, Node.js with Express for the backend, and MongoDB for the database. This experience significantly enhanced platform scalability by optimizing API endpoints, reducing response times by 40%, and enabling the platform to handle high traffic with minimal latency.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              I am proficient in various technologies including HTML, CSS, JavaScript, React, Node.js, SQL, MongoDB, Git, GitHub, Python, and more, always aiming for clean, maintainable, and efficient code.
            </p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {['React', 'Node.js', 'MongoDB', 'Express.js', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'Machine Learning'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-400/30 whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.08, type: "spring", stiffness: 200 }}
                  viewport={{ once: true, amount: 0.8 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)', borderColor: '#8B5CF6' }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section*/}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">  
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                borderColor: '#06B6D4',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 relative z-10"
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 relative z-10">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 relative z-10 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden px-4 sm:px-0"> 
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20} 
            slidesPerView={1} 
            centeredSlides={true} 
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }} 
            loop={true} 
            className="mySwiper !pb-12" // !pb-12 to make space for pagination dots
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col justify-between" 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}  
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                    borderColor: '#06B6D4',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 relative z-10">
                    {feature.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 relative z-10 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
