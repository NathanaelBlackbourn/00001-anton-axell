import gsap from 'gsap';

export const createTimeline = (
  container: HTMLDivElement,
  children: HTMLDivElement,
  closeButton: HTMLButtonElement
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
      duration: 0.2,
    })
    .set(children, {
      display: 'block',
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
