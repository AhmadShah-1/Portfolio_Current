import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript']
  },
  {
    category: 'Web Technologies',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'HTML/CSS', 'TailwindCSS']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Other Skills',
    items: ['Agile Methodologies', 'System Design', 'Technical Writing', 'Problem Solving']
  }
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 mb-6">
            Hello! I'm Ahmad Shah, a senior software engineer and student at Stevens Institute of Technology,
            where I'm pursuing a degree in Software Engineering with a minor in Computer Science.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My passion lies in creating innovative solutions to complex problems and contributing to
            meaningful projects that make a difference. With a strong foundation in both theoretical
            computer science and practical software engineering, I bring a unique perspective to every
            project I work on.
          </p>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Stevens Institute of Technology</h3>
            <p className="text-gray-600">Bachelor of Science in Software Engineering</p>
            <p className="text-gray-600">Minor in Computer Science</p>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:ahmadsyedshah123@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  ahmadsyedshah123@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <a
                  href="tel:2019894743"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  (201) 989-4743
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
} 