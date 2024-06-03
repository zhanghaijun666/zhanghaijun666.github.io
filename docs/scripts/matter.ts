import fs, { Stats } from 'node:fs';
import { relative, basename, sep } from 'path';
import os from 'os';
import matter from 'gray-matter';
import yaml from 'yaml';
import { getFileBirthTime, getBirthtime, matchGroup, getTextSummary, getFirstImagURLFromMD } from './utils';
import glob from 'fast-glob';
import { cwd } from 'process';
import { formatDate } from './utilsDate';

type MatterItem = {
  order: number; // 排序
  title: string; // 标题
  date: string; // 创建时间
  author?: string; // 作者
  tags?: string[]; // 标签
  categories?: string[]; // 分类
  permalink?: string; // 永久链接 :year/:month/:day/:title/
  keywords?: string; // 关键字 用于SEO
  layout?: string; // 页面布局
};
type PageItem = MatterItem & {
  description: string; // 文章摘要
  cover: string; // 文章封面
};

// 获取文章的标签
const getTags = (dirs: string[], ...items: string[]): string[] => {
  const dirTags: string[] = [];
  if (dirs.length > 0) {
    const group: { [key: string]: string } = matchGroup(dirs[dirs.length - 1]);
    dirTags.push(group?.name ?? dirs[dirs.length - 1]);
  }
  return [...new Set([...items, ...dirTags].flat())].filter((v) => !!v);
};
// 更新文件内容
const updateFileMatter = (file: string, matterItem: MatterItem, content: string) => {
  fs.writeFileSync(
    file,
    [
      '---',
      yaml
        .stringify({
          ...Object.entries(matterItem)
            .filter(([key, value]) => !!value)
            .reduce((item, [key, value]) => ({ ...item, [key]: value }), {}),
        })
        .replace(/\n\s{2}/g, '\n')
        .replace(/"/g, ''),
      '---',
      content,
    ].join(os.EOL)
  );
};

const files = glob.sync([`components/**/*.md`, `blogs/**/*.md`], { ignore: ['node_modules/**'] });
const pageData: PageItem[] = [];
for (let file of files) {
  const fileContent = fs.readFileSync(file, 'utf-8');
  const dirs: string[] = relative('', file).split(sep).slice(0, -1);
  const { data: frontmatter = {}, excerpt, content } = matter(fileContent, { excerpt: true });
  const group: { [key: string]: string } = matchGroup(basename(file));
  const { tag, tags, categories } = frontmatter;
  const matterItem: MatterItem = {
    order: frontmatter.order ?? group.order ?? 0,
    title: frontmatter.title ?? group.name ?? basename(file),
    date: formatDate(frontmatter.date ?? (getFileBirthTime(file) || getBirthtime(file))),
    author: frontmatter.author,
    tags: getTags(dirs, tag, tags, categories),
    categories: frontmatter.categories || undefined,
    permalink: frontmatter.permalink || undefined,
    keywords: frontmatter.keywords || undefined,
    layout: frontmatter.layout || undefined,
  };
  // 刷新文件的Matter，去掉属性是null或者undefined
  updateFileMatter(file, matterItem, content);
  if (!matterItem.layout) {
    const page: PageItem = {
      ...matterItem,
      description: frontmatter.description || getTextSummary(content, 100) || excerpt,
      cover: frontmatter.cover ?? getFirstImagURLFromMD(fileContent, ''),
    };
    pageData.push(page);
  }
}
// 将页面数据存储到文件中
const rootDir: string = cwd();
fs.mkdirSync(`${rootDir}/.vitepress/config/data/`, { recursive: true });
fs.writeFileSync(`${rootDir}/.vitepress/config/data/page.json`, JSON.stringify(pageData, null, 2));
