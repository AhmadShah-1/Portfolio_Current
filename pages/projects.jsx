import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../utils/mdx';
import { categoryOrder, projectTags } from '../data/projectTags';

export default function Projects({ projects }) {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');
  const filterOptions = ['All', ...categoryOrder];
  // Filtered projects based on selected tag
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => (projectTags[p.slug] || []).includes(activeFilter));
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work in software development, research, and innovation.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Buttons (old UI style) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === option
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  // attach tags for filtering
  const taggedProjects = projects.map(p => ({
    ...p,
    tags: projectTags[p.slug] || []
  }));
  return {
    props: {
      projects: taggedProjects
    },
    revalidate: 3600
  };
}