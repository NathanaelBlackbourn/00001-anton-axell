'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import { useNavContext } from '@/lib/contexts/NavContext';
import useDOMLoaded from '@/lib/hooks/useDOMLoaded';
import { HEADER_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import About from '../NavItem/About/About';
import Contact from '../NavItem/Contact/Contact';
import CtaButton from './CTAButton/CTAButton';
import classes from './MobileNav.module.scss';
interface Props {
  about: HEADER_QUERYResult['about'];
  contact: HEADER_QUERYResult['contact'];
}

const MobileNav = ({ about, contact }: Props) => {
  const { itemStates, dispatch } = useNavContext();
  const isDOMLoaded = useDOMLoaded();

  const isExpanded = useMemo(() => {
    return itemStates.every((item) => !item.isCollapsed);
  }, [itemStates]);

  return (
    <>
      <div className={classes['container']}>
        <BlurCell>
          <button
            onClick={() =>
              isExpanded
                ? dispatch({ type: 'collapse' })
                : dispatch({ type: 'expand' })
            }
            className={`${classes['toggle-button']} ${isExpanded && classes['toggle-button-open']}`}
          >
            <Image
              src={'/icons/x.svg'}
              alt='close'
              width={18}
              height={18}
              className={classes['menu-icon']}
            />
          </button>
        </BlurCell>
        <div className={`${classes['nav-container']}`}>
          <ul className={classes['nav-list']}>
            <li>
              <About aboutData={about} />
            </li>
            <li>
              <Contact contactData={contact} />
            </li>
          </ul>
        </div>
      </div>
      {contact?.email &&
        isDOMLoaded &&
        createPortal(
          <CtaButton email={contact?.email} out={isExpanded} />,
          document.querySelector('main') as Element
        )}
    </>
  );
};

export default MobileNav;
