import classes from './HomePageHeader.module.scss';

const HomePageHeader = () => {
  return (
    <h1 className={classes['heading']}>
      <span className={classes['span-one']}>Anton</span>
      <span className={classes['span-two']}>Axell,</span>
      <span className={classes['span-three']}>Architect</span>
    </h1>
  );
};

export default HomePageHeader;
