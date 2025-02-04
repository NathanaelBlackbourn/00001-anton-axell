import { gsap } from '@/lib/gsap';
import cursorStyles from './Cursor.module.scss';

// export const tweenToPosition = (
//   cursorRef: RefObject<HTMLDivElement>,
//   x: number,
//   y: number
// ) => {
//   gsap.to(cursorRef.current, {
//     x: x - parseInt(cursorStyles.cursorSize) / 2,
//     y: y - parseInt(cursorStyles.cursorSize) / 2,
//     duration: 0.1,
//   });
// };

// export const tweenCursorShape = (
//   cursorRef: HTMLDivElement,
//   hoverTarget: HTMLElement | null
// ) => {
//   const fitToTarget = () => {
//     const box = hoverTarget!.getBoundingClientRect();
//     gsap.to(cursorRef, {
//       width: box.width,
//       height: box.height,
//       x: box.x,
//       y: box.y,
//       borderRadius: '2px',
//       duration: 0.3,
//     });
//   };

//   hoverTarget
//     ? fitToTarget()
//     : gsap.to(cursorRef, {
//         width: 50,
//         height: 50,
//         borderRadius: '50%',
//         duration: 0.3,
//       });
// };

export const generateQuickTos = (cursorRef: HTMLDivElement) => {
  console.log('generateQuickTos');
  const duration = 0.01;
  return {
    x: gsap.quickTo(cursorRef, 'x', { duration }),
    y: gsap.quickTo(cursorRef, 'y', { duration }),
    width: gsap.quickTo(cursorRef, 'width', { duration }),
    height: gsap.quickTo(cursorRef, 'height', { duration }),
    borderRadius: gsap.quickTo(cursorRef, 'borderRadius', { duration }),
  };
};

export const tweenToTarget = (
  quickTos: ReturnType<typeof generateQuickTos>,
  targetRef: HTMLElement
) => {
  console.log('tweenToTarget');
  const box = targetRef.getBoundingClientRect();
  quickTos.x(box.x);
  quickTos.y(box.y);
  quickTos.width(box.width);
  quickTos.height(box.height);
  quickTos.borderRadius(2);
};

export const tweenToPosition = (
  quickTos: ReturnType<typeof generateQuickTos>,
  x: number,
  y: number
) => {
  console.log('tweebToPosition');
  quickTos.x(x - parseInt(cursorStyles.cursorSize) / 2);
  quickTos.y(y - parseInt(cursorStyles.cursorSize) / 2);
  quickTos.width(parseInt(cursorStyles.cursorSize));
  quickTos.height(parseInt(cursorStyles.cursorSize));
  quickTos.borderRadius(50);
};
