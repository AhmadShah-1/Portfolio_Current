import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <MDXProvider components={MDXComponents}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.3 }}
          variants={{
            initialState: {
              opacity: 0,
              y: 8,
            },
            animateState: {
              opacity: 1,
              y: 0,
            },
            exitState: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </MDXProvider>
  );
}

export default MyApp;
