import fs from 'node:fs';
import { relative, basename, sep } from 'path';
import { fileList, matchGroup } from './utils';
import { DefaultTheme } from 'vitepress';

type FileItem = {
  order: number;
  text: string;
  link: string;
  path: string;
  baseItem: string;
};
const files: FileItem[] = fileList<FileItem>(['blogs', 'components'], (filePath) => {
  const name = basename(filePath);
  const group: { [key: string]: string } = matchGroup(name);
  if (!group.order && !group.name) {
    console.error(`错误的文件名格式: ${filePath}`);
    return undefined;
  }
  const dirs = relative('./', filePath).split(sep);
  return {
    order: Number(group.order),
    text: group.name,
    link: dirs.join('/'),
    path: dirs.slice(0, -2).join('/'),
    baseItem: dirs.slice(-2, -1).join('/'),
  };
}).filter((item) => item.path && item.baseItem);
console.log('文件数量：' + files.length);
// 构建侧边栏数据结构
const level1s = [...new Set(files.map((item) => item.path).filter((dir) => dir))];
const sidebar: DefaultTheme.SidebarMulti = {};
for (let level1 of level1s) {
  sidebar['/' + level1] = [...new Set(files.filter((item) => item.path == level1).map((item) => item.baseItem))]
    .map((level2): { items: DefaultTheme.SidebarItem[]; text: string; order: number } => {
      const items = files.filter((item) => item.path == level1 && item.baseItem == level2).sort((a, b) => a.order - b.order);
      const group = matchGroup(level2, FILE_NAME_REGEX);
      return { order: Number(group.order || 0), text: group.name || level2, items: items.map((item) => ({ text: item.text, link: item.link })) };
    })
    .sort((a, b) => a.order - b.order);
}
fs.mkdirSync('./.vitepress/config', { recursive: true });
fs.writeFileSync('./.vitepress/config/sidebar.json', JSON.stringify(sidebar, null, 2));
