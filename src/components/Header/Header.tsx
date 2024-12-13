import classes from './Header.module.scss';
import HomePageHeading from './HomePageHeading/HomePageHeading';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header className={classes['header']}>
      <HomePageHeading />
      <Nav />
    </header>
  );
};

export default Header;
