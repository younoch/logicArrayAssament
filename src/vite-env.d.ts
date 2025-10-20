/// <reference types="vite/client" />

// Vue 3 TypeScript support
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Environment variables
declare interface ImportMetaEnv {
  readonly VITE_APP_BASE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TARGET: string
  // Add other environment variables here
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Vue 3 global type augmentation
declare module 'vue' {
  export * from '@vue/runtime-dom'
  export * from '@vue/runtime-core'
  
  // Add any additional Vue types you need
  export interface ComponentCustomProperties {
    // Add any global properties here
  }
}
