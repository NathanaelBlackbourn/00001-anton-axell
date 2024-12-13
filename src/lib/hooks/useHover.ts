import { useRef } from 'react';
import { useCursor } from '../contexts/CursorContext';

const useHover = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const { setHoverTarget } = useCursor();

  const hoverEvents = {
    onMouseEnter: () => {
      setHoverTarget(ref.current);
    },
    onMouseLeave: () => {
      setHoverTarget(null);
    },
  };

  return {
    ref,
    hoverEvents,
  };
};

export default useHover;
