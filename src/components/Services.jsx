import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Brain, TrendingUp, Users } from 'lucide-react';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';


const ServiceCard = ({ icon: Icon, title, description, features, color, delay }) => {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)"
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div
        className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 360, scale: 1.1 }}
      >
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </motion.div>

      <div className="relative z-10">
        <motion.h3
          className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-300 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>

        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-2">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              className="flex items-center text-xs md:text-sm text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + featureIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full mr-2 md:mr-3" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          zIndex: -1
        }}
      />
    </motion.div>
  );
};

// Main Services component
const Services = () => {
  const servicesData = [
    {
      icon: Globe,  
      title: "Full Stack Web Development",
      description: "End-to-end development of robust web applications, from interactive UIs to powerful server-side logic.",
      features: ["React.js & Next.js", "Node.js & Express.js", "MongoDB & SQL", "Scalable Architecture"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Code2,  
      title: "Frontend Engineering",
      description: "Crafting intuitive and user-friendly interfaces with modern front-end technologies for exceptional user experiences.",
      features: ["HTML5 & CSS3", "JavaScript (ES6+)", "React Ecosystem", "Responsive Design"],
      color: "from-green-500 to-teal-500",
      delay: 0.2
    },
    {
      icon: Database, 
      title: "Backend & API Development",
      description: "Building secure, high-performance APIs and managing robust database systems to power your applications.",
      features: ["Node.js & Express.js", "RESTful APIs", "MongoDB Integration", "SQL Database Management"],
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: Brain,  
      title: "Machine Learning Solutions",
      description: "Developing intelligent predictive models and data processing solutions to extract insights and automate tasks.",
      features: ["Predictive Modeling (AQI)", "Data Preprocessing", "Python & Random Forest", "TensorFlow Basics"],
      color: "from-purple-500 to-pink-500",
      delay: 0.4
    },
    {
      icon: TrendingUp,  
      title: "Performance & Scalability",
      description: "Optimizing application performance and ensuring scalability to handle high traffic and rapid growth.",
      features: ["API Endpoint Optimization", "Reduced Response Times", "Cloudinary Integration", "High Traffic Handling"],
      color: "from-indigo-500 to-purple-500",
      delay: 0.5
    },
    {
      icon: Users,  
      title: "Agile Collaboration & Delivery",
      description: "Collaborating effectively in agile environments to deliver high-quality, efficient, and innovative digital solutions.",
      features: ["Agile Methodologies", "Problem-Solving", "Innovation Drive", "Continuous Learning"],
      color: "from-yellow-500 to-orange-500",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-purple-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06B6D4 0%, transparent 50%)",
            backgroundSize: "600px 600px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-4"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services & Expertise
          </motion.h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive digital solutions tailored to bring your vision to life with cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

         <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-10"
            autoplay={{
              delay: 2500, 
              disableOnInteraction: false,
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Services;
