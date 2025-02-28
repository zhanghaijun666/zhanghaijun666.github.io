import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
    }
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
