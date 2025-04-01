/*
 * markdown相关的配置
 * @author: zhanghaijun
 * @since: 2025-04-01
 * @see 参考：https://github.com/imsyy/vitepress-theme-curve/blob/master/.vitepress/theme/utils/markdownConfig.mjs
 * ------------------------------------------------------------------------
 */
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { mermaidPlugin } from '../mermaid'
import MarkdownIt from 'markdown-it'

const markdownConfig = (md: MarkdownIt) => {
  md.use(groupIconMdPlugin)
  md.use(mermaidPlugin)
  // 组件插入h1标题下
  md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
    let htmlResult = slf.renderToken(tokens, idx, options)
    if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
    return htmlResult
  }
}

export default markdownConfig
