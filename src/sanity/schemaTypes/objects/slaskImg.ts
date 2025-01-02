import { Rule, ObjectDefinition } from 'sanity';

const slaskImg: ObjectDefinition = {
  title: 'Slask Image',
  name: 'slaskImg',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: 'Column start',
      name: 'colStart',
      type: 'number',
    },
    {
      title: 'Column end',
      name: 'colEnd',
      type: 'number',
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: 'Slask Image',
        media,
      };
    },
  },
};

export default slaskImg;
