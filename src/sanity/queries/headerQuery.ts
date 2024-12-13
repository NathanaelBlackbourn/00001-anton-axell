import { groq } from 'next-sanity';

export const HEADER_QUERY = groq`{
    "about": *[_type == "about"][0],
}`;
