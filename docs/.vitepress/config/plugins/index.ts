import MarkdownIt, { Renderer, Token } from 'markdown-it';
import { transformPreview } from './previewComponent';
import { renderContainer } from './previewContainer';
// @ts-ignore
import markdownItContainer from 'markdown-it-container';

export const isCheckPreviewCom1 = /^<preview (.*)><\/preview>$/;
export const isCheckPreviewCom2 = /^<preview (.*) \/>$/;
export const isCheckContainerPreview = /^demo-preview=(.+)$/;

export const componentPreview = (md: MarkdownIt) => {
  const defaultHtmlInlineRender = md.renderer.rules.html_inline!;
  md.renderer.rules.html_inline = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
    const token = tokens[idx];
    const content = token.content;
    if (isCheckPreviewCom1.test(content) || isCheckPreviewCom2.test(content)) {
      return transformPreview(md, token, env);
    }
    return defaultHtmlInlineRender(tokens, idx, options, env, self);
  };
};

export const containerPreview = (md: MarkdownIt) => {
  md.use(markdownItContainer, 'preview', {
    marker: ':',
    variable: (params: string) => /^preview.*$/.test(params.trim()),
    render: renderContainer,
  });
};
