import React from 'react';
import Image from 'next/image';

const MDXComponents = {
  // Override the default img tag to use Next.js Image when possible
  img: (props) => {
    const { src, alt, width, height } = props;
    if (width && height) {
      return <Image src={src} alt={alt || ''} width={width} height={height} />;
    }
    // Fall back to regular img tag if dimensions aren't provided
    return <img {...props} alt={alt || ''} />;
  },
};

export default MDXComponents;
