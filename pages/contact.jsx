import { motion } from 'framer-motion';
import { ArrowUpRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

const email = 'ahmadsyedshah123@gmail.com';

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact Ahmad Shah about software engineering, AI systems, and development opportunities.">
      <section className="page-shell py-14 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Contact</p>
            <h1 className="page-title mt-5">Let&apos;s connect.</h1>
          </div>
          <p className="max-w-lg text-lg leading-8 text-muted">For software engineering opportunities and collaborations, email is the best way to reach me.</p>
        </motion.div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/55 lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-7 sm:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink"><EnvelopeIcon className="h-5 w-5" /></div>
            <p className="mt-10 text-sm text-muted">Email me at</p>
            <a href={`mailto:${email}`} className="mt-2 block break-all text-2xl font-semibold tracking-[-0.04em] text-ink transition hover:text-primary sm:text-4xl">{email}</a>
            <a href={`mailto:${email}`} className="button-dark mt-8">Open email app <ArrowUpRightIcon className="h-4 w-4" /></a>
          </div>

          <aside className="flex flex-col justify-between bg-ink p-7 text-white sm:p-10">
            <div>
              <p className="eyebrow text-accent">Elsewhere</p>
              <div className="mt-8 space-y-3">
                <a href="https://www.linkedin.com/in/ahmadshah12/" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/15 py-4 text-lg transition hover:text-accent">LinkedIn <ArrowUpRightIcon className="h-4 w-4" /></a>
                <a href="https://github.com/AhmadShah-1" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/15 py-4 text-lg transition hover:text-accent">GitHub <ArrowUpRightIcon className="h-4 w-4" /></a>
              </div>
            </div>
            <p className="mt-16 text-sm leading-6 text-white/50">New York City</p>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
