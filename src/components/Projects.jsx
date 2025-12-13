// src/components/Projects.jsx
import { motion } from 'framer-motion';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      shortDesc: 'Responsive Business Website',
      image: project1,
      link: '#',
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-400/30',
    },
    {
      title: 'Project Beta',
      shortDesc: 'Creative UI/UX Design',
      image: project2,
      link: '#',
      gradient: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-400/30',
    },
    {
      title: 'Project Gamma',
      shortDesc: 'Mobile App Development',
      image: project3,
      link: '#',
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-400/30',
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our{' '}
        <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br ${project.gradient} ${project.shadow} p-1`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: [1, 1.04, 1.02], // subtle pulse
              y: -3,
              boxShadow: '0 18px 35px rgba(0,0,0,0.18)',
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          >
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>

              {/* Project Info */}
              <div className="p-7 text-left">
                <motion.h3
                  className="text-2xl font-semibold mb-3 text-gray-900"
                  whileHover={{ scale: 1.03 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-6">{project.shortDesc}</p>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
