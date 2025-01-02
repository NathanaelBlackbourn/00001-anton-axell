import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import classes from './HomePageTemplate.module.scss';
import Slask from '@/components/Slask/Slask';

const HomePageTemplate = ({ slask }: NonNullable<HOME_PAGE_QUERYResult>) => {
  return (
    <div className={classes['container']}>
      <Slask slask={slask} />
    </div>
  );
};

export default HomePageTemplate;
