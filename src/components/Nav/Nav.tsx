'use client';

import useBreakpoint from '@/lib/hooks/useBreakpoint';
import HomeLink from './HomeLink/HomeLink';
import classes from './Nav.module.scss';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

const Nav = () => {
  const isDesktop = useBreakpoint('lg');

  return (
    <nav className={classes['nav']}>
      <HomeLink />
      {isDesktop ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
};

export default Nav;
