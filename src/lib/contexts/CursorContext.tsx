'use client';

import Cursor from '@/components/Cursor/Cursor';
import { createContext, useContext, useState } from 'react';

interface CursorContextType {
  hoverTarget: HTMLElement | null;
  setHoverTarget: (target: HTMLElement | null) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within CursorProvider');
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [hoverTarget, setHoverTarget] = useState<HTMLElement | null>(null);

  return (
    <CursorContext.Provider
      value={{
        hoverTarget,
        setHoverTarget,
      }}
    >
      {children}
      <Cursor />
    </CursorContext.Provider>
  );
};
