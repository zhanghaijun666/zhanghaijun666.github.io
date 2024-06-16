// https://mdit-plugins.github.io/zh/
// https://github.com/mdit-plugins/mdit-plugins
import MarkdownIt from 'markdown-it';
import timeline from 'vitepress-markdown-timeline';
import { componentPreview, containerPreview } from './plugins/index';
import { ins } from '@mdit/plugin-ins';
import { mark } from '@mdit/plugin-mark';

export default (md: MarkdownIt) => {
  // 下划线插件。++十分++ 强大。
  md.use(ins);
  // 高亮插件。==十分强大==
  md.use(mark);
  // 时间轴插件
  timeline(md, {});
  componentPreview(md);
  containerPreview(md);
};
