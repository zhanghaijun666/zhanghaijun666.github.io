import TButton from './button/src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    TButton: typeof TButton
  }
}
