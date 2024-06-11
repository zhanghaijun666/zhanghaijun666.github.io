import path from 'path';
import fs from 'fs';
import MarkdownIt, { Renderer, Token } from 'markdown-it';
// @ts-ignore
import mdContainer from 'markdown-it-container';

import { highlight } from './highlight';
import { docRoot } from '../global';
const localMd = MarkdownIt();

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string;
}

export default (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate: (params) => !!params.trim().match(/^demo\s*(.*)$/),
    render: (tokens, idx, options, { path: filePath }) => {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      /* means the tag is opening */
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        // demo文件名称
        const sourceFile = sourceFileToken.children?.[0].content ?? '';
        if (sourceFileToken.type === 'inline') {
          const vuePaths = [
            path.resolve(path.dirname(filePath), `${sourceFile}.vue`),
            path.resolve(docRoot, 'components', `${sourceFile}.vue`),
            path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
          ];
          for (let vuePath of vuePaths) {
            if (fs.existsSync(vuePath)) {
              source = fs.readFileSync(vuePath, 'utf-8');
            }
          }
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<v-code
          source="${encodeURIComponent(highlight(source, 'vue'))}"
          path="${sourceFile}"
          raw-source="${encodeURIComponent(source)}"
          description="${encodeURIComponent(localMd.render(description))}"
        >`;
      } else {
        return '</v-code>';
      }
    },
  } as ContainerOpts);
};
