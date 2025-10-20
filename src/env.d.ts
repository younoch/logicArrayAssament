/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

// Import Vue file types
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Import SVG files as Vue components
declare module '*.svg' {
  import type { DefineComponent } from 'vue'
  const content: DefineComponent<{}, {}, any>
  export default content
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
