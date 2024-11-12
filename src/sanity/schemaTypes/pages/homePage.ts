import { SchemaTypeDefinition } from 'sanity';

const homePage: SchemaTypeDefinition = {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'introText',
      title: 'Intro text',
      type: 'string',
      validation: (Rule) => Rule.required().max(300),
    },
  ],
};

export default homePage;
