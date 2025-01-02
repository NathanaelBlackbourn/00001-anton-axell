import { type SchemaTypeDefinition, ObjectDefinition } from 'sanity';
import homePage from './pages/homePage';
import about from './nav/about';
import contact from './nav/contact';
import slaskBlock from './objects/slaskBlock';
import slaskImg from './objects/slaskImg';

export const schemaTypes: (SchemaTypeDefinition | ObjectDefinition)[] = [
  homePage,
  about,
  contact,
  slaskImg,
  slaskBlock,
];
