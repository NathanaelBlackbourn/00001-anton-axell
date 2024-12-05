'use client';

import { useRef } from 'react';
import { useEffect } from 'react';
import { toggleHeading } from './animations';
import classes from './HomePageHeader.module.scss';
import { usePathname } from 'next/navigation';

const HomePageHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    toggleHeading(containerRef, headingRef, pathname);
  }, [pathname, containerRef, headingRef]);

  return (
    <div className={classes['container']} ref={containerRef}>
      <h1 className={classes['heading']} ref={headingRef}>
        <span className={classes['span-one']}>Anton</span>
        <span className={classes['span-two']}>Axell,</span>
        <span className={classes['span-three']}>Architect</span>
      </h1>
    </div>
  );
};

export default HomePageHeader;
