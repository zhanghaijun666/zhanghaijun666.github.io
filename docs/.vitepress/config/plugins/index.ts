import MarkdownIt, { Renderer, Token } from 'markdown-it';
import { transformPreview } from './previewComponent';
import { containerDirectiveMount, parseContainer, parseContainerTag } from './previewContainer';

export const isCheckPreviewCom1 = /^<preview (.*)><\/preview>$/;
export const isCheckPreviewCom2 = /^<preview (.*) \/>$/;
export const isCheckContainerPreview = /^demo-preview=(.+)$/;

export const componentPreview = (md: MarkdownIt) => {
  const defaultHtmlInlineRender = md.renderer.rules.html_inline!;
  md.renderer.rules.html_inline = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
    const token = tokens[idx];
    if (isCheckPreviewCom1.test(token.content) || isCheckPreviewCom2.test(token.content)) {
      return transformPreview(md, token, env);
    }
    return defaultHtmlInlineRender(tokens, idx, options, env, self);
  };
};

export const containerPreview = (md: MarkdownIt) => {
  containerDirectiveMount(md);
  parseContainerTag(md);
  parseContainer(md);
};
