import { SchemaTypeDefinition } from 'sanity';

const homePage: SchemaTypeDefinition = {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
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
  preview: {
    prepare: () => ({
      title: 'Home page',
    }),
  },
};

export default homePage;
