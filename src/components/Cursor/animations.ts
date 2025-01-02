import { RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import cursorStyles from './Cursor.module.scss';

export const tweenToPosition = (
  cursorRef: RefObject<HTMLDivElement>,
  x: number,
  y: number
) => {
  gsap.to(cursorRef.current, {
    x: x - parseInt(cursorStyles.cursorSize) / 2,
    y: y - parseInt(cursorStyles.cursorSize) / 2,
    duration: 0.1,
  });
};

export const tweenCursorShape = (
  cursorRef: HTMLDivElement,
  hoverTarget: HTMLElement | null
) => {
  const fitToTarget = () => {
    const box = hoverTarget!.getBoundingClientRect();
    gsap.to(cursorRef, {
      width: box.width,
      height: box.height,
      x: box.x,
      y: box.y,
      borderRadius: '2px',
      duration: 0.3,
    });
  };

  hoverTarget
    ? fitToTarget()
    : gsap.to(cursorRef, {
        width: 50,
        height: 50,
        borderRadius: '50%',
        duration: 0.3,
      });
};
