'use client';

import { useRef } from 'react';
import { useEffect } from 'react';
import { controlHeaderToggle } from './animations';
import classes from './HomePageHeading.module.scss';
import { usePathname } from 'next/navigation';

const HomePageHeading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    controlHeaderToggle(headingRef, pathname);
  }, [pathname, headingRef]);

  return (
    <h1 className={classes['heading']} ref={headingRef}>
      <span className={classes['span-one']}>Anton</span>
      <span className={classes['span-two']}>Axell</span>
      <span className={classes['span-three']}>Arkitektur</span>
    </h1>
  );
};

export default HomePageHeading;
