// This file is required for TypeScript to work with Vue single file components
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // Define any global properties here
  }
}

// Import and re-export Vue types to ensure they're available in all .vue files
import 'vue'

declare module 'vue' {
  export * from '@vue/runtime-dom'
  export * from '@vue/runtime-core'
  export * from 'vue'
}
