import {
  defineLocations,
  PresentationPluginOptions,
} from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    homePage: defineLocations({
      select: {},
      resolve: () => ({
        locations: [
          {
            title: 'Home page',
            href: '/',
          },
        ],
      }),
    }),
  },
};
