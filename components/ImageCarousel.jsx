import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isHovered) return;
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scroll down - move right
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        // Scroll up - move left
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, [images.length, isHovered]);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-64 overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <motion.div
        className="absolute w-full h-full"
        initial={false}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          >
            ←
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel; 