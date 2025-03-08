import { SCROLL_CONTAINER_ID } from '@/constants';
import { gsap } from '@/lib/gsap';
import { RefObject } from 'react';

export const controlHeaderToggle = (
  headingRef: RefObject<HTMLHeadingElement>,
  pathname: string
) => {
  let scrollTriggerTimeline: GSAPTimeline | null = null;

  pathname === '/'
    ? gsap
        .timeline({
          onComplete: () => {
            scrollTriggerTimeline = gsap
              .timeline({
                scrollTrigger: {
                  trigger: headingRef.current,
                  scroller: `#${SCROLL_CONTAINER_ID}`,
                  start: '10px',
                  end: 'bottom top',
                  scrub: true,
                },
              })
              .fromTo(
                headingRef.current,
                { height: headingRef.current?.offsetHeight },
                { height: 0, duration: 0.5, ease: 'linear' }
              )
              .set(headingRef.current, { display: 'none' });
          },
        })
        .set(headingRef.current, { display: 'grid' })
        .to(headingRef.current, {
          height: '0.9em',
          duration: 0.5,
          ease: 'linear',
        })
    : gsap
        .timeline({
          onStart: () => {
            scrollTriggerTimeline?.kill();
          },
        })
        .fromTo(
          headingRef.current,
          { height: headingRef.current?.offsetHeight },
          { height: 0, duration: 0.5, ease: 'linear' }
        )
        .set(headingRef.current, { display: 'none' });
};
