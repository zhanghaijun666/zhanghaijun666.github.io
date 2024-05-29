import fs from 'node:fs';
import { readFiles } from './fileUtil';
import { FileItem } from './type';
import { type DefaultTheme } from 'vitepress';

const ignoreDirectories: string[] = ['.vitepress', 'public', 'index.md', 'demo.md', 'template.md'];

const getSidebar = (fileItem: FileItem, fileList: FileItem[]): DefaultTheme.SidebarItem[] => {
  const children = fileList.filter((item) => item.parentOrder === fileItem.order && item.level === fileItem.level + 1);
  if (children.length > 0) {
    return children.map((item) => {
      return {
        text: item.name,
        link: item.file ? item.path : undefined,
        collapsed: item.file ? undefined : false,
        items: item.file ? undefined : getSidebar(item, fileList),
      };
    });
  }
  return [];
};

export const autoSidebar = async (): Promise<void> => {
  const fileList: FileItem[] = await readFiles('.', ignoreDirectories);
  const sidebar: DefaultTheme.SidebarMulti = {};
  const files: FileItem[] = fileList.filter((item) => item.level === 1).sort((a, b) => a.order - b.order);
  for (let i = 0; i < files.length; i++) {
    const fileItem: FileItem = files[i];
    const items: DefaultTheme.SidebarItem[] = getSidebar(fileItem, fileList);
    if (items.length > 0 && !sidebar[fileItem.fullName]) {
      sidebar['/' + fileItem.fullName] = getSidebar(fileItem, fileList);
    }
  }
  fs.mkdirSync('./.vitepress/config', { recursive: true });
  fs.writeFileSync('./.vitepress/config/sidebar.json', JSON.stringify(sidebar, null, 2));
};
