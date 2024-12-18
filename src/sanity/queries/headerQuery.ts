import { groq } from 'next-sanity';

export const HEADER_QUERY = groq`{
    "about": *[_type == "about"][0]{
        ...,
        image {
            ...,
            asset->
        }
    },
    "contact": *[_type == "contact"][0]
}`;
