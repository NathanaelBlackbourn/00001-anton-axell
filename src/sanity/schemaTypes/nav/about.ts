import { SchemaTypeDefinition } from 'sanity';

const about: SchemaTypeDefinition = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare: () => ({
      title: 'About',
    }),
  },
};

export default about;
