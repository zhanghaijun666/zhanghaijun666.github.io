import { resolve } from 'path';

// 项目目录
export const projRoot = resolve(__dirname, '..', '..', '..');

// 文档库目录
export const docRoot = resolve(projRoot, 'docs');
// url前缀
export const baseUrl = '/docs';
