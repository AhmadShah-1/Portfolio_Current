import Image from 'next/image';

const MDXImage = ({ src, alt }) => {
  return (
    <div className="my-8">
      <div className="relative w-full max-w-3xl mx-auto h-[400px] bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt || 'Project image'}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
      {alt && (
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          {alt}
        </p>
      )}
    </div>
  );
};

export default MDXImage; 