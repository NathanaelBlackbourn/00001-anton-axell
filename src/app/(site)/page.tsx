import { sanityFetch } from '@/sanity/lib/live';

import { HOME_PAGE_QUERY } from '@/sanity/queries/pages/homePageQuery';
import HomePageTemplate from '@/templates/HomePageTemplate';

export default async function Home() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  return data ? <HomePageTemplate {...data} /> : null;
}
