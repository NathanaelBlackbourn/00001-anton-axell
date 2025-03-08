import Footer from '@/components/Footer/Footer';
import Slask from '@/components/Slask/Slask';
import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import classes from './HomePageTemplate.module.scss';

const HomePageTemplate = ({ slask }: NonNullable<HOME_PAGE_QUERYResult>) => {
  return (
    <>
      <main>
        <div className={classes['container']}>
          <Slask slask={slask} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePageTemplate;
