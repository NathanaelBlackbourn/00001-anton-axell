import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import classes from './HomePageTemplate.module.scss';

const HomePageTemplate = ({}: NonNullable<HOME_PAGE_QUERYResult>) => {
  return <div className={classes['container']}></div>;
};

export default HomePageTemplate;
