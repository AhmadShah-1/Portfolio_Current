import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending...' });
    
    try {
      console.log('Submitting form with data:', formData);
      
      // Send email using server-side API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log('API response status:', response.status);
      const data = await response.json();
      console.log('API response data:', data);
      
      if (response.ok) {
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({
          submitted: false,
          success: true,
          message: 'Your message has been sent successfully!'
        });
      } else {
        const errorMessage = data.details || data.error || 'Failed to send message';
        console.error('Error details:', errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto: if EmailJS fails
      const fallbackMessage = 'Server-side email sending failed. Would you like to open your email client instead?';
      
      if (confirm(fallbackMessage)) {
        const subject = `Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:ahmadsyedshah123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        setFormStatus({
          submitted: false,
          success: true,
          message: 'Opening your email client...'
        });
      } else {
        setFormStatus({
          submitted: false,
          success: false,
          message: `Error: ${error.message}. Please email me directly at ahmadsyedshah123@gmail.com`
        });
      }
    }
  };

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

        {/* Resume & Professional Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume & Professional Links</h2>

          {/* Combined Resume and Professional Network Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Resume</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/Assets/AboutMe/Resumes/Shah, Syed, Stevens Institute of Technology.pdf" 
                download
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              <a 
                href="/Assets/AboutMe/Resumes/Shah, Syed, Stevens Institute of Technology.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                View Resume
              </a>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Network</h3>
            <div>
              <a 
                href="https://www.linkedin.com/in/ahmad-shah-674989224/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white px-6 py-3 rounded-lg hover:bg-[#005e93] transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
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
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitted}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  >
                    {formStatus.submitted ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus.message && (
                    <p className={`text-sm ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                      {formStatus.message}
                    </p>
                  )}
                </form>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:ahmadsyedshah123@gmail.com"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    ahmadsyedshah123@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <a
                    href="tel:2019894743"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    (201) 989-4743
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
} 