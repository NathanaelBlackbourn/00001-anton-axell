import { CURSOR_ID } from '@/constants';
import { gsap } from '@/lib/gsap';

export const generateQuickTos = () => {
  const duration = 0.1;
  return {
    x: gsap.quickTo(`#${CURSOR_ID}`, 'x', { duration }),
    y: gsap.quickTo(`#${CURSOR_ID}`, 'y', { duration }),
    width: gsap.quickTo(`#${CURSOR_ID}`, 'width', { duration }),
    height: gsap.quickTo(`#${CURSOR_ID}`, 'height', { duration }),
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
  y: number,
  cursorSize: number
) => {
  quickTos.x(x - cursorSize / 2);
  quickTos.y(y - cursorSize / 2);
};

export const tweenSize = (hasTarget: boolean, cursorSize: number) => {
  if (hasTarget) return;
  gsap.to(`#${CURSOR_ID}`, {
    width: cursorSize,
    height: cursorSize,
    duration: 0.2,
  });
};

export const tweenToTarget = (
  quickTos: ReturnType<typeof generateQuickTos>,
  targetRef: HTMLElement
) => {
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

export const setCursorRadius = (hasTarget: boolean, cursorSize: number) => {
  gsap.to(`#${CURSOR_ID}`, {
    borderRadius: hasTarget ? '2px' : cursorSize / 2 + 'px',
    duration: 0.1,
  });
};

export const footerTween = (isFooter: boolean) => {
  gsap.to(`#${CURSOR_ID}`, {
    height: isFooter ? '200px' : '50px',
    width: isFooter ? '200px' : '50px',
    duration: 0.3,
    ease: 'power2.inOut',
  });
};
