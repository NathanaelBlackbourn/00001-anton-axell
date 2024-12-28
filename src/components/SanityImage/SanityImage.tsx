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
  const [width, setWidth] = useState<number | null>(null);

  // TODO: Will need some kind of url builder here to fix sanity image sizes
  // Will not want to fetch at every resize event
  useEffect(() => {
    if (!frameRef.current) return;

    const resolveSize = () => {
      isLoadingReady && setWidth(frameRef.current?.clientWidth || null);
    };

    resolveSize();

    window.addEventListener('resize', resolveSize);

    return () => {
      window.removeEventListener('resize', resolveSize);
    };
  }, [frameRef, asset, isLoadingReady]);

  useEffect(() => {
    console.log('isLoadingReady', isLoadingReady);
  }, [isLoadingReady]);

  return (
    <div
      className={`${classes['frame']}${className ? ' ' + className : ''}`}
      ref={frameRef}
    >
      {asset.url && width && asset.metadata?.dimensions?.aspectRatio && (
        <Image
          src={asset.url}
          className={classes['image']}
          alt={asset.altText || 'alt'}
          width={width}
          height={width / asset.metadata?.dimensions?.aspectRatio}
          placeholder="blur"
          blurDataURL={asset.metadata?.lqip}
        />
      )}
    </div>
  );
};

export default SanityImage;
