import presetWind from '@unocss/preset-wind3'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.git', '.vscode', 'public', 'build', 'config']
    }
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    // presetWebFonts({ fonts: { sans: 'DM Sans', serif: 'DM Serif Display', mono: 'DM Mono' } }),
    presetWebFonts()
  ],
  transformers: [
    /** 实现在 style 中写原子化 css https://unocss.nodejs.cn/transformers/directives */
    transformerDirectives(),
    /** 实现在 style 中写原子化 css https://unocss.nodejs.cn/transformers/variant-group */
    transformerVariantGroup()
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      primary: '#6366f1',
      primary_dark: '#6366f1',
      secondary: '#4f46e5'
    },
    borderRadius: {
      'none': '0px',
      'sm': '2px',
      DEFAULT: '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '24px',
      'full': '9999px',
      'button': '4px'
    }
  },
  /** 自定义规则 https://unocss.nodejs.cn/config/rules */
  rules: [
    [/wh-(.+)$/, ([, d]) => ({ width: `${ d }`, height: `${ d }` })],
    [/mtb-(.+)$/, ([, d]) => ({ margin: `${ d } 0` })],
    [/mlr-(.+)$/, ([, d]) => ({ margin: `0 ${ d }` })],
    [/ptb-(.+)$/, ([, d]) => ({ padding: `${ d } 0` })],
    [/plr-(.+)$/, ([, d]) => ({ padding: `0 ${ d }` })],
    ['bg-repeat-none', { 'background-repeat': 'no-repeat' }]
  ],
  /**
   * 快捷键命名标准
   * @default '布局样式 - 水平样式 - 垂直样式'
   * https://unocss.nodejs.cn/config/shortcuts
   * unocss样式查询 https://unocss.dev/interactive/
   * 边框阴影示例 https://getcssscan.com/css-box-shadow-examples
   */
  shortcuts: {
    'wh-full': 'w-full h-full', // 宽高百分比铺满
    'wh-screen': 'w-screen h-screen', // 宽高视口铺满
    'flex-x-center': 'flex justify-center items-center',
    'flex-y-center': 'flex flex-col justify-center items-center',
    'flex-x-start': 'flex justify-start items-center',
    'flex-x-between': 'flex justify-between items-center',
    'flex-x-end': 'flex justify-end items-center'
  }
})
