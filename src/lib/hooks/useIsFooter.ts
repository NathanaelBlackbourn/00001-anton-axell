import { useEffect, useState } from 'react';

export const useIsFooter = () => {
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooter(true);
          } else {
            setIsFooter(false);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }
  }, []);

  return isFooter;
};
