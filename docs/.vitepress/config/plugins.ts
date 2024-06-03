import MarkdownIt from 'markdown-it';
import timeline from 'vitepress-markdown-timeline';
import codeDemo from './plugins/code';

export default (md: MarkdownIt) => {
  timeline(md, {});
  codeDemo(md);
};
