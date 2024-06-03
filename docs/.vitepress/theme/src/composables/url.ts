import { withBase } from 'vitepress';

export const url = (file: string) => withBase(file.replace(/.(md|markdown)$/i, '.html'));
