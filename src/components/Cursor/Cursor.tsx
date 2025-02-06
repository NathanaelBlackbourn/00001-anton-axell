'use client';

import { CURSOR_ID } from '@/constants';
import { useCursor } from '@/lib/contexts/CursorContext';
import { useEffect, useMemo, useState } from 'react';
import classes from './Cursor.module.scss';
import {
  generateQuickSetters,
  generateQuickTos,
  setCursorRadius,
  trackTarget,
  tweenToPosition,
  tweenToTarget,
} from './animations';

const Cursor = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  const { hoverTarget } = useCursor();

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  const quickTos = useMemo(() => {
    return generateQuickTos();
  }, [isDomLoaded]);

  const quickSetters = useMemo(() => {
    return generateQuickSetters();
  }, [isDomLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoverTarget) return;
      quickTos && tweenToPosition(quickTos, e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [quickTos, hoverTarget]);

  useEffect(() => {
    let observer: ResizeObserver | null = null;

    const setObersver = () => {
      observer = new ResizeObserver(() => {
        if (!quickSetters || !hoverTarget) return;
        trackTarget(quickSetters, hoverTarget);
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
  }, [hoverTarget, quickSetters]);

  useEffect(() => {
    setCursorRadius(!!hoverTarget);

    if (!quickTos || !hoverTarget) return;
    tweenToTarget(quickTos, hoverTarget);
  }, [quickTos, hoverTarget]);

  return <div id={CURSOR_ID} className={classes['cursor']} />;
};

export default Cursor;
