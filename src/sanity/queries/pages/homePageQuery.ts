import { groq } from 'next-sanity';

const slaskImg = groq`{
    ...,
    image {
        ...,
        asset->
    }
}`;

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]{
    slask[]{
        body[]${slaskImg},
        head[]${slaskImg}
    }
}`;
