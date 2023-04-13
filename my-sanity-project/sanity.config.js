import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  // projectId: 'n09nml6o',
  projectId: 'easyfert',
  dataset: 'production',
  basePath: 'https://easyfert.sanity.studio/',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
