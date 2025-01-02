import { Rule, ObjectDefinition } from 'sanity';

const slaskBlock: ObjectDefinition = {
  title: 'Slask Block',
  name: 'slaskBlock',
  type: 'object',
  fields: [
    {
      title: 'Head',
      name: 'head',
      type: 'array',
      of: [
        {
          type: 'slaskImg',
        },
      ],
      validation: (Rule: Rule) => Rule.min(1).max(3).required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'slaskImg',
        },
      ],
    },
  ],
  preview: {
    select: {
      head: 'head',
    },
    // TODO: Fix this monstrosity
    prepare({ head }) {
      return {
        title: 'Slask',
        // Not necessarily always image
        media: head[0]?.image ? head[0].image : null,
      };
    },
  },
};

export default slaskBlock;
