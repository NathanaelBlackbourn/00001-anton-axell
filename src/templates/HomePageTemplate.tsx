import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import classes from './HomePageTemplate.module.scss';
import HomePageHeader from '@/components/HomePageHeader/HomePageHeader';

const HomePageTemplate = ({}: NonNullable<HOME_PAGE_QUERYResult>) => {
  return (
    <div className={classes['container']}>
      <HomePageHeader />
    </div>
  );
};

export default HomePageTemplate;
