import classes from './HomeLink.module.scss';
import BlurCell from '@/components/BlurCell/BlurCell';

const HomeLink = () => {
  return (
    <BlurCell as="a" href="/" className={classes['cell']}>
      {['nton ', 'xell ', 'rkitektur'].map((wordBody, i) => (
        <span key={i}>
          A<span className={classes['collapsible']}>{wordBody}</span>
        </span>
      ))}
    </BlurCell>
  );
};

export default HomeLink;
