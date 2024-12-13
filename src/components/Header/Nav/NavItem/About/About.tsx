import NavItem from '../NavItem';
import classes from './About.module.scss';

const About = () => {
  return (
    <NavItem label="About" colSpan="col-5-9">
      <p className={classes['text']}>
        Anton Axell (1992) is an architect based in Gothenburg, graduated from
        Chalmers University of Technology 2024. In creating buildings, I sought
        to engage histories of architecture, culture, and society: continuously
        looking for poetic qualities of contemporary vernacular architecture.
        One of the biggest motivation is the understanding of the
        social-historical background of a place, and looking for the situation
        where comfort meets human needs.
      </p>
    </NavItem>
  );
};

export default About;
