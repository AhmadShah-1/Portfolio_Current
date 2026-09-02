import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmadshah12/' },
  { name: 'GitHub', href: 'https://github.com/AhmadShah-1' },
];

export default function Layout({ children, title, description }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setMobileMenuOpen(false), [router.asPath]);

  const pageTitle = title ? `${title} — Ahmad Shah` : 'Ahmad Shah — Software Engineer & AI Builder';
  const pageDescription = description || 'Software engineer building practical AI systems, data products, and thoughtful full-stack software.';
  const isActive = (href) => href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <div className="site-frame">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0b1513" />
      </Head>

      <a href="#main-content" className="skip-link">Skip to content</a>

      <header className="site-header">
        <div className="page-shell flex h-[74px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="Ahmad Shah, home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-wider text-accent transition-transform group-hover:rotate-6">AS</span>
            <span className="text-sm font-semibold tracking-tight text-ink">Ahmad Shah</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/70 p-1 backdrop-blur md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}>
                {link.name}
              </Link>
            ))}
          </nav>

          <a href="mailto:ahmadsyedshah123@gmail.com" className="button-dark hidden sm:inline-flex">
            Let&apos;s talk <ArrowUpRightIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink sm:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-ink/10 bg-canvas md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="page-shell flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="border-b border-ink/10 py-4 text-lg font-medium text-ink">
                    {link.name}
                  </Link>
                ))}
                <a href="mailto:ahmadsyedshah123@gmail.com" className="button-primary mt-5 justify-center">Let&apos;s talk</a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="page-shell py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-end">
            <div>
              <p className="eyebrow text-accent">Have an interesting problem?</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Let&apos;s build something useful.</h2>
              <a href="mailto:ahmadsyedshah123@gmail.com" className="mt-7 inline-flex items-center gap-2 border-b border-accent pb-1 text-lg text-accent">
                ahmadsyedshah123@gmail.com <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="md:text-right">
              <div className="flex gap-5 md:justify-end">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="text-sm text-white/60 transition hover:text-accent">
                    {link.name}
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Ahmad Shah.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
