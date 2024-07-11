export type FileItem = {
  order: number;
  title: string;
  link: string;
  date: string; // 创建时间
  author?: string; // 作者
  tags?: string[]; // 标签
  categories?: string[]; // 分类
  keywords?: string; // 关键字 用于SEO
};
