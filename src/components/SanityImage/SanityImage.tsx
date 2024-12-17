'use client';

import Image from 'next/image';
import { SanityImageAsset } from '@/sanity/types';
import classes from './SanityImage.module.scss';
import { useEffect, useRef, useState } from 'react';

interface SanityImageProps {
  image: SanityImageAsset;
  className?: string;
}

const SanityImage = ({ image, className }: SanityImageProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const resolveSize = () => {
      const sizes = [320, 640, 960, 1280, 1600, 1920];
      const frameWidth = frameRef.current?.clientWidth;
      const size = frameWidth
        ? sizes.find((size) => size <= frameWidth) ||
          image?.metadata?.dimensions?.width ||
          1920
        : 1920;
      setWidth(size);
    };

    resolveSize();

    window.addEventListener('resize', resolveSize);

    return () => {
      window.removeEventListener('resize', resolveSize);
    };
  }, [frameRef, image]);

  return (
    <div
      className={`${classes['frame']}${className ? ' ' + className : ''}`}
      ref={frameRef}
    >
      {image.url && width && image.metadata?.dimensions?.aspectRatio && (
        <Image
          src={image.url}
          className={classes['image']}
          alt={image.altText || 'alt'}
          width={width}
          height={width * image.metadata?.dimensions?.aspectRatio}
          placeholder="blur"
          blurDataURL={image.metadata?.lqip}
        />
      )}
    </div>
  );
};

export default SanityImage;
