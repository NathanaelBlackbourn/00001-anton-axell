'use client';

import Cursor from '@/components/Cursor/Cursor';
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import cursorStyles from '@/components/Cursor/Cursor.module.scss';

interface CursorContextType {
  position: { x: number; y: number };
  updatePosition: (x: number, y: number) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within CursorProvider');
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback((x: number, y: number) => {
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      updatePosition(
        e.clientX - parseInt(cursorStyles.cursorSize) / 2,
        e.clientY - parseInt(cursorStyles.cursorSize) / 2
      );
    });
  }, [updatePosition]);

  return (
    <CursorContext.Provider value={{ position, updatePosition }}>
      {children}
      <Cursor position={position} />
    </CursorContext.Provider>
  );
};
