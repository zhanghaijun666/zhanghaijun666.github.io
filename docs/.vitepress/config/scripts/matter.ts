import fs from 'node:fs';
import { EOL } from 'node:os';
import { relative, basename, sep, dirname } from 'node:path';
import matter from 'gray-matter';
import yaml from 'yaml';
import glob from 'fast-glob';
import { PAGE_IGNORE, MatterItem, PAGE_SOURCE, PageItem } from './typings';
import { dateFormat, matchGroup } from './utils';
import { getBirthtime, getFileBirthTime, getFirstImagURLFromMD, getTags, getTextSummary } from './utilsPage';
import { docRoot } from '../global';

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
    ].join(EOL)
  );
};

const files = glob.sync(PAGE_SOURCE, { ignore: PAGE_IGNORE });
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
    date: dateFormat(frontmatter.date ?? (getFileBirthTime(file) || getBirthtime(file))),
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
console.log('----- matter data generate ------');
const pageFile = relative(docRoot, '.vitepress/config/data/page.json');
fs.mkdirSync(dirname(pageFile), { recursive: true });
fs.writeFileSync(pageFile, JSON.stringify(pageData, null, 2));
console.log('------ matter data successfully, number: ' + pageData.length + ', file: ' + pageFile);
