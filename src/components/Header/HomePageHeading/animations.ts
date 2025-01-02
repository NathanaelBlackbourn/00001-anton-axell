import { RefObject } from 'react';
import { gsap } from '@/lib/gsap';

export const toggleHeading = (
  containerRef: RefObject<HTMLDivElement>,
  headingRef: RefObject<HTMLHeadingElement>,
  pathname: string
) => {
  const toggleOff = () => {
    gsap
      .timeline()
      .to(containerRef.current, { height: 0, duration: 1 })
      .set(headingRef.current, { display: 'none' });
  };

  const toggleOn = () => {
    gsap
      .timeline()
      .set(headingRef.current, { display: 'grid' })
      .to(containerRef.current, { height: 'auto', duration: 1 });
  };

  pathname === '/' ? toggleOn() : toggleOff();
};
