import { client } from '@/sanity/lib/client';
import HomePageTemplate from '@/templates/homePageTemplate';
import { groq } from 'next-sanity';

export default async function Home() {
  const data = await client.fetch(groq`*[_type == "homePage"][0]`);

  return <HomePageTemplate {...data} />;
}
