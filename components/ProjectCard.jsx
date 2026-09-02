import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const videoPosters = {
  'health-tracker-app': '/Assets/Projects/Professional/SSW-322-A-Group-3-Health-Tracker-App/Images/Use Case Diagram.png',
  'fitness-web-application': '/Assets/Projects/Personal/FitnessWebApplication/Images/1.png',
};

export default function ProjectCard({ project, priority = false }) {
  const image = project.heroImage?.endsWith('.mp4') ? videoPosters[project.slug] : project.heroImage;
  const label = project.tags?.[0] || project.category || 'Project';

  return (
    <motion.article whileHover={{ y: -5 }} transition={{ duration: .2 }} className="group h-full overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/60">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col" aria-label={`View ${project.title}`}>
        <div className="project-media relative aspect-[4/3] overflow-hidden bg-white">
          {image && <Image src={image} alt="" fill priority={priority} sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.035]" />}
          <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-accent">{label}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.035em] sm:text-2xl">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{project.description}</p>
          <div className="mt-auto flex items-end justify-between gap-4 pt-6">
            <div className="flex flex-wrap gap-1.5">{project.technologies?.slice(0, 2).map((tech) => <span key={tech} className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] font-medium text-muted">{tech}</span>)}</div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-accent group-hover:text-ink"><ArrowUpRightIcon className="h-4 w-4" /></span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
