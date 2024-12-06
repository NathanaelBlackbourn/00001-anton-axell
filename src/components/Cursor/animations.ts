import { RefObject } from 'react';
import gsap from 'gsap';

export const tweenToPosition = (
  cursorRef: RefObject<HTMLDivElement>,
  x: number,
  y: number
) => {
  gsap.to(cursorRef.current, {
    x: x,
    y: y,
    duration: 0.1,
  });
};
