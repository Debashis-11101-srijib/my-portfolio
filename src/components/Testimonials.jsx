import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, isVisible, ...props }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 relative overflow-hidden"
      variants={{
        enter: { opacity: 1, x: 0, rotateY: 0 },
        exit: { opacity: 0, x: -100, rotateY: -90 },
      }}
      initial="exit"
      animate={isVisible ? "enter" : "exit"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)"
      }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />

      <motion.div
        className="absolute top-4 md:top-6 right-4 md:right-6 text-purple-400/30"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Quote className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>

      <div className="relative z-10">
        <motion.div className="flex justify-center md:justify-start mb-4 md:mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current mr-1" />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <motion.p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed text-center md:text-left italic">
          "{testimonial.text}"
        </motion.p>

        {/* Client Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <motion.div className="relative">
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-purple-400/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/150x150/8B5CF6/FFFFFF?text=${testimonial.name.split(' ').map(n => n[0]).join('')}`; }}
            />
          </motion.div>

          <motion.div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-1">
              {testimonial.name}
            </h4>
            <p className="text-purple-300 text-sm md:text-base mb-1">
              {testimonial.role}
            </p>
            <p className="text-gray-400 text-sm">
              {testimonial.company}
            </p>
            <motion.div className="mt-2 px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-xs font-medium inline-block">
              {testimonial.project}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Main component
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Sathi Dey",
      role: "E-commerce Business Owner",
      company: "Darsh",
      image: "https://placehold.co/150x150/7c3aed/ffffff?text=SD", 
      rating: 5,
      text: "Debashis truly transformed our online presence! His full-stack expertise on the e-commerce platform led to a 40% reduction in response times and directly contributed to a significant monthly revenue increase. Highly recommend his work!",
      project: "E-Commerce Platform (Darsh)"
    },
    {
      id: 2,
      name: "Abhishek Twari",
      role: "Ayushvaani Owner",
      company: "Ayushvaani Healthcare",
      image: "https://placehold.co/150x150/06b6d4/ffffff?text=AT", 
      rating: 4.5,
      text: "The frontend development for the Ayushvaani portal by Debashis is outstanding. It's intuitive, responsive, and has significantly improved our user experience. His attention to UI/UX detail is exceptional.",
      project: "Ayushvaani Healthcare Portal"
    },
    {
      id: 3,
      name: "Dr Semim Begum",
      role: "Faculty Coordinator",
      company: "Govt. College of Engg. & Textile Tech.",
      image: "https://placehold.co/150x150/4f46e5/ffffff?text=DB", 
      rating: 4,
      text: "Debashis played a pivotal role in developing our Annual College Fest Portal. His work ensured smooth registration and event management, which was crucial for the success of such a large-scale event.",
      project: "Annual College Fest Portal"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 70% 30%, #06B6D4 0%, transparent 50%)",
            backgroundSize: "500px 500px",
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
            Client Testimonials
          </motion.h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Hear directly from those who have experienced my dedication and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12 px-4 relative">
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentIndex} testimonial={currentTestimonial} isVisible={true} />
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-8 md:mb-12 px-4">
          <motion.button
            onClick={prevTestimonial}
            className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex space-x-2">
            {testimonialsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
