import { HEADER_QUERYResult } from '@/sanity/types';
import NavItem from '../NavItem';
import classes from './About.module.scss';

interface AboutProps {
  aboutData: HEADER_QUERYResult['about'];
}

const About = ({ aboutData }: AboutProps) => {
  return (
    <NavItem label="About" colSpan="col-5-9">
      {aboutData?.text && <p className={classes['text']}>{aboutData.text}</p>}
    </NavItem>
  );
};

export default About;
