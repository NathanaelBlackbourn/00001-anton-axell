import { SchemaTypeDefinition } from 'sanity';

const contact: SchemaTypeDefinition = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Contact',
    }),
  },
};

export default contact;
