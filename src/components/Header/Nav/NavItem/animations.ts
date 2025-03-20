import { gsap } from '@/lib/gsap';

export const createOpenTimeline = (
  container: HTMLDivElement,
  children: HTMLDivElement,
  closeButton: HTMLButtonElement,
  setLoadingReady?: (isReady: boolean) => void
) =>
  gsap
    .timeline({
      paused: true,
      data: {
        hasPlayed: false,
      },
    })
    .to(container, {
      width: '100%',
      duration: 0.3,
    })
    .set(children, {
      display: 'block',
      onComplete: () => {
        setLoadingReady && setLoadingReady(true);
      },
    })
    .set(closeButton, {
      display: 'block',
    })
    .to(children, {
      height: 'auto',
      duration: 0.2,
    })
    .to(children, {
      opacity: 1,
      duration: 0.1,
    })
    .to(
      closeButton,
      {
        opacity: 1,
        duration: 0.1,
      },
      '<'
    );

export const toggleOpen = (tl: GSAPTimeline, isOpen: boolean) => {
  const playTimeline = () => {
    tl.play();
    tl.data.hasPlayed = true;
  };

  const reverseTimeline = () => {
    tl.data.hasPlayed && tl.reverse();
  };

  isOpen ? playTimeline() : reverseTimeline();
};

export const createCollapseTimeline = (container: HTMLDivElement) =>
  gsap
    .timeline({
      paused: true,
    })
    .set(container, {
      display: 'block',
    })
    .to(container, {
      opacity: 1,
      top: '0px',
      duration: 0.2,
    });

export const toggleCollapse = (tl: GSAPTimeline, isCollapsed: boolean) => {
  !isCollapsed ? tl.play() : tl.reverse();
};
