import fs from 'node:fs';
import path from 'path';
import { spawn, spawnSync } from 'node:child_process';

// 文件或者文件夹命名规则: [排序号].[文件名称].md
const FILE_NAME_REGEX = new RegExp(/^(?<order>\d+)\.(?<name>[^.]*)(\.md)?$/);
const imageRegex = /!\[.*?\]\((.*?)\s*(".*?")?\)/;

export const fileList = <T>(roots: string[], convert: (filePath: string, root: string) => T | undefined, level: number = 1): T[] => {
  const files: T[] = [];
  for (let i = 0; i < roots.length; i++) {
    let root = roots[i];
    const names = fs.readdirSync(root);
    for (const name of names) {
      // 检查当前目录是否需要忽略
      if (['library', 'source'].includes(name)) {
        continue;
      }
      const filePath = path.join(root, name);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        files.push(...fileList([filePath], convert, level + 1));
        continue;
      } else {
        const result = convert(filePath, root);
        result && files.push(result);
      }
    }
  }
  return files;
};

// 安装正则规则，获取匹配的项
export const matchGroup = (str: string, reg: RegExp = FILE_NAME_REGEX): { [key: string]: string } => {
  const group: { [key: string]: string } | undefined = ((str || '').match(reg) || {}).groups;
  return group || {};
};

// 通过文档内容，取一级标题
export const getDefaultTitle = (content: string) => content.match(/^(#+)\s+(.+)/m)?.[2] || '';

// 通过git获取文件的提交时间
export const getFileBirthTime = (file: string): Date | undefined => {
  try {
    // 参考 vitepress 中的 getGitTimestamp 实现
    const infoStr = spawnSync('git', ['log', '-1', '--pretty="%ci"', file]).stdout?.toString().replace(/["']/g, '').trim();
    if (infoStr) {
      return new Date(infoStr);
      // timeZone +8
      // return new Date(`${new Date(infoStr).toUTCString()}+${new Date().getTimezoneOffset() / -60}`);
    }
  } catch (error) {
    return undefined;
  }
};

// 获取文件创建时间
export const getBirthtime = (file: string): Date => {
  const stat = fs.statSync(file);
  return stat.birthtime.getFullYear() != 1970 ? stat.birthtime : stat.atime;
};
// 通过文章内容提取摘要
export function getTextSummary(text: string, count = 100) {
  return (
    text
      // 首个标题
      ?.replace(/^#+\s+.*/, '')
      // 除去标题
      ?.replace(/#/g, '')
      // 除去图片
      ?.replace(/!\[.*?\]\(.*?\)/g, '')
      // 除去链接
      ?.replace(/\[(.*?)\]\(.*?\)/g, '$1')
      // 除去加粗
      ?.replace(/\*\*(.*?)\*\*/g, '$1')
      ?.split('\n')
      ?.filter((v) => !!v)
      ?.join('\n')
      ?.replace(/>(.*)/, '')
      ?.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      ?.trim()
      ?.slice(0, count)
  );
}

// 是否是Base64格式的图片
function isBase64ImageURL(url: string) {
  // Base64 图片链接的格式为 data:image/[image format];base64,[Base64 编码的数据]
  const regex = /^data:image\/[a-z]+;base64,/;
  return regex.test(url);
}
export function joinPath(base: string, path: string): string {
  return `${base}/${path}`.replace(/\/+/g, '/');
}
/**
 * 从文档内容中提取封面
 * @param content 文档内容
 */
export function getFirstImagURLFromMD(content: string, route: string) {
  const url = content.match(imageRegex)?.[1];
  const isHTTPSource = url && url.startsWith('http');
  if (!url) {
    return '';
  }
  if (isHTTPSource || isBase64ImageURL(url)) {
    return url;
  }
  const paths = joinPath('/', route).split('/');
  paths.splice(paths.length - 1, 1);
  const relativePath = url.startsWith('/') ? url : path.join(paths.join('/') || '', url);
  return joinPath('/', relativePath);
}
