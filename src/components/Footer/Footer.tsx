import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <p className={classes['location']}>Gothenburg, Sweden</p>
      <p className={classes['credit']}>Website by Nathanael Blackbourn</p>
      <h2 className={classes['heading']}>
        <span className={classes['span-one']}>Anton</span>
        <span className={classes['span-two']}>Axell</span>
        <span className={classes['span-three']}>Arkitektur</span>
      </h2>
    </footer>
  );
};

export default Footer;
