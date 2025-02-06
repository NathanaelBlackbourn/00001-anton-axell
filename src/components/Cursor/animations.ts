import { CURSOR_ID } from '@/constants';
import { gsap } from '@/lib/gsap';
import cursorStyles from './Cursor.module.scss';

const cursorSize = parseInt(cursorStyles.cursorSize);

export const generateQuickTos = () => {
  const duration = 0.1;
  return {
    x: gsap.quickTo(`#${CURSOR_ID}`, 'x', { duration }),
    y: gsap.quickTo(`#${CURSOR_ID}`, 'y', { duration }),
    width: gsap.quickTo(`#${CURSOR_ID}`, 'width', { duration }),
    height: gsap.quickTo(`#${CURSOR_ID}`, 'height', { duration }),
    borderRadius: gsap.quickTo(`#${CURSOR_ID}`, 'borderRadius', { duration }),
  };
};

export const generateQuickSetters = () => {
  return {
    x: gsap.quickSetter(`#${CURSOR_ID}`, 'x', 'px'),
    y: gsap.quickSetter(`#${CURSOR_ID}`, 'y', 'px'),
    width: gsap.quickSetter(`#${CURSOR_ID}`, 'width', 'px'),
    height: gsap.quickSetter(`#${CURSOR_ID}`, 'height', 'px'),
  };
};

export const tweenToPosition = (
  quickTos: ReturnType<typeof generateQuickTos>,
  x: number,
  y: number
) => {
  // gsap.to(`#${CURSOR_ID}`, {
  //   borderRadius: '50%',
  //   duration: 0.1,
  // });

  quickTos.x(x - cursorSize / 2);
  quickTos.y(y - cursorSize / 2);
  quickTos.width(cursorSize);
  quickTos.height(cursorSize);
};

export const tweenToTarget = (
  quickTos: ReturnType<typeof generateQuickTos>,
  targetRef: HTMLElement
) => {
  // gsap.to(`#${CURSOR_ID}`, {
  //   borderRadius: '2px',
  //   duration: 0.1,
  // });

  const box = targetRef.getBoundingClientRect();
  Object.keys(quickTos).forEach((key) => {
    quickTos[key as keyof typeof quickTos](
      box[key as keyof typeof box] as number
    );
  });
};

export const trackTarget = (
  quickSetters: ReturnType<typeof generateQuickSetters>,
  targetRef: HTMLElement
) => {
  const box = targetRef.getBoundingClientRect();
  Object.keys(quickSetters).forEach((key) => {
    quickSetters[key as keyof typeof quickSetters](
      box[key as keyof typeof box]
    );
  });
};

export const setCursorRadius = (hasTarget: boolean) => {
  gsap.to(`#${CURSOR_ID}`, {
    borderRadius: hasTarget ? '2px' : '25px',
    duration: 0.1,
  });
};
