import Image from 'next/image';
import { getImageDimensions } from '../data/imageDimensions';

const MDXImage = ({ src, alt }) => {
  const dimensions = getImageDimensions(src);

  return (
    <div className="my-8">
      <div
        className={`relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-ink/10 bg-white ${dimensions ? '' : 'aspect-[4/3]'}`}
        style={dimensions ? { aspectRatio: `${dimensions.width} / ${dimensions.height}` } : undefined}
      >
        <Image
          src={src}
          alt={alt || 'Project image'}
          fill
          style={{ objectFit: 'contain' }}
          className={dimensions ? '' : 'p-3'}
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
      {alt && (
        <p className="mt-3 text-center text-xs text-muted">
          {alt}
        </p>
      )}
    </div>
  );
};

export default MDXImage;
