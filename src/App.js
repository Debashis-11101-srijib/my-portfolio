import React from 'react';
import { useState } from 'react';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }


 // Main application content
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Smooth Scroll Component */}
      <SmoothScroll /> 
      
      {/* Main Content */}
      <div id="hero">
      <Hero />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="services">
      <Services />
      </div>
      <div id="resume">
      <Resume />
      </div>
      <div id="skills">
      <Skills />
      </div>
      <div id="projects">
      <Projects />
      </div>
      <div id="testimonials">
      <Testimonials />
      </div>
      <div id="contact">
      <Contact />
      </div>
    </div>
  );
}

export default App;