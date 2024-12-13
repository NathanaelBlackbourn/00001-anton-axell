import BlurCell from '@/components/BlurCell/BlurCell';
import classes from './DesktopNav.module.scss';
import About from '../NavItem/About/About';
import { HEADER_QUERYResult } from '@/sanity/types';

interface DesktopNavProps {
  headerData: HEADER_QUERYResult;
}

const DesktopNav = ({ headerData }: DesktopNavProps) => {
  return (
    <>
      <About aboutData={headerData.about} />
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
