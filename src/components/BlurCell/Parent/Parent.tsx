'use client';

import { useCursor } from '@/lib/contexts/CursorContext';
import React, { useRef } from 'react';
import { type BlurCellProps } from '../BlurCell';
import classes from './Parent.module.scss';

const Parent = ({
  children,
  as = 'div',
  className,
  ...rest
}: BlurCellProps) => {
  const ref = useRef<HTMLElement>(null);

  const { setHoverTarget } = useCursor();

  return React.createElement(
    as,
    {
      className: `${classes['blur-parent']} ${className || ''}`,
      ...rest,
      ref,
      onMouseEnter: () => {
        setHoverTarget(ref.current);
      },
      onMouseLeave: () => {
        setHoverTarget(null);
      },
    },
    children
  );
};

export default Parent;
