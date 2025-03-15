'use client';

import { CURSOR_ID } from '@/constants';
import { useCursor } from '@/lib/contexts/CursorContext';
import { useIsFooter } from '@/lib/hooks/useIsFooter';
import { useEffect, useMemo, useState } from 'react';
import classes from './Cursor.module.scss';
import {
  generateQuickSetters,
  generateQuickTos,
  setCursorRadius,
  trackTarget,
  tweenSize,
  tweenToPosition,
  tweenToTarget,
} from './animations';

const Cursor = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  const { hoverTarget, cursorSize } = useCursor();
  const isFooter = useIsFooter();

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  const quickTos = useMemo(() => {
    if (!isDomLoaded) return null;
    return generateQuickTos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDomLoaded]);

  const quickSetters = useMemo(() => {
    if (!isDomLoaded) return null;
    return generateQuickSetters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDomLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoverTarget) return;
      quickTos && tweenToPosition(quickTos, e.clientX, e.clientY, cursorSize);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [quickTos, hoverTarget, cursorSize]);

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
    setCursorRadius(!!hoverTarget, cursorSize);

    if (!quickTos || !hoverTarget) return;
    tweenToTarget(quickTos, hoverTarget);
  }, [quickTos, hoverTarget, cursorSize]);

  useEffect(() => {
    tweenSize(!!hoverTarget, cursorSize);
  }, [hoverTarget, cursorSize]);

  return (
    <div id={CURSOR_ID} className={`${classes['cursor']}`}>
      <p
        className={`${classes['end']}${isFooter && !hoverTarget ? ` ${classes['footer-end']}` : ''}`}
      >
        End
      </p>
    </div>
  );
};

export default Cursor;
