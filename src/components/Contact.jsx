import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle, Github } from 'lucide-react';  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     if (submissionStatus !== 'idle') {
      setSubmissionStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus('submitting');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionStatus('error');
      setLoading(false);
      return;
    }

    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000)); 

      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adebashispaul@gmail.com',
      href: 'mailto:adebashispaul@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9932445077', 
      href: 'tel:+919932445077'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Aiho, Malda, West Bengal, India', 
      href: 'https://www.google.com/maps/search/?api=1&query=Vill-Ratirampara,+Aiho,+Malda,+West+Bengal+-+732121,+India'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            backgroundAttachment: "fixed"
          }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-cyan-400 opacity-5 blur-3xl"
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
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-400 opacity-5 blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title and Description */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Let's Collaborate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Ready to bring your ideas to life? I'd love to hear about your project
            and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-0">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all text-sm sm:text-base"
                  placeholder="Ram Sharma"
                  whileFocus={{ scale: 1.01, borderColor: '#A78BFA' }}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all text-sm sm:text-base"
                  placeholder="you@example.com"
                  whileFocus={{ scale: 1.01, borderColor: '#A78BFA' }}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project, ideas, or questions..."
                  whileFocus={{ scale: 1.01, borderColor: '#A78BFA' }}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all text-sm sm:text-base ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:from-purple-700 hover:to-blue-700'}`}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submissionStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-green-500/20 text-green-300 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              {submissionStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-red-500/20 text-red-300 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Failed to send message. Please fill all fields or try again later.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8 pt-8 lg:pt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6"> 
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.title === 'Location' ? '_blank' : '_self'} 
                  rel={item.title === 'Location' ? 'noopener noreferrer' : ''} 
                  className="flex items-center space-x-3 sm:space-x-4 text-white hover:text-purple-300 transition-colors group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-600/20 transition-colors shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base">{item.title}</p>
                    <p className="text-sm sm:text-base lg:text-lg">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://github.com/Debashis-11101-srijib" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 text-white hover:text-cyan-300 transition-colors group pt-4 sm:pt-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-600/20 transition-colors shadow-md"
                whileHover={{ scale: 1.1, rotate: [0, 360], transition: { duration: 0.8, ease: "easeOut" } }} 
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </motion.div>
              <div>
                <p className="font-medium text-gray-300 text-sm sm:text-base">My GitHub Portfolio</p>
                <p className="text-sm sm:text-base lg:text-lg">Debashis-11101-srijib</p>
              </div>
            </motion.a>


            <motion.div
              className="pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Response Time</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                I typically respond within 24 hours. For urgent matters,
                feel free to reach out via phone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
