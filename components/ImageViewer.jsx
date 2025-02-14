import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ImageViewer = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          onClick={onClose}
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