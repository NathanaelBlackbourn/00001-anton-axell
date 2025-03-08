import { gsap } from '@/lib/gsap';
import { RefObject } from 'react';

export const tweenToFooter = (
  CTARef: RefObject<HTMLButtonElement>,
  containerRef: RefObject<HTMLDivElement>
) => {
  gsap.to(containerRef.current, {
    width: '100vw',
    height: '100vh',
    borderRadius: '50%',
    duration: 0.4,
    ease: 'power2.inOut',
  });

  gsap.to(CTARef.current, {
    borderRadius: '50%',
    width: '100%',
    aspectRatio: '1/1',
    duration: 0.4,
    ease: 'power2.inOut',
  });
};

export const tweenFromFooter = (
  CTARef: RefObject<HTMLButtonElement>,
  containerRef: RefObject<HTMLDivElement>
) => {
  gsap.to(containerRef.current, {
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '2px',
    duration: 0.3,
    ease: 'power2.inOut',
  });

  gsap.to(CTARef.current, {
    borderRadius: '2px',
    width: 'auto',
    aspectRatio: 'auto',
    duration: 0.3,
    ease: 'power2.inOut',
  });
};
