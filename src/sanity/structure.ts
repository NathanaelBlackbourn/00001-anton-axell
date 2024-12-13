import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.divider(),
      S.listItem()
        .title('About')
        .id('about')
        .child(S.document().schemaType('about').documentId('about')),
    ]);
