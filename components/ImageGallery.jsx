import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ImageViewer from './ImageViewer';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef(null);

  const goToImage = (nextIndex) => {
    const index = Math.max(0, Math.min(images.length - 1, nextIndex));
    const scroller = scrollerRef.current;
    const target = scroller?.children[index];
    if (scroller && target) scroller.scrollTo({ left: target.offsetLeft - scroller.offsetLeft, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const updateCurrentImage = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const offsets = Array.from(scroller.children).map((child) => Math.abs((child.offsetLeft - scroller.offsetLeft) - scroller.scrollLeft));
    setCurrentIndex(offsets.indexOf(Math.min(...offsets)));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs text-muted">Image {String(currentIndex + 1).padStart(2, '0')} of {String(images.length).padStart(2, '0')}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => goToImage(currentIndex - 1)} disabled={currentIndex === 0} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-30" aria-label="Previous image"><ChevronLeftIcon className="h-4 w-4" /></button>
          <button type="button" onClick={() => goToImage(currentIndex + 1)} disabled={currentIndex === images.length - 1} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-30" aria-label="Next image"><ChevronRightIcon className="h-4 w-4" /></button>
        </div>
      </div>
      <div ref={scrollerRef} onScroll={updateCurrentImage} className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
        {images.map((image, index) => (
          <button key={`${image}-${index}`} type="button" onClick={() => setSelectedImage(image)} className="relative aspect-[4/3] w-[84vw] max-w-[430px] shrink-0 snap-start overflow-hidden rounded-2xl border border-ink/10 bg-white sm:w-[430px]" aria-label={`Open gallery image ${index + 1}`}>
            <Image src={image} alt={`${index + 1} of ${images.length}`} fill sizes="(max-width: 640px) 84vw, 430px" className="object-contain p-3 transition duration-300 hover:scale-[1.02]" />
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] text-white">{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      {selectedImage && <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}
