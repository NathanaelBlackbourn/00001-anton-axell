'use client';

import useBreakpoint from '@/lib/hooks/useBreakpoint';
import HomeLink from './HomeLink/HomeLink';
import classes from './Nav.module.scss';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import { HEADER_QUERYResult } from '@/sanity/types';
import { NavProvider } from '@/lib/contexts/NavContext';

interface NavProps {
  headerData: HEADER_QUERYResult;
}

const Nav = ({ headerData }: NavProps) => {
  const isDesktop = useBreakpoint('lg');

  return (
    <nav className={classes['nav']}>
      <NavProvider>
        <div className={classes['homelink-col']}>
          <HomeLink />
        </div>
        {isDesktop ? <DesktopNav headerData={headerData} /> : <MobileNav />}
      </NavProvider>
    </nav>
  );
};

export default Nav;
