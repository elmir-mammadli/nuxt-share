import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  baseURL?: string
}

// Extend NuxtConfig to include the socialShare option
declare module '@nuxt/schema' {
  interface NuxtConfig {
    share?: ModuleOptions
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@elmir-mammadli/nuxt-share-module',  // The module name
    configKey: 'share',  // The key for configuration in nuxt.config.ts
  },
  // Default configuration options for the Nuxt module
  defaults: {
    baseURL: '',  // Default base URL for sharing
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Merge user-provided options with defaults
    const mergedOptions = defu(nuxt.options.runtimeConfig.public.share as ModuleOptions, options)

    // Set the public runtime config (available globally in your app)
    nuxt.options.runtimeConfig.public.share = {
      ...mergedOptions,
      baseURL: mergedOptions.baseURL || ''
    }

    // Register the Share component globally
    addComponent({
      name: 'Share',  // Name of the component to be used in templates
      filePath: resolver.resolve('./components/Share.vue'),  // Path to your component
    })
  }
})
