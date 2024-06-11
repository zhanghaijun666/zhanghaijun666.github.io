import MarkdownIt from 'markdown-it';
import timeline from 'vitepress-markdown-timeline';
import { componentPreview, containerPreview } from './plugins/index';

export default (md: MarkdownIt) => {
  timeline(md, {});
  componentPreview(md);
  containerPreview(md);
};
