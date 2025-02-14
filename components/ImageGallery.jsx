import { useState } from 'react';
import Image from 'next/image';
import ImageViewer from './ImageViewer';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 pb-4" style={{ minHeight: '400px' }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-none w-96 h-80 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ImageGallery; 