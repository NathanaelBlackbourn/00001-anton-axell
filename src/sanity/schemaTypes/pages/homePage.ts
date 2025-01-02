import { SchemaTypeDefinition } from 'sanity';

const homePage: SchemaTypeDefinition = {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      title: 'Slask',
      name: 'slask',
      type: 'array',
      of: [
        {
          type: 'slaskBlock',
        },
      ],
    },
  ],
};

export default homePage;
