'use client';

import { useCursor } from '@/lib/contexts/CursorContext';
import { useEffect, useMemo, useRef } from 'react';
import classes from './Cursor.module.scss';
import { generateQuickTos, tweenToPosition, tweenToTarget } from './animations';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const { hoverTarget } = useCursor();

  const quickTos = useMemo(() => {
    console.log('useMemo');
    if (!cursorRef.current) return;
    return generateQuickTos(cursorRef.current);
  }, [cursorRef.current]);

  useEffect(() => {
    console.log(cursorRef.current);
  }, [cursorRef]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoverTarget) return;
      quickTos && tweenToPosition(quickTos, e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoverTarget, quickTos]);

  useEffect(() => {
    let observer: ResizeObserver | null = null;

    const setObersver = () => {
      observer = new ResizeObserver(() => {
        quickTos && tweenToTarget(quickTos, hoverTarget!);
      });

      observer.observe(hoverTarget!);
    };

    const disconnectObserver = () => {
      observer?.disconnect();
      observer = null;
    };

    hoverTarget ? setObersver() : disconnectObserver();

    return () => {
      disconnectObserver();
    };
  }, [hoverTarget, quickTos]);

  // useEffect(() => {
  //   cursorRef.current &&
  //     tweenCursorShape(cursorRef.current, hoverTarget && hoverTarget);
  // }, [hoverTarget]);

  return <div ref={cursorRef} className={classes['cursor']} />;
};

export default Cursor;
