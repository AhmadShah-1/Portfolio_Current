import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import ProjectContent from '../../components/ProjectContent';
import Link from 'next/link';
import { getProjectData, getAllProjectSlugs } from '../../utils/mdx';

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl text-gray-600">Project not found</h1>
          <Link href="/projects" className="text-primary hover:text-primary/80 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={project.frontMatter.title} description={project.frontMatter.description}>
      <div className="page-shell py-8">
        <Link
          href="/projects"
          className="mb-5 inline-block text-sm font-medium text-muted transition hover:text-ink"
        >
          ← Back to Projects
        </Link>
        <ProjectContent project={project} content={project.content} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = await getProjectData(params.id);
  return {
    props: {
      project
    },
    revalidate: 3600
  };
}
