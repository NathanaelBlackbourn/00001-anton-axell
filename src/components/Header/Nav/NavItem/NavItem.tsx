'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import React, { useEffect, useRef, useState } from 'react';
import classes from './NavItem.module.scss';
import { toggleOpen } from './animations';

interface NavItemProps {
  label: string;
  children: React.ReactNode;
  colSpan: 'col-5-9' | 'col-13-17';
}

const NavItem = ({ label, children, colSpan }: NavItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    containerRef.current &&
      childrenRef.current &&
      toggleOpen(containerRef.current, childrenRef.current, isOpen);
  }, [containerRef, childrenRef, isOpen]);

  return (
    <li className={classes[colSpan]}>
      <div className={classes['container']} ref={containerRef}>
        <BlurCell className={classes['blur-cell']} isHoverable>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={classes['button']}
          >
            {label}
          </button>
          <div className={classes['children']} ref={childrenRef}>
            {children}
          </div>
        </BlurCell>
      </div>
    </li>
  );
};

export default NavItem;
