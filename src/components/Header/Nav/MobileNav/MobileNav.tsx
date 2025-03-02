'use client';

import BlurCell from '@/components/BlurCell/BlurCell';
import { useNavContext } from '@/lib/contexts/NavContext';
import { HEADER_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  const { dispatch } = useNavContext();

  useEffect(() => {
    isOpen ? dispatch({ type: 'expand' }) : dispatch({ type: 'collapse' });
  }, [isOpen, dispatch]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <div className={classes['container']}>
        <BlurCell className={classes['blur-cell']}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${classes['toggle-button']} ${isOpen && classes['toggle-button-open']}`}
          >
            <Image
              src={'/icons/x.svg'}
              alt='close'
              width={18}
              height={18}
              className={classes['menu-icon']}
            />
          </button>
          <div className={`${classes['nav-container']}`}>
            <ul className={classes['nav-list']}>
              <li>
                <About aboutData={about} isTransparent />
              </li>
              <li>
                <Contact contactData={contact} isTransparent />
              </li>
            </ul>
          </div>
        </BlurCell>
      </div>
      {contact?.email &&
        domLoaded &&
        createPortal(
          <CtaButton email={contact?.email} out={isOpen} />,
          document.querySelector('main') as Element
        )}
    </>
  );
};

export default MobileNav;
