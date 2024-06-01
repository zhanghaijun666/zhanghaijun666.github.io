import fs, { Stats } from 'node:fs';
import { relative, basename, sep } from 'path';
import os from 'os';
import matter from 'gray-matter';
import yaml from 'yaml';
import { fileList } from './utils';

export interface MatterItem {
  title: string; // 标题
  date: string; // 创建时间
  author?: string; // 作者
  tags?: string[]; // 标签
  categories?: string[]; // 分类
  permalink?: string; // 永久链接 :year/:month/:day/:title/
  keywords?: string; // 关键字 用于SEO
}

export const getArticleMeta = (filepath: string) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter } = matter(fileContent, { excerpt: true });
  return frontmatter;
};

// 获取文件创建时间
function getBirthtime(stat: Stats) {
  return stat.birthtime.getFullYear() != 1970 ? stat.birthtime : stat.atime;
}

fileList(['blogs', 'components'], (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter = {}, excerpt, content } = matter(fileContent, { excerpt: true });
  frontmatter.title = frontmatter.title ?? basename(filePath);
  // frontmatter.data = frontmatter.data ?? getBirthtime(fs.statSync(filePath));
  // frontmatter.permalink
  const newData =
    yaml
      .stringify(frontmatter)
      .replace(/\n\s{2}/g, '\n')
      .replace(/"/g, '') +
    '---' +
    os.EOL +
    content;
  fs.writeFileSync(filePath, newData);
  return frontmatter;
});
