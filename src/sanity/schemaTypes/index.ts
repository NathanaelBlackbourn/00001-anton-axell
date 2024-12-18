import { type SchemaTypeDefinition } from 'sanity';
import homePage from './pages/homePage';
import about from './nav/about';
import contact from './nav/contact';

export const schemaTypes: SchemaTypeDefinition[] = [homePage, about, contact];
