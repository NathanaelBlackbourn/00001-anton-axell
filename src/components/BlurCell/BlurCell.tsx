import React from 'react';
import classes from './BlurCell.module.scss';
import Parent from './Parent/Parent';

interface BaseProps {
  isHoverable?: boolean;
  children: React.ReactNode;
  className?: string;
  isTransparent?: boolean;
}

interface DivProps extends BaseProps {
  as?: 'div';
}

interface ButtonProps extends BaseProps {
  as: 'button';
  onClick: () => void;
}

interface AnchorProps extends BaseProps {
  as: 'a';
  href: string;
}

export type BlurCellProps = DivProps | ButtonProps | AnchorProps;

const BlurCell = ({ children, isTransparent, ...props }: BlurCellProps) => {
  return (
    <Parent {...props}>
      <div
        className={`${classes['blur-bg']}${!isTransparent ? ` ${classes['opaque']}` : ''}`}
      />
      <div
        className={`${props.as === 'div' ? '' : classes['z-container']} ${classes['container']}`}
      >
        {children}
      </div>
    </Parent>
  );
};

export default BlurCell;
