import { useEffect, useState } from 'react';

export default function useDOMLoaded() {
  const [isDOMLoaded, setIsDOMLoaded] = useState(false);

  useEffect(() => {
    setIsDOMLoaded(true);
  }, []);

  return isDOMLoaded;
}
