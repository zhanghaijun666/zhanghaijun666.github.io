import { Options } from 'markdown-it';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { Token } from 'markdown-it/index.js';

export const renderContainer = (tokens: Token[], idx: number, options: Options, env: any) => {
  const token = tokens[idx];
  if (token.nesting === 1) {
    const content = tokens[idx + 2].content.trim();
    // 组件的相对路径
    const componentRelativePath = content.startsWith('./') || content.startsWith('../') || content.startsWith('/') ? content : `./${content}`;
    // 组件绝对路径
    const componentPath = resolve(dirname(env.path), componentRelativePath || '.');
    // 后缀名
    const suffixName = componentPath.substring(componentPath.lastIndexOf('.') + 1);
    // 组件源码
    const componentSourceCode = readFileSync(componentPath, { encoding: 'utf-8' });
    // 源码代码块（经过处理）
    const compileHighlightCode = options.highlight!(componentSourceCode, suffixName, '');

    const code = encodeURI(componentSourceCode);
    const showCode = encodeURIComponent(compileHighlightCode);

    const info = tokens[idx].info.trim();
    const description = '123456';
    return `<demo-preview title='${info}' description='${description}' code="${code}" showCode="${showCode}" suffixName="${suffixName}" absolutePath="${componentPath}" relativePath="${componentRelativePath}">\n`;
  } else {
    return `</demo-preview>\n`;
  }
};
