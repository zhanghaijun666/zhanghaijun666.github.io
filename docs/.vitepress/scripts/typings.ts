export type FileItem = {
  order: number;
  text: string;
  link: string;
  dirs: string[];
};

export type SidebarItem = {
  order: number;
  text: string;
  link: string;
  path: string;
  baseItem: string;
};
export type MatterItem = {
  order: number; // 排序
  title: string; // 标题
  top: boolean;
  date: string; // 创建时间
  author?: string; // 作者
  tags?: string[]; // 标签
  categories?: string[]; // 分类
  permalink?: string; // 永久链接 :year/:month/:day/:title/
  keywords?: string; // 关键字 用于SEO
  layout?: string; // 页面布局
};
export type PageItem = MatterItem & {
  description: string; // 文章摘要
  cover: string; // 文章封面
  link: string;
};
