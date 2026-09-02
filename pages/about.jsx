import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

const experience = [
  {
    period: 'Aug 2026 — Present',
    role: 'Software Engineer — AI Systems & Full-Stack',
    company: 'Stratus · New York, NY',
    summary: 'Building project budgeting, permission-aware knowledge, and voice-driven time-entry products with PostgreSQL, hybrid retrieval, Sentry, Docker, and production infrastructure.',
  },
  {
    period: 'Sep 2025 — Aug 2026',
    role: 'Software Developer Intern',
    company: 'PVEDI · New York, NY',
    summary: 'Built an Azure-based RAG pipeline over NYC structural codes, accelerated compliant report production by 73%, and developed CRM and service-discovery products for AEC teams.',
  },
  {
    period: 'Jun 2025 — Sep 2025',
    role: 'Systems Engineering Intern',
    company: 'Rees Scientific · Trenton, NJ',
    summary: 'Created sensor anomaly detection with Azure Stream Analytics and ADTK, automated technical documentation, and unified legacy ERP data in MongoDB.',
  },
  {
    period: 'Jun 2024 — Sep 2024',
    role: 'Machine Learning Intern',
    company: 'National Science Foundation · Miami, FL',
    summary: 'Integrated real-time detection, tracking, and facial recognition for drone operations, achieving 92% detection accuracy and training reinforcement-learning models in AirSim.',
  },
  {
    period: 'Sep 2023 — May 2024',
    role: 'Embedded & Software Systems Engineer Intern',
    company: 'Stevens Institute of Technology · Hoboken, NJ',
    summary: 'Engineered a modular C++/Python offshore telemetry platform with four interchangeable IoT sensors and RF data acquisition over two kilometers.',
  },
];

const skillGroups = [
  ['Languages', ['Python', 'JavaScript', 'SQL', 'Java', 'C / C++', 'Swift', 'HTML / CSS', 'MATLAB']],
  ['AI & data', ['PyTorch', 'TensorFlow', 'RAG', 'Computer Vision', 'Hugging Face', 'Pandas', 'Vector Search']],
  ['Product stack', ['React', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure', 'AWS', 'DigitalOcean']],
];

export default function About() {
  return (
    <Layout title="About" description="About Ahmad Shah, a New York software engineer building AI systems and full-stack software.">
      <section className="page-shell py-14 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">A little context</p>
            <h1 className="page-title mt-5">Engineer by training. Builder by instinct.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            I enjoy taking complex, ambiguous systems and turning them into software people can trust. My work spans AI retrieval, data platforms, computer vision, software engineering, and connected hardware.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-[1.4fr_.6fr]">
          <div className="relative min-h-[380px] overflow-hidden rounded-[1.75rem] sm:min-h-[520px]">
            <Image src="/Assets/AboutMe/Images/PhotoOfMyself.jpg" alt="Ahmad overlooking a city from a mountain" fill priority sizes="(max-width: 768px) 100vw, 70vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-sm text-sm leading-6 text-white/80">Curiosity travels well. The same instinct that pulls me up a mountain keeps me digging into hard technical problems.</p>
          </div>
          <div className="flex flex-col justify-between rounded-[1.75rem] bg-accent p-7 sm:p-9">
            <p className="eyebrow">Current chapter</p>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">New York City</p>
              <p className="mt-3 leading-7 text-ink/65">Building AI-enabled products at Stratus after completing an M.Eng. in Applied AI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-border py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[.35fr_.65fr]">
          <div><p className="eyebrow text-primary">Experience</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">The work behind the work.</h2></div>
          <div>
            {experience.map((item, index) => (
              <motion.article key={item.role} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * .04 }} className="grid gap-3 border-b border-ink/15 py-7 first:pt-0 sm:grid-cols-[160px_1fr]">
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <div><h3 className="text-lg font-semibold">{item.role}</h3><p className="mt-1 text-sm font-medium text-primary">{item.company}</p><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{item.summary}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[.4fr_.6fr]">
            <div><p className="eyebrow text-accent">Toolkit</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Broad enough to connect the dots.</h2></div>
            <div className="space-y-9">
              {skillGroups.map(([name, skills]) => <div key={name}><p className="mb-4 text-sm text-white/45">{name}</p><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">{skill}</span>)}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="surface p-7 sm:p-10"><p className="eyebrow text-primary">Education</p><h2 className="mt-6 text-2xl font-semibold">Stevens Institute of Technology</h2><div className="mt-7 space-y-6"><div><p className="font-medium">M.Eng. Applied Artificial Intelligence</p><p className="mt-1 text-sm text-muted">Data Engineering concentration · 3.92 GPA · 2026</p></div><div><p className="font-medium">B.E. Software Engineering</p><p className="mt-1 text-sm text-muted">Computer Science minor · 3.8 GPA · 2025</p></div></div></div>
          <div className="rounded-[1.5rem] bg-white p-7 sm:p-10"><p className="eyebrow text-primary">Beyond the coursework</p><h2 className="mt-6 text-2xl font-semibold">Built in the real world.</h2><p className="mt-4 leading-7 text-muted">Ansary Entrepreneurship Competition finalist, U.S. DOE Marine Energy Collegiate Competition presenter, and recipient of certifications from NVIDIA, Microsoft, LinkedIn, and Autodesk.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/Assets/AboutMe/Resumes/Shah, Syed, Stevens Institute of Technology.pdf" download className="button-dark">Download résumé <ArrowDownTrayIcon className="h-4 w-4" /></a><a href="https://www.linkedin.com/in/ahmadshah12/" target="_blank" rel="noreferrer" className="button-secondary">LinkedIn <ArrowUpRightIcon className="h-4 w-4" /></a></div></div>
        </div>
      </section>
    </Layout>
  );
}
