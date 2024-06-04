import { readFileSync } from 'fs';
import { dateFormat } from './utils';
import GrayMatter from 'gray-matter';

const fileContent = readFileSync('blogs/20.结构与算法/10.数据结构/10.线性表-栈.md', 'utf-8');
const { data: frontmatter = {} } = GrayMatter(fileContent, { excerpt: true });

const getDate = (date: Date | undefined) => {
  if (!date) return undefined;
  return new Date(Number(date.getTime()) + 8 * 3600 * 1000 * 2) ?? undefined;
};
console.log(dateFormat(getDate(frontmatter.date) || new Date()));
