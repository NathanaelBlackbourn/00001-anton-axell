'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import React, { useEffect, useId, useRef } from 'react';
import classes from './NavItem.module.scss';
import { createTimeline, toggleOpen } from './animations';
import { useNavContext } from '@/lib/contexts/NavContext';

interface NavItemProps {
  label: string;
  setLoadingReady?: (isReady: boolean) => void;
  children: React.ReactNode;
}

const NavItem = ({
  label,
  setLoadingReady: setIsLoadingReady,
  children,
}: NavItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const { itemStates, dispatch } = useNavContext();

  useEffect(() => {
    containerRef.current &&
      childrenRef.current &&
      closeButtonRef.current &&
      dispatch({
        type: 'registerItem',
        payload: {
          id,
          timeline: createTimeline(
            containerRef.current,
            childrenRef.current,
            closeButtonRef.current,
            setIsLoadingReady
          ),
        },
      });
  }, [id, containerRef, childrenRef, dispatch, setIsLoadingReady]);

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
          <button
            onClick={() => dispatch({ type: 'toggleItem', payload: { id } })}
            className={classes['close-button']}
            ref={closeButtonRef}
          >
            ×
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
