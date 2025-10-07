import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'IoT Smart Trash Bin',
      description: 'Developed an intelligent waste management system for PERSITA Tangerang using IoT sensors and real-time monitoring capabilities.',
      tags: ['IoT', 'Python', 'Arduino', 'Sensors'],
      github: '#',
      demo: '#',
      image: 'iot-trash'
    },
    {
      title: 'E-Commerce Website',
      description: 'Built a full-stack e-commerce platform for PT Citra Sukses Ekapratama with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'ecommerce'
    },
    {
      title: 'Keraton Yogyakarta App UI/UX',
      description: 'Designed and prototyped a mobile application interface for the historic Keraton Yogyakarta cultural site.',
      tags: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping'],
      github: '#',
      demo: '#',
      image: 'keraton'
    },
    {
      title: 'JejakBaduy Website',
      description: 'Created a responsive website showcasing the Baduy cultural heritage with interactive features and modern design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: '#',
      demo: '#',
      image: 'jejakbaduy'
    },
    {
      title: 'Aquanest Website',
      description: 'Collaborative group project developing a comprehensive website for Aquanest with modern UI and backend integration.',
      tags: ['Group Project', 'React', 'API', 'Teamwork'],
      github: '#',
      demo: '#',
      image: 'aquanest'
    }
  ];

  const getProjectImage = (imageName) => {
    const colors = {
      'iot-trash': 'from-green-400 to-blue-500',
      'ecommerce': 'from-purple-400 to-pink-500',
      'keraton': 'from-yellow-400 to-orange-500',
      'jejakbaduy': 'from-indigo-400 to-purple-500',
      'aquanest': 'from-cyan-400 to-blue-500'
    };
    return colors[imageName] || 'from-gray-400 to-gray-500';
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in software development, web design, and IoT systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${getProjectImage(project.image)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <p className="text-sm font-medium opacity-90">{project.title}</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </button>
                    <button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 btn-primary text-sm py-2 px-4"
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.open('https://github.com/vjdarren', '_blank')}
              className="btn-secondary"
            >
              View More on GitHub
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
