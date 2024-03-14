import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'deliver-app',

  projectId: 'gtkhec8w',
  dataset: 'delivery',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
