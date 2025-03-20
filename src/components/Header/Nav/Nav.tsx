'use client';

import { NavProvider } from '@/lib/contexts/NavContext';
import useBreakpoint from '@/lib/hooks/useBreakpoint';
import { HEADER_QUERYResult } from '@/sanity/types';
import DesktopNav from './DesktopNav/DesktopNav';
import HomeLink from './HomeLink/HomeLink';
import MobileNav from './MobileNav/MobileNav';
import classes from './Nav.module.scss';

interface NavProps {
  headerData: HEADER_QUERYResult;
}

const Nav = ({ headerData }: NavProps) => {
  const isDesktop = useBreakpoint('md');
  return (
    <nav className={classes['nav']}>
      <NavProvider>
        {isDesktop ? (
          <>
            <div className={classes['homelink-col']}>
              <HomeLink key='home-link' />
            </div>
            <DesktopNav key='desktop-nav' {...headerData} />
          </>
        ) : (
          <MobileNav key='mobile-nav' {...headerData} />
        )}
      </NavProvider>
    </nav>
  );
};

export default Nav;
