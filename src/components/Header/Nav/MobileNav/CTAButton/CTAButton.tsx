'use client';

import useDOMLoaded from '@/lib/hooks/useDOMLoaded';
import { useIsFooter } from '@/lib/hooks/useIsFooter';
import { useEffect, useRef } from 'react';
import classes from './CtaButton.module.scss';
import { tweenFromFooter, tweenToFooter } from './animations';
interface Props {
  email: string;
  out?: boolean;
}

const CtaButton = ({ email, out }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const CTARef = useRef<HTMLButtonElement>(null);

  const isFooter = useIsFooter();
  const isDOMLoaded = useDOMLoaded();

  useEffect(() => {
    if (isDOMLoaded) {
      if (isFooter) {
        tweenToFooter(CTARef, containerRef);
      } else {
        tweenFromFooter(CTARef, containerRef);
      }
    }
  }, [isFooter, isDOMLoaded]);

  return (
    <div
      className={`${classes['container']}${out && !isFooter ? ` ${classes['out']}` : ''}`}
      ref={containerRef}
    >
      <button
        className={`${classes['button']}${
          isFooter ? ` ${classes['footer']}` : ''
        }`}
        onClick={() => !isFooter && window.open(`mailto:${email}`, '_blank')}
        ref={CTARef}
      >
        {isFooter ? 'end' : `${email} ↗`}
      </button>
    </div>
  );
};

export default CtaButton;
