import { defineQuery } from 'next-sanity';

const slaskImg = defineQuery(`{
    ...,
    image {
        ...,
        asset->
    }
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
    slask[]{
        body[]${slaskImg},
        head[]${slaskImg}
    }
}`);
