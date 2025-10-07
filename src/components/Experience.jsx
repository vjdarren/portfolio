import React from 'react';

const Experience = () => {
  const experience = [
    {
      title: 'Student Ambassador',
      company: 'UIC College',
      period: '2023 - 2025',
      description: 'Represented the college at various events and helped new students with orientation and academic guidance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Head of Events Department',
      company: 'Student Union',
      period: '2023 - 2024',
      description: 'Led the planning and execution of various student events, managing a team and coordinating with different departments.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const education = [
    {
      degree: 'BSc (Hons) Computing',
      institution: 'University of Greenwich',
      period: '2025 - 2026',
      description: 'Currently pursuing a Bachelor of Science with Honours in Computing, focusing on software development and system design.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      degree: 'BTEC HND Computing',
      institution: 'UIC College BSD',
      period: '2023 - 2025',
      description: 'Graduated with full Distinction (15/15 modules) and awarded Best Graduate in Computing. Specialized in software development and system analysis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const TimelineItem = ({ item, isLast }) => (
    <div className="relative">
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
          {item.icon}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0 pb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title || item.degree}
              </h3>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full">
                {item.period}
              </span>
            </div>
            
            <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
              {item.company || item.institution}
            </h4>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200 dark:bg-gray-700"></div>
      )}
    </div>
  );

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in computing and leadership roles that have shaped my professional development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    isLast={index === experience.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Graduated from UIC College BSD with full Distinction (15/15 modules) and was awarded 
                  <span className="font-semibold"> Best Graduate in Computing</span>, demonstrating 
                  consistent academic excellence and dedication to the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
