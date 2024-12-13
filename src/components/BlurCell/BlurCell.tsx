import classes from './BlurCell.module.scss';
import React from 'react';
import Parent from './Parent/Parent';

interface BaseProps {
  isHoverable?: boolean;
  children: React.ReactNode;
  className?: string;
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

const BlurCell = ({ children, ...props }: BlurCellProps) => {
  return (
    <Parent {...props}>
      <div className={classes['blur-bg']} />
      <div
        className={`${props.as === 'div' ? '' : classes['z-container']} ${classes['container']}`}
      >
        {children}
      </div>
    </Parent>
  );
};

export default BlurCell;
