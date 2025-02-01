import { defineQuery } from 'next-sanity';

export const HEADER_QUERY = defineQuery(`{
    "about": *[_type == "about"][0]{
        ...,
        image {
            ...,
            asset->
        }
    },
    "contact": *[_type == "contact"][0]
}`);
