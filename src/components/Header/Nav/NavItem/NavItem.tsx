'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import React, { useEffect, useId, useRef } from 'react';
import classes from './NavItem.module.scss';
import { createTimeline, toggleOpen } from './animations';
import { useNavContext } from '@/lib/contexts/NavContext';

interface NavItemProps {
  label: string;
  children: React.ReactNode;
}

const NavItem = ({ label, children }: NavItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const { itemStates, dispatch } = useNavContext();

  useEffect(() => {
    containerRef.current &&
      childrenRef.current &&
      dispatch({
        type: 'registerItem',
        payload: {
          id,
          timeline: createTimeline(containerRef.current, childrenRef.current),
        },
      });
  }, [id, containerRef, childrenRef, dispatch]);

  useEffect(() => {
    const item = itemStates.find((item) => item.id === id);
    item && toggleOpen(item.timeline, item.isOpen);
  }, [itemStates, id]);

  return (
    <div>
      <div className={classes['container']} ref={containerRef}>
        <BlurCell className={classes['blur-cell']} isHoverable>
          <button
            onClick={() => dispatch({ type: 'toggleItem', payload: { id } })}
            className={classes['button']}
          >
            {label}
          </button>
          <div className={classes['children']} ref={childrenRef}>
            {children}
          </div>
        </BlurCell>
      </div>
    </div>
  );
};

export default NavItem;
