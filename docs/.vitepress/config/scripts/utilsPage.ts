import { spawnSync } from 'child_process';
import { statSync } from 'fs';
import { REGEX_IMAGE } from './typings';
import { isBase64ImageURL, matchGroup } from './utils';
import path from 'path';
import { joinPath } from './utilsFile';

// 通过文档内容，取一级标题
export const getDefaultTitle = (content: string) => content.match(/^(#+)\s+(.+)/m)?.[2] || '';

// 通过git获取文件的提交时间
export const getFileBirthTime = (file: string): Date | undefined => {
  try {
    // 参考 vitepress 中的 getGitTimestamp 实现
    const infoStr = spawnSync('git', ['log', '-1', '--pretty="%ci"', file]).stdout?.toString().replace(/["']/g, '').trim();
    if (infoStr) {
      return new Date(infoStr);
    }
  } catch (error) {
    return undefined;
  }
};

// 获取文件创建时间
export const getBirthtime = (file: string): Date => {
  const stat = statSync(file);
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

/**
 * 从文档内容中提取封面
 * @param content 文档内容
 */
export function getFirstImagURLFromMD(content: string, route: string) {
  const url = content.match(REGEX_IMAGE)?.[1];
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
// 获取文章的标签
export const getTags = (dirs: string[], ...items: string[]): string[] => {
  const dirTags: string[] = [];
  if (dirs.length > 0) {
    const group: { [key: string]: string } = matchGroup(dirs[dirs.length - 1]);
    dirTags.push(group?.['name'] ?? dirs[dirs.length - 1]);
  }
  return [...new Set([...items, ...dirTags].flat())].filter((v) => !!v);
};
