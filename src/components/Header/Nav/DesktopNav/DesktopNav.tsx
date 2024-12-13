import BlurCell from '@/components/BlurCell/BlurCell';
import classes from './DesktopNav.module.scss';
import About from '../NavItem/About/About';

const DesktopNav = () => {
  return (
    <>
      <About />
      {['Projects', 'Contact', 'Texts'].map((item, i) => (
        <div className={classes[`${item.toLowerCase()}-col`]} key={i}>
          <BlurCell
            className={classes[`${item.toLowerCase()}-cell`]}
            as="button"
            isHoverable
            onClick={() => {}}
          >
            {item}
          </BlurCell>
        </div>
      ))}
    </>
  );
};

export default DesktopNav;
