import { defineQuery } from 'next-sanity';
import { IMAGE_FRAGMENT } from '../fragments/imageFragment';

const slaskImg = defineQuery(`{
    ...,
    image ${IMAGE_FRAGMENT}
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
    slask[]{
        body[]${slaskImg},
        head[]${slaskImg}
    }
}`);
