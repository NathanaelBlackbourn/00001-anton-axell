import { defineQuery } from 'next-sanity';

export const IMAGE_FRAGMENT = defineQuery(`{
  crop,
  hotspot,
  "_ref": asset._ref,
  "altText": asset->altText,
  "metadata": asset->metadata
}`);
