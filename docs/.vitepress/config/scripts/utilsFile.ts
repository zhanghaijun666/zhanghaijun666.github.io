import { readdirSync, statSync } from 'fs';
import { basename, join, relative, sep } from 'path';
import { FileItem, REGEX_PAGE_NAME } from './typings';
import { matchGroup } from './utils';

/**
 * 连接多个路径片段，确保路径之间只有一个路径分隔符
 * @param paths - 待连接的路径片段
 * @returns 连接后的路径字符串
 */
export const joinPath = (...paths: string[]): string => join(...paths).replace(/\\/g, '/');

/**
 * 读取目录下的文件夹
 * @param filePath 目录位置
 * @returns 目录下的文件夹
 */
export const listDirectory = (filePath: string) => {
  return readdirSync(filePath)
    .filter((file) => {
      const stat = statSync(joinPath(filePath, file));
      return stat.isDirectory() && REGEX_PAGE_NAME.test(file);
    })
    .map((item) => joinPath(filePath, item));
};

/**
 * 获取文件信息
 * @param fileLink - 文件路径
 * @returns 文件信息
 */
export const getFileItem = (fileLink: string): FileItem => {
  const name = basename(fileLink);
  const group: { [key: string]: string } = matchGroup(name);
  if (!group['order'] && !group['name']) {
    console.error(`错误的文件名格式: ${fileLink}`);
  }
  return {
    order: Number(group['order'] ?? 0),
    text: group['name'] ?? name,
    link: fileLink,
    dirs: relative('', fileLink).split(sep).slice(0, -1),
  };
};

// export const getFileItemByLevel = (files: FileItem[], level: number) => {};
