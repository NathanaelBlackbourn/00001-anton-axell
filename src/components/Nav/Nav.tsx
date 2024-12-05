import HomeLink from './HomeLink/HomeLink';
import classes from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={classes['nav']}>
      <HomeLink />
    </nav>
  );
};

export default Nav;
