import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../utils/mdx';
import { categoryOrder, projectTags } from '../data/projectTags';

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
      const haystack = [project.title, project.description, ...(project.technologies || [])].join(' ').toLowerCase();
      return matchesFilter && (!needle || haystack.includes(needle));
    });
  }, [activeFilter, projects, query]);

  return (
    <Layout title="Work" description="Selected software engineering, AI, machine learning, research, and embedded systems projects by Ahmad Shah.">
      <section className="page-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div><p className="eyebrow text-primary">Project archive</p><h1 className="page-title mt-5">Selected engineering work.</h1></div>
          <p className="max-w-lg text-lg leading-8 text-muted">A curated set of products, research systems, and hardware experiments — from retrieval pipelines to assistive technology.</p>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-y border-ink/15 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', ...categoryOrder].map((option) => <button key={option} onClick={() => setActiveFilter(option)} aria-pressed={activeFilter === option} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${activeFilter === option ? 'bg-ink text-accent' : 'border border-ink/15 text-muted hover:border-ink hover:text-ink'}`}>{option}</button>)}
          </div>
          <label className="relative block w-full lg:w-64">
            <span className="sr-only">Search projects</span>
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-full rounded-full border border-ink/15 bg-white/50 py-2.5 pl-9 pr-4 text-sm placeholder:text-muted/70 focus:border-ink focus:ring-0" />
          </label>
        </div>

        <p className="mt-6 text-xs font-medium uppercase tracking-[.12em] text-muted">Showing {filteredProjects.length} of {projects.length} projects</p>

        <motion.div layout className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => <motion.div layout key={project.slug} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }}><ProjectCard project={project} /></motion.div>)}
          </AnimatePresence>
        </motion.div>

        {!filteredProjects.length && <div className="my-20 text-center"><p className="text-2xl font-semibold">No matching projects.</p><button onClick={() => { setQuery(''); setActiveFilter('All'); }} className="button-secondary mt-5">Clear filters</button></div>}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return { props: { projects: projects.map((project) => ({ ...project, tags: projectTags[project.slug] || [] })) }, revalidate: 3600 };
}
