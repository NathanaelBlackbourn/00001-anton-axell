'use client';

import Image from 'next/image';
import { SanityImageAsset } from '@/sanity/types';
import classes from './SanityImage.module.scss';
import { useEffect, useRef, useState } from 'react';

interface SanityImageProps {
  asset: SanityImageAsset;
  isLoadingReady?: boolean;
  className?: string;
}

const SanityImage = ({
  asset,
  isLoadingReady = true,
  className,
}: SanityImageProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );

  // TODO: Will need some kind of url builder here to fix sanity image sizes
  // Will not want to fetch at every resize event
  useEffect(() => {
    if (!frameRef.current) return;

    const resolveSize = () => {
      isLoadingReady &&
        setSize({
          width: frameRef.current?.clientWidth || 0,
          height: frameRef.current?.clientHeight || 0,
        });
    };

    resolveSize();

    window.addEventListener('resize', resolveSize);

    return () => {
      window.removeEventListener('resize', resolveSize);
    };
  }, [frameRef, asset, isLoadingReady]);

  return (
    <div
      className={`${classes['frame']} ${className ? ' ' + className : ''}`}
      style={{ aspectRatio: asset.metadata?.dimensions?.aspectRatio }}
      ref={frameRef}
    >
      {asset.url && size && asset.metadata?.dimensions?.aspectRatio && (
        <Image
          src={asset.url}
          className={classes['image']}
          alt={asset.altText || 'alt'}
          placeholder="blur"
          blurDataURL={asset.metadata?.lqip}
          fill
        />
      )}
    </div>
  );
};

export default SanityImage;
