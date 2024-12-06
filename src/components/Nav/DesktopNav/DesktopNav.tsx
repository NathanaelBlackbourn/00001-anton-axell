import BlurCell from '@/components/BlurCell/BlurCell';
import classes from './DesktopNav.module.scss';

const DesktopNav = () => {
  return (
    <>
      <BlurCell className={classes['about-cell']}>About</BlurCell>
      <BlurCell className={classes['contact-cell']}>Contact</BlurCell>
      <BlurCell className={classes['projects-cell']}>Projects</BlurCell>
      <BlurCell className={classes['texts-cell']}>Texts</BlurCell>
    </>
  );
};

export default DesktopNav;
