/*
 * UnoCSS 配置
 * @see https://unocss.net
 * @see 配置文件 https://unocss.net/guide/config-file
 * @see 样式查询 https://unocss-cn.pages.dev/interactive/
 * @see 边框阴影 https://getcssscan.com/css-box-shadow-examples
 */
import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({ provider: 'none' }),
    // 属性化模式  https://unocss.dev/presets/attributify#attributify-preset
    presetAttributify({ /* preset options */ }),
    // 集成图标 https://unocss.dev/presets/icons
    presetIcons({
      collections: { icon: FileSystemIconLoader('./docs/public/assets/icons') },
      scale: 2,
      unit: 'em',
      prefix: 'i-',
      extraProperties: { display: 'inline-block' },
      warn: true
    })
  ],
  transformers: [
    // 前缀组，解决繁琐的多次写前缀的情况 https://unocss.dev/transformers/variant-group#variant-group-transformer
    transformerVariantGroup(),
    // 快捷方式和指令 https://unocss.dev/transformers/directives#directives-transformer
    transformerDirectives(),
    // 构建合并多个原子类到一个类 https://unocss.dev/transformers/compile-class#compile-class-transformer
    transformerCompileClass()
  ],
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.git', '.vscode', 'public', 'build', 'config']
    }
  },
  /**
   * 主题配置
   */
  theme: {
    colors: {
      primary: '#5468ff'
    },
    darkMode: 'class',
    boxShadow: {
      button: '0 2px #0000000b',
      card: '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
      'card-hover': '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
    },
  },
  /**
   * 快捷键命名规则
   */
  shortcuts: {
    'wh-full': 'w-full h-full', // 宽高百分比铺满
    'wh-screen': 'w-screen h-screen', // 宽高视口铺满
    'flex-x-center': 'flex justify-center items-center',
    'flex-y-center': 'flex flex-col justify-center items-center',
    'flex-x-start': 'flex justify-start items-center',
    'flex-x-between': 'flex justify-between items-center',
    'flex-x-end': 'flex justify-end items-center'
  },
  /**
   * 自定义原子类规则
   */
  rules: [
    [/^wh-(\d+)(\w*)$/, ([, value, unit]) => ({ width: `${ value }${ unit || 'px' }`, height: `${ value }${ unit || 'px' }` })]
  ]
})
