import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            <span className="block">Valentinus Javier</span>
            <span className="block text-gradient">Darren Sebastian</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Computing Undergraduate at the University of Greenwich
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            I'm a Computing student passionate about building practical digital solutions through software development, web design, and IoT systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={() => window.open('/cv.pdf', '_blank')}
              className="btn-secondary w-full sm:w-auto"
            >
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Scroll to about section"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
