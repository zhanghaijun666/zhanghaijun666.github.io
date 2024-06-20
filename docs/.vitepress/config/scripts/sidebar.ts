import fs from 'node:fs';
import { relative, basename, sep } from 'path';
import { matchGroup } from './utils';
import { DefaultTheme } from 'vitepress';
import glob from 'fast-glob';
import { SidebarItem, PAGE_IGNORE, PAGE_SOURCE } from './typings';
import path, { dirname } from 'node:path';
import { docRoot } from '../global';

const files = glob.sync(PAGE_SOURCE, { ignore: PAGE_IGNORE });
const fileList: SidebarItem[] = [];
for (let file of files) {
  const name = basename(file);
  const group: { [key: string]: string } = matchGroup(name);
  if (!group['order'] && !group['name']) {
    console.error(`错误的文件名格式: ${file}`);
  }
  const dirs = relative('', file).split(sep);
  fileList.push({
    order: Number(group['order'] ?? 0),
    text: group['name'] ?? name,
    link: dirs.join('/'),
    path: dirs.slice(0, -2).join('/'),
    baseItem: dirs.slice(-2, -1).join('/'),
  });
}
//).filter((item) => item.path && item.baseItem);
console.log('文件数量：' + fileList.length);
// 构建侧边栏数据结构
const level1s = [...new Set(fileList.map((item) => item.path).filter((dir) => dir))];
const sidebar: DefaultTheme.SidebarMulti = {};
for (let level1 of level1s) {
  sidebar['/' + level1] = [...new Set(fileList.filter((item) => item.path == level1).map((item) => item.baseItem))]
    .map((level2): { items: DefaultTheme.SidebarItem[]; text: string; order: number } => {
      const items = fileList.filter((item) => item.path == level1 && item.baseItem == level2).sort((a, b) => a.order - b.order);
      const group = matchGroup(level2);
      return { order: Number(group['order'] || 0), text: group['name'] || level2, items: items.map((item) => ({ text: item.text, link: item.link })) };
    })
    .sort((a, b) => a.order - b.order);
}
console.log('----- sidebar data generate ------');
const sidebarFile = path.relative(docRoot, '.vitepress/config/data/sidebar.json');
fs.mkdirSync(dirname(sidebarFile), { recursive: true });
fs.writeFileSync(sidebarFile, JSON.stringify(sidebar, null, 2));
console.log('------ sidebar data successfully, number: ' + fileList.length + ', file: ' + sidebarFile);
