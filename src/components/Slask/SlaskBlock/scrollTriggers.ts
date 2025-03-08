import { SCROLL_CONTAINER_ID } from '@/constants';
import { ScrollTrigger } from '@/lib/gsap';
import breakpoints from '@/styles/variables/breakpoints.module.scss';
export const createHeadTrigger = (
  head: HTMLDivElement,
  container: HTMLDivElement
) => {
  return ScrollTrigger.create({
    trigger: head,
    start: () =>
      window.innerWidth > parseInt(breakpoints.lg)
        ? 'top top'
        : 'bottom bottom',
    end: () =>
      window.innerWidth > parseInt(breakpoints.lg)
        ? `${container.offsetHeight} ${head.offsetHeight}`
        : `${container.offsetHeight} bottom`,
    scrub: true,
    pin: true,
    pinSpacing: false,
    scroller: `#${SCROLL_CONTAINER_ID}`,
  });
};
