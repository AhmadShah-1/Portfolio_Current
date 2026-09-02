import Image from 'next/image';

const MDXImage = ({ src, alt }) => {
  return (
    <div className="my-8">
      <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-white">
        <Image
          src={src}
          alt={alt || 'Project image'}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-2xl p-3"
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
