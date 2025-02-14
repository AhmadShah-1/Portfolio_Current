import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Ahmad Shah
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A senior software engineer specializing in building exceptional digital experiences.
                Currently studying Software Engineering at Stevens Institute of Technology.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/projects"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/Assets/AboutMe/Images/PhotoOfMyself.jpg"
                alt="Ahmad Shah"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I combine creativity and technical expertise to build innovative solutions
              that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Software Development',
                description: 'Building robust and scalable applications using modern technologies.',
                icon: '💻'
              },
              {
                title: 'Research',
                description: 'Contributing to academic research in software engineering and computer science.',
                icon: '🔬'
              },
              {
                title: 'Innovation',
                description: 'Creating unique solutions to complex technical challenges.',
                icon: '💡'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
} 