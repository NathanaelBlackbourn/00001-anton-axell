import { HOME_PAGE_QUERYResult } from '@/sanity/types';

const HomePageTemplate = ({
  introText,
}: NonNullable<HOME_PAGE_QUERYResult>) => {
  return (
    <>
      <p>{introText}</p>
    </>
  );
};

export default HomePageTemplate;
