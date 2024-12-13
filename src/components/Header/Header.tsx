import { HEADER_QUERYResult } from '@/sanity/types';
import classes from './Header.module.scss';
import HomePageHeading from './HomePageHeading/HomePageHeading';
import Nav from './Nav/Nav';

interface HeaderProps {
  headerData: HEADER_QUERYResult;
}

const Header = ({ headerData }: HeaderProps) => {
  return (
    <header className={classes['header']}>
      <HomePageHeading />
      <Nav headerData={headerData} />
    </header>
  );
};

export default Header;
