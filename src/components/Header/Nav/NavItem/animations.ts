import gsap from 'gsap';

let toggleTimeline: GSAPTimeline | null;

export const toggleOpen = (
  container: HTMLDivElement,
  children: HTMLDivElement,
  isOpen: boolean
) => {
  const assignTimeline = () => {
    toggleTimeline = gsap
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
      .to(children, {
        height: 'auto',
        duration: 0.2,
      })
      .to(children, {
        opacity: 1,
        duration: 0.1,
      });
  };

  !toggleTimeline && assignTimeline();

  const playTimeline = () => {
    toggleTimeline &&
      (toggleTimeline.play(), (toggleTimeline.data.hasPlayed = true));
  };

  const reverseTimeline = () => {
    toggleTimeline?.data.hasPlayed && toggleTimeline?.reverse(0.5);
  };

  isOpen ? playTimeline() : reverseTimeline();
};
