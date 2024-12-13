'use client';

import { useEffect, useRef } from 'react';
import classes from './Cursor.module.scss';
import { tweenCursorShape, tweenToPosition } from './animations';
import { useCursor } from '@/lib/contexts/CursorContext';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const { hoverTarget } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      !hoverTarget && tweenToPosition(cursorRef, e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoverTarget]);

  useEffect(() => {
    cursorRef.current &&
      tweenCursorShape(cursorRef.current, hoverTarget && hoverTarget);
  }, [hoverTarget]);

  return <div ref={cursorRef} className={classes['cursor']} />;
};

export default Cursor;
