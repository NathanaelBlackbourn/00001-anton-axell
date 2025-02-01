import { defineQuery } from 'next-sanity';
import { IMAGE_FRAGMENT } from './fragments/imageFragment';

export const HEADER_QUERY = defineQuery(`{
    "about": *[_type == "about"][0]{
        ...,
        image ${IMAGE_FRAGMENT}
    },
    "contact": *[_type == "contact"][0]
}`);
