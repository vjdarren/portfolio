import React from 'react';

const About = () => {
  const facts = [
    {
      label: 'Location',
      value: 'Orpington, UK',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'darrensebastian@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Languages',
      value: 'English, Indonesian, Mandarin, Hokkien',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      label: 'Skills',
      value: 'Python, Java, HTML, CSS, JS, SQL, Figma',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio and Image */}
            <div className="space-y-8">
              {/* Bio */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm currently pursuing a BSc (Hons) in Computing at the University of Greenwich, after graduating from UIC College BSD with full Distinction (15/15 modules) and being awarded Best Graduate in Computing. I enjoy developing websites, apps, and IoT solutions that make a real-world impact.
                </p>
              </div>

              {/* Professional Headshot Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary-300 dark:bg-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        Professional Headshot
                      </p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Facts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Quick Facts
              </h3>
              
              <div className="grid gap-6">
                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {fact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {fact.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
