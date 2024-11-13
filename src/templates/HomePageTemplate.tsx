import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import classes from './HomePageTemplate.module.scss';

const HomePageTemplate = ({
  introText,
}: NonNullable<HOME_PAGE_QUERYResult>) => {
  return (
    <div className={classes['container']}>
      <h1 className={classes['heading']}>
        <span className={classes['span-one']}>Anton</span>
        <span className={classes['span-two']}>Axell,</span>
        <span className={classes['span-three']}>Architect</span>
      </h1>
      <p className={classes['intro-text']}>{introText}</p>
    </div>
  );
};

export default HomePageTemplate;
