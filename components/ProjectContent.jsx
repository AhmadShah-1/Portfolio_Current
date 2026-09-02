import { Children, isValidElement } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import ImageGallery from './ImageGallery';
import MDXImage from './MDXImage';

const videoPosters = {
  'Health Tracker App': '/Assets/Projects/Professional/SSW-322-A-Group-3-Health-Tracker-App/Images/Use Case Diagram.png',
  'Fitness Web Application': '/Assets/Projects/Personal/FitnessWebApplication/Images/1.png',
};

function MdxParagraph({ children, ...props }) {
  const childArray = Children.toArray(children);
  if (childArray.length === 1 && isValidElement(childArray[0]) && (childArray[0].type === 'img' || childArray[0].type === MDXImage)) return <div className="mb-5" {...props}>{children}</div>;
  return <p {...props}>{children}</p>;
}

const mdxComponents = {
  h1: (props) => <h2 {...props} />,
  p: MdxParagraph,
  img: MDXImage,
  a: (props) => <a {...props} target={props.href?.startsWith('http') ? '_blank' : undefined} rel={props.href?.startsWith('http') ? 'noreferrer' : undefined} />,
};

export default function ProjectContent({ project, content }) {
  const { frontMatter } = project;
  const isVideo = frontMatter.heroImage?.endsWith('.mp4');
  const githubUrl = frontMatter.githubUrl || frontMatter.links?.github;
  const papers = (frontMatter.papers || []).filter((paper) => paper.url);
  const externalLinks = Object.entries(frontMatter.links || {}).filter(([key, value]) => key !== 'github' && typeof value === 'string');

  return (
    <>
      <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="pb-10 pt-5 sm:pb-14">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-accent">{frontMatter.category || 'Project'}</span>
          {frontMatter.technologies?.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.08em] text-muted">{tech}</span>)}
        </div>
        <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{frontMatter.title}</h1>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-3xl text-lg leading-8 text-muted">{frontMatter.description}</p>
          <div className="flex flex-wrap gap-2">
            {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="button-dark">Source <ArrowUpRightIcon className="h-4 w-4" /></a>}
            {papers[0] && <a href={papers[0].url} target="_blank" rel="noreferrer" className="button-secondary">Read paper <ArrowUpRightIcon className="h-4 w-4" /></a>}
            {frontMatter.notebookUrl && <a href={frontMatter.notebookUrl} download className="button-secondary">Notebook <ArrowDownTrayIcon className="h-4 w-4" /></a>}
          </div>
        </div>
      </motion.header>

      <motion.div initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .08 }} className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white sm:aspect-[16/8]">
        {isVideo ? <video className="h-full w-full object-contain" controls playsInline preload="metadata" poster={videoPosters[frontMatter.title]}><source src={frontMatter.heroImage} type="video/mp4" /></video> : <Image src={frontMatter.heroImage} alt={`${frontMatter.title} project preview`} fill priority sizes="100vw" className="object-contain p-3 sm:p-6" />}
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[.25fr_.75fr] sm:mt-16">
        <aside>
          <p className="eyebrow text-primary">Project notes</p>
          {(papers.length > 1 || externalLinks.length > 0) && <div className="mt-6 space-y-3">{papers.slice(1).map((paper) => <a key={paper.url} href={paper.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-ink">{paper.name} <ArrowUpRightIcon className="h-3.5 w-3.5" /></a>)}{externalLinks.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm capitalize text-muted hover:text-ink">{name} <ArrowUpRightIcon className="h-3.5 w-3.5" /></a>)}</div>}
        </aside>
        <article className="prose prose-lg max-w-none prose-headings:tracking-[-0.035em] prose-headings:text-ink prose-p:leading-8 prose-p:text-muted prose-a:text-primary prose-strong:text-ink prose-li:text-muted prose-img:rounded-2xl">
          <MDXRemote {...content} components={mdxComponents} />
        </article>
      </div>

      {frontMatter.galleryImages?.length > 1 && <section className="section-border mt-16 py-16 sm:mt-24"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow text-primary">Gallery</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">A closer look.</h2></div><p className="hidden text-sm text-muted sm:block">Select any image to expand</p></div><ImageGallery images={frontMatter.galleryImages} /></section>}
    </>
  );
}
