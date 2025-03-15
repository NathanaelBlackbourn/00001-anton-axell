'use client';

import Cursor from '@/components/Cursor/Cursor';
import { createContext, useContext, useMemo, useState } from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import { useIsFooter } from '../hooks/useIsFooter';

interface CursorContextType {
  hoverTarget: HTMLElement | null;
  setHoverTarget: (target: HTMLElement | null) => void;
  cursorSize: number;
}

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within CursorProvider');
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [hoverTarget, setHoverTarget] = useState<HTMLElement | null>(null);

  const isSm = useBreakpoint('sm');
  const isFooter = useIsFooter();

  const cursorSize = useMemo(() => {
    return isFooter ? 200 : 50;
  }, [isFooter]);

  return (
    <CursorContext.Provider
      value={{
        hoverTarget,
        setHoverTarget,
        cursorSize,
      }}
    >
      {children}
      {isSm && <Cursor />}
    </CursorContext.Provider>
  );
};
