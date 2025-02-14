import { motion } from 'framer-motion';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import ImageGallery from './ImageGallery';
import MDXImage from './MDXImage';

// Custom MDX components mapping
const mdxComponents = {
  h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold my-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold my-2" {...props} />,
  p: (props) => <p className="mb-4 text-lg" {...props} />,
  ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4" {...props} />,
  img: MDXImage,
};

const ProjectContent = ({ project, content }) => {
  const { frontMatter } = project;
  const galleryImages = frontMatter.galleryImages || [];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] w-full rounded-lg overflow-hidden"
      >
        <Image
          src={frontMatter.heroImage}
          alt={frontMatter.title}
          fill
          priority
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        />
      </motion.div>

      {/* Project Title and Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors">
          {frontMatter.title}
        </h1>
        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full">
          {frontMatter.category}
        </span>
        {frontMatter.technologies && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {frontMatter.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <MDXRemote {...content} components={mdxComponents} />
      </motion.div>

      {/* Image Gallery */}
      {galleryImages && galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <ImageGallery images={galleryImages} />
        </motion.div>
      )}

      {/* Papers Section */}
      {frontMatter.papers && frontMatter.papers.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t pt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Papers</h2>
          <div className="space-y-4">
            {frontMatter.papers.map((paper, index) => (
              <div key={index} className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {paper.name}
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default ProjectContent; 