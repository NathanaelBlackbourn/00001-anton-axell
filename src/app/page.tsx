import { client } from '@/sanity/lib/client';
import HomePageTemplate from '@/templates/HomePageTemplate';
import { groq } from 'next-sanity';

export default async function Home() {
  const data = await client.fetch(groq`*[_type == "homePage"][0]`);

  return <HomePageTemplate {...data} />;
}
