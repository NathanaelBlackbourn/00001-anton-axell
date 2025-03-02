'use client';

import { useEffect } from 'react';
import classes from './CtaButton.module.scss';

interface Props {
  email: string;
  out?: boolean;
}

const CtaButton = ({ email, out }: Props) => {
  useEffect(() => {
    console.log(out);
  }, [out]);

  return (
    <button
      className={`${classes['button']} ${out && classes['out']}`}
      onClick={() => window.open(`mailto:${email}`, '_blank')}
    >
      {`${email} ↗`}
    </button>
  );
};

export default CtaButton;
