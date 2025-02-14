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

        {/* Resume & Social Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume & Professional Links</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Resume */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resume</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="/Assets/Resume/Ahmad_Shah_Resume.pdf"
                  download="Ahmad_Shah_Resume.pdf"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </a>
                <a
                  href="/Assets/Resume/Ahmad_Shah_Resume.pdf#view=Fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Resume</span>
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Network</h3>
              <a
                href="https://www.linkedin.com/in/ahmad-shah-674989224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#0077b5] text-white px-6 py-3 rounded-lg hover:bg-[#006396] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
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