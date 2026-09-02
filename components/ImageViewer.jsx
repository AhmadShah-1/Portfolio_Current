import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const ImageViewer = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Expanded project image"
      >
        <button
          className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-ink"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative w-full max-w-6xl h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt="Enlarged view"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageViewer;
