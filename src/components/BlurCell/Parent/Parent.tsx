'use client';

import useHover from '@/lib/hooks/useHover';
import React from 'react';
import { type BlurCellProps } from '../BlurCell';
import classes from './Parent.module.scss';

const Parent = ({
  children,
  as = 'div',
  className,
  isHoverable = false,
  ...rest
}: BlurCellProps) => {
  const { ref, hoverEvents } = useHover<HTMLElement>();

  return React.createElement(
    as,
    {
      className: `${classes['blur-parent']} ${className || ''}`,
      ...rest,
      ref,
      ...(isHoverable ? hoverEvents : {}),
    },
    children
  );
};

export default Parent;
