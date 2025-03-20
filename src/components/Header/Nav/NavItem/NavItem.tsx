'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import { useNavContext } from '@/lib/contexts/NavContext';
import useBreakpoint from '@/lib/hooks/useBreakpoint';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import classes from './NavItem.module.scss';
import {
  createCollapseTimeline,
  createOpenTimeline,
  toggleCollapse,
  toggleOpen,
} from './animations';

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const id = useId();
  const { itemStates, dispatch } = useNavContext();
  const [domLoaded, setDomLoaded] = useState(false);

  const isMd = useBreakpoint('md');

  const collapseTimeline = useMemo(
    () =>
      buttonRef.current &&
      containerRef.current &&
      labelRef.current &&
      createCollapseTimeline(containerRef.current),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [buttonRef, containerRef, labelRef, domLoaded]
  );

  const openTimeline = useMemo(
    () =>
      childrenRef.current &&
      closeButtonRef.current &&
      containerRef.current &&
      createOpenTimeline(
        containerRef.current,
        childrenRef.current,
        closeButtonRef.current,
        setIsLoadingReady
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childrenRef, closeButtonRef, containerRef, domLoaded]
  );

  const isOpen = useMemo(() => {
    return itemStates.find((item) => item.id === id)?.isOpen;
  }, [itemStates, id]);

  const toggleItem = () => {
    dispatch({ type: isOpen ? 'closeItem' : 'openItem', payload: { id } });
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    containerRef.current &&
      childrenRef.current &&
      closeButtonRef.current &&
      dispatch({
        type: 'registerItem',
        payload: {
          id,
        },
      });
  }, [id, containerRef, childrenRef, dispatch, setIsLoadingReady]);

  useEffect(() => {
    const item = itemStates.find((item) => item.id === id);
    item && openTimeline && toggleOpen(openTimeline, item.isOpen);
  }, [itemStates, dispatch, id, openTimeline]);

  useEffect(() => {
    const item = itemStates.find((item) => item.id === id);

    item &&
      collapseTimeline &&
      !isMd &&
      toggleCollapse(collapseTimeline, item.isCollapsed);
  }, [collapseTimeline, itemStates, dispatch, id, isMd]);

  return (
    <div>
      <div className={classes['container']} ref={containerRef}>
        <BlurCell className={classes['blur-cell']} isHoverable>
          <button
            onClick={toggleItem}
            className={classes['button']}
            ref={buttonRef}
          >
            <span ref={labelRef} className={classes['label']}>
              {label}
            </span>
          </button>
          <button
            onClick={toggleItem}
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
