import path from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
// @ts-ignore
import type Token from 'markdown-it/lib/token';

import { highlight } from './highlight';
import { docRoot } from '../global';
const localMd = MarkdownIt();

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(tokens: Token[], index: number): string;
}

export default (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      /* means the tag is opening */
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        // demo文件名称
        const sourceFile = sourceFileToken.children?.[0].content ?? '';
        if (sourceFileToken.type === 'inline') {
          // 读取示列代码文件
          source = fs.readFileSync(path.resolve(docRoot, 'examples', `${sourceFile}.vue`), 'utf-8');
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        return `<v-code :demos="demos"
        source="${encodeURIComponent(highlight(source, 'vue'))}"
        path="${sourceFile}" raw-source="${encodeURIComponent(source)}"
        description="${encodeURIComponent(localMd.render(description))}">`;
      } else {
        return '</v-code>';
      }
    },
  } as ContainerOpts);
};
