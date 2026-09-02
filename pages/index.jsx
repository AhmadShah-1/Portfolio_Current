import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../utils/mdx';
import { projectTags } from '../data/projectTags';

const capabilities = ['AI systems', 'Software engineering', 'Data pipelines', 'RAG', 'Computer vision', 'Full-stack'];

export default function Home({ featuredProjects }) {
  return (
    <Layout>
      <section className="page-shell py-10 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <p className="eyebrow text-muted">Software Engineer · New York City</p>
            </div>
            <h1 className="display-title max-w-4xl">I build intelligent systems that <span className="text-primary">ship.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              I&apos;m Ahmad — a software engineer working where AI, data, and full-stack software meet real operational problems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="button-dark">Explore my work <ArrowDownRightIcon className="h-4 w-4" /></Link>
              <a href="/Assets/AboutMe/Resumes/Shah, Syed, Stevens Institute of Technology.pdf" target="_blank" rel="noreferrer" className="button-secondary">View résumé <ArrowUpRightIcon className="h-4 w-4" /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, delay: .1 }} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.25rem] border border-ink/10" />
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] bg-ink">
              <Image src="/Assets/AboutMe/Images/PhotoOfMyself.jpg" alt="Ahmad Shah overlooking a city from a mountain" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/40 to-transparent p-6 pt-24 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div><p className="eyebrow text-accent">Currently</p><p className="mt-2 text-lg font-medium">Building AI-enabled products at Stratus</p></div>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">NYC</span>
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-2 top-5 rounded-2xl border border-white/10 bg-ink p-4 text-white shadow-2xl sm:-right-7 sm:top-8">
              <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-300" /><span className="h-2 w-2 rounded-full bg-accent" /></div>
              <p className="font-mono text-[11px] text-white/50">ahmad@engineer ~ %</p>
              <p className="mt-1 font-mono text-xs"><span className="text-accent">build</span> → learn → improve</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[1.5rem] border border-ink/15 bg-white/45 sm:grid-cols-2">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4"><p className="eyebrow text-primary">Master&apos;s · 2026</p><span className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-accent">3.92 GPA</span></div>
            <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Applied Artificial Intelligence</h2>
            <p className="mt-2 text-sm text-muted">Data Engineering concentration · Stevens Institute of Technology</p>
          </div>
          <div className="border-t border-ink/15 p-6 sm:border-l sm:border-t-0 sm:p-8">
            <div className="flex items-center justify-between gap-4"><p className="eyebrow text-primary">Bachelor&apos;s · 2025</p><span className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-accent">3.80 GPA</span></div>
            <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Software Engineering</h2>
            <p className="mt-2 text-sm text-muted">Computer Science minor · Stevens Institute of Technology</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-ink py-5 text-white">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:justify-between">
          {capabilities.map((item, index) => <div key={item} className="flex items-center gap-7"><span className="text-sm font-medium text-white/70">{item}</span>{index < capabilities.length - 1 && <span className="text-accent">✦</span>}</div>)}
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="eyebrow text-primary">Selected work · 2024—26</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Built to matter.</h2></div>
          <Link href="/projects" className="button-secondary self-start sm:self-auto">See all projects <ArrowUpRightIcon className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}
        </div>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  const featuredOrder = ['c-all', 'dreus-project-nsf', 'detecting-ai-generated-images-through-spatial-frequency-analysis-and-diffusion-based-reconstruction'];
  const featuredProjects = featuredOrder.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean).map((project) => ({ ...project, tags: projectTags[project.slug] || [] }));
  return { props: { featuredProjects }, revalidate: 3600 };
}
