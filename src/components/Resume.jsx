import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, MapPin, Award, GraduationCap, Briefcase, Download, Star,  TrendingUp, Zap, } from 'lucide-react';

const Resume = () => {
  const [downloadMessage, setDownloadMessage] = useState('');

  const experiences = [
    {
      title: "Full Stack Web Developer (Remote)",
      company: "Freelancer",
      location: "Remote",
      period: "Jan 2024 - Present", 
      description: "Developed an e-commerce platform specializing in selling saris online. Utilized React.js for the frontend, Node.js with Express for the backend, and MongoDB for the database. Integrated Cloudinary for optimized storage and delivery of 1,000 product images. Increased monthly revenue by ₹80,000 by launching an e-commerce platform processing 3,000 sari sales.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "HTML", "CSS", "JavaScript"],
      achievements: [
        { text: "E-commerce Platform Launch", icon: Rocket },
        { text: "Revenue Growth (₹80k/month)", icon: TrendingUp },
        { text: "API Optimization (40% faster)", icon: Zap } 
      ],
      iconBgColor: 'from-blue-500 to-purple-600'
    },
    
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Government College of Engineering and Textile Technology, Berhampore",
      location: "Berhampore, West Bengal",
      period: "Oct 2021 - Jun 2025",
      gpa: "7.98/10.0", 
      percentage: "N/A", 
      achievements: ["Data Structures", "Algorithms", "Databases", "Web Technologies", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Education (H.S)",
      school: "Aiho High School (H.S)",
      location: "Aiho, Malda, West Bengal",
      period: "Sep 2021", 
      gpa: "N/A",
      percentage: "80.6%", 
      achievements: ["Science Stream", "Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary Education",
      school: "Aiho High School (H.S)",
      location: "Aiho, Malda, West Bengal",
      period: "Sep 2019", 
      gpa: "N/A",
      percentage: "76.85%", 
      achievements: ["Distinction in Science", "Computer Fundamentals"]
    }
  ];

  const certifications = [
    { name: "Next '23 Devloper Keynote", issuer: "Google Cloud Badge", year: "2023" },
    { name: "College Cultural Event  Certificate", issuer: "Govt. College of Engineering & Textile Technology", year: "2023" },
    { name: "Full Stack Web Development Certification", issuer: "Online Platform", year: "2025" },
  ];


  const handleDownloadResume = () => {
    const resumePath = "./Img/Debashis_Paul_Resume (4).pdf"; 
    const fileName = "Debashis_Paul_Resume.pdf"; 

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = fileName; 
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 

    setDownloadMessage('Fantastic! Resume downloaded successfully!🚀');

    setTimeout(() => {
      setDownloadMessage('');
    }, 3000);
  };

  return (
    <section id="resume-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)",
            backgroundSize: "40px 40px", 
            backgroundAttachment: "fixed"
          }}
        />
        <motion.div
          className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-cyan-400 opacity-5 blur-3xl"
          animate={{
            x: ["0%", "100%", "0%"],
            y: ["0%", "100%", "0%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-40 h-40 sm:w-50 sm:h-50 rounded-full bg-purple-400 opacity-5 blur-3xl"
          animate={{
            x: ["100%", "0%", "100%"],
            y: ["100%", "0%", "100%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10"> 
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight" 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Journey <span className="inline-block animate-pulse">🌠</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4" 
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my professional experience, education, and certifications.
          </motion.p>

          <motion.button
            onClick={handleDownloadResume}
            className="mt-6 sm:mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto w-fit relative overflow-hidden group border border-transparent hover:border-blue-400" 
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={false}
            />
            <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" /> 
            <span className="relative z-10">Download Full Resume</span>
          </motion.button>

          {downloadMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} 
              transition={{ duration: 0.5 }}
              className="text-purple-300 text-sm sm:text-base mt-4"
            >
              {downloadMessage}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center md:justify-start" // Responsive font sizes, aligned center on small, left on md+
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-purple-400" /> 
            Professional Experience
          </motion.h3>

          <div className="relative space-y-8 md:space-y-12 lg:space-y-16">
            <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-600/50 h-full hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-stretch gap-4 md:gap-8`}  
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)", 
                  y: -5 
                }}
                style={{ transformOrigin: 'center center' }}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 border border-white z-20 shadow-md" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className={`relative z-10 flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-2 md:mb-0`}>
                  <motion.h4
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300" 
                    whileHover={{ x: 3, scale: 1.01 }}
                  >
                    {exp.title}
                  </motion.h4>
                  <motion.p
                    className="text-purple-300 text-sm sm:text-base md:text-lg font-semibold mb-2 group-hover:text-purple-200 transition-colors duration-300" 
                    whileHover={{ x: 3, scale: 1.005 }}
                  >
                    {exp.company}
                  </motion.p>
                  <div className="flex flex-wrap text-gray-400 text-xs sm:text-sm gap-x-3 sm:gap-x-4 mb-3 sm:mb-4"> 
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base relative z-10">
                    {exp.description}
                  </p>
                </div>

                <div className={`relative z-10 flex-1 flex flex-col space-y-3 sm:space-y-4 pt-4 md:pt-0 ${index % 2 === 0 ? 'md:pl-8 md:border-l md:border-white/10' : 'md:pr-8 md:border-r md:border-white/10'}`}> 
                  <div>
                    <h5 className="text-white text-sm sm:text-base font-bold mb-2">Key Technologies:</h5> 
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300" 
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.3 + index * 0.1 + techIndex * 0.02,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(96, 165, 250, 0.3)", 
                            y: -2
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white text-sm sm:text-base font-bold mb-2">Achievements:</h5> 
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.span
                          key={achievement.text}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-xs sm:text-sm font-medium border border-yellow-400/30 flex items-center hover:bg-yellow-600/30 transition-all duration-300"  
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.4 + index * 0.1 + achIndex * 0.02, 
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 5px 15px rgba(234, 179, 8, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                           >
                            <achievement.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" /> 
                          </motion.div>
                          {achievement.text}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-20"> 
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center lg:justify-start" 
              whileHover={{ x: 3, scale: 1.01 }}
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-purple-400" /> 
              Education
            </motion.h3>

            <div className="space-y-6 sm:space-y-8"> 
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree + index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 relative overflow-hidden group"  
                  initial={{ opacity: 0, y: 30, rotateX: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 10 }}
                  viewport={{ once: true, amount: 0.3 }} 
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 10px 20px rgba(139, 92, 246, 0.1)", 
                    y: -3
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <motion.h4
                    className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300 relative z-10" 
                    whileHover={{ scale: 1.01 }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <p className="text-purple-300 font-semibold mb-2 text-sm sm:text-base relative z-10">{edu.school}</p> 
                  <div className="flex flex-wrap text-gray-400 text-xs sm:text-sm gap-x-3 sm:gap-x-4 mb-3 sm:mb-4 relative z-10">
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                      {edu.period}
                    </span>
                    {edu.gpa && edu.gpa !== "N/A" && <span className="text-cyan-300 font-semibold">CGPA: {edu.gpa}</span>}
                    {edu.percentage && edu.percentage !== "N/A" && <span className="text-cyan-300 font-semibold">Percentage: {edu.percentage}</span>}
                  </div>

                  {edu.achievements.length > 0 && (
                    <div className="flex flex-wrap gap-2 relative z-10 pt-2 border-t border-white/5 mt-3">  
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.span
                          key={achievement}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-xs sm:text-sm font-medium border border-yellow-400/30 flex items-center hover:bg-yellow-600/30 transition-all duration-300"  
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.15 + index * 0.05 + achIndex * 0.02,  
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 5px 15px rgba(234, 179, 8, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div animate={{ rotate: [0, 360] }}><Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" /></motion.div>  
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center lg:justify-start"  
              whileHover={{ x: 3, scale: 1.01 }}
            >
              <Award className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-purple-400" />  
              Certifications
            </motion.h3>

            <div className="space-y-4 sm:space-y-6">  
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name + index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 group relative overflow-hidden"  
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.01,
                    x: 3,
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.1)",
                    y: -2
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <motion.h4
                    className="text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-300 relative z-10" 
                    whileHover={{ scale: 1.01 }}
                  >
                    {cert.name}
                  </motion.h4>
                  <p className="text-purple-300 text-xs sm:text-sm mb-0.5 relative z-10">{cert.issuer}</p>  
                  <p className="text-gray-400 text-xs sm:text-sm relative z-10">{cert.year}</p>  
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
