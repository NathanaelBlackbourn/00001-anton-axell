'use client';

import { apiVersion, dataset, projectId } from '@/sanity/env';
import { resolve } from '@/sanity/presentation/resolve';
import { schemaTypes } from '@/sanity/schemaTypes';
import { structure } from '@/sanity/structure';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = new Set(['home', 'about', 'contact']);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
});
