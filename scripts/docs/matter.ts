import fs from 'node:fs';
import matter from 'gray-matter';

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
