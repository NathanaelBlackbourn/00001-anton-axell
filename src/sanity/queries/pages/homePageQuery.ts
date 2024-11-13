import { groq } from 'next-sanity';

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]`;
