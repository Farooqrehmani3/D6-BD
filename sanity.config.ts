'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'

import { apiVersion, dataset, projectId } from '@/sanity/env' 
import { schema } from '@/sanity/schemaTypes' 

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
