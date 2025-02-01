'use client';

import { urlFor } from '@/sanity/lib/image';
import {
  SanityImageCrop,
  SanityImageHotspot,
  SanityImageMetadata,
} from '@/sanity/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import classes from './SanityImage.module.scss';

interface ImageData {
  hotspot: SanityImageHotspot | null;
  crop: SanityImageCrop | null;
  _ref: string | null;
  altText: string | null;
  metadata: SanityImageMetadata | null;
}

interface SanityImageProps {
  image: ImageData;
  isLoadingReady?: boolean;
  className?: string;
}

const SanityImage = ({
  image,
  isLoadingReady = true,
  className,
}: SanityImageProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );

  useEffect(() => {
    if (!frameRef.current) return;

    const sizes = [4096, 2560, 1920, 1280, 1024, 768, 640, 320];

    const resolveSize = () => {
      const maxWidth =
        frameRef.current?.clientWidth && image.metadata?.dimensions?.width
          ? Math.min(
              frameRef.current?.clientWidth,
              image.metadata?.dimensions?.width
            )
          : image.metadata?.dimensions?.width || 320;

      const width = sizes.find((size) => size <= maxWidth);
      const height = width! / (image.metadata?.dimensions?.aspectRatio || 1);

      setSize({
        width: Math.floor(width!),
        height: Math.floor(height),
      });
    };

    isLoadingReady && resolveSize();

    window.addEventListener('resize', resolveSize);

    return () => {
      window.removeEventListener('resize', resolveSize);
    };
  }, [image, isLoadingReady]);

  return (
    <div
      className={`${classes['frame']} ${className ? ' ' + className : ''}`}
      style={{ aspectRatio: image.metadata?.dimensions?.aspectRatio }}
      ref={frameRef}
    >
      {image._ref && size && image.metadata?.dimensions?.aspectRatio && (
        <Image
          src={urlFor(image._ref).width(size.width).height(size.height).url()}
          className={classes['image']}
          alt={image.altText || 'alt'}
          placeholder="blur"
          blurDataURL={image.metadata?.lqip}
          fill
        />
      )}
    </div>
  );
};

export default SanityImage;
