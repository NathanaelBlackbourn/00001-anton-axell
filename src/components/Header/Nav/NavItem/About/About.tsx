import { HEADER_QUERYResult } from '@/sanity/types';
import NavItem from '../NavItem';
import classes from './About.module.scss';
import SanityImage from '@/components/SanityImage/SanityImage';

interface AboutProps {
  aboutData: HEADER_QUERYResult['about'];
}

const About = ({ aboutData }: AboutProps) => {
  return (
    <NavItem label="About" colSpan="col-5-9">
      {aboutData?.image?.asset && (
        <SanityImage
          image={aboutData.image.asset}
          className={classes['sanity-image']}
        />
      )}
      {aboutData?.text && <p className={classes['text']}>{aboutData.text}</p>}
    </NavItem>
  );
};

export default About;
