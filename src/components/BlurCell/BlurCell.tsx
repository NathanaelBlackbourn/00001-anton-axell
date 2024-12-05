import classes from './BlurCell.module.scss';
import React from 'react';

interface BaseProps {
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

type Props = DivProps | ButtonProps | AnchorProps;

const BlurCell = ({ children, as, className }: Props) => {
  return React.createElement(
    as || 'div',
    {
      className: `${classes['blur-frame']} ${className ? className : ''}`,
    },
    children
  );
};
export default BlurCell;
