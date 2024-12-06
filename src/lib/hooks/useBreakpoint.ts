import { useState, useEffect } from 'react';
import breakpoints from '@/styles/variables/breakpoints.module.scss';

type Breakpoint = keyof typeof breakpoints;

const useBreakpoint = (bp: Breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isBreakpoint = width >= parseInt(breakpoints[bp]);
      setIsBreakpoint(isBreakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bp]);

  return isBreakpoint;
};

export default useBreakpoint;
