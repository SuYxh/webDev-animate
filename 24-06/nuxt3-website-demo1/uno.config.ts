// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  presetIcons: {
    extraProperties: {
      'display': 'inline-block',
      'vertical-align': 'middle'
    }
  },
  transformers: [
    transformerDirectives()
  ]
})
