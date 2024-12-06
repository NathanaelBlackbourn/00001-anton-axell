'use client';

import { useEffect, useRef } from 'react';
import classes from './Cursor.module.scss';
import { tweenToPosition } from './animations';

interface CursorProps {
  position: { x: number; y: number };
}

const Cursor = ({ position }: CursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tweenToPosition(cursorRef, position.x, position.y);
  }, [position]);

  return <div ref={cursorRef} className={classes['cursor']} />;
};

export default Cursor;
