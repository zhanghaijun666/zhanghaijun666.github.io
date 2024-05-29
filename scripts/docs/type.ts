// 文件夹的命名规则
export const NAME_FOLDER_REGEX = new RegExp(/^(?<order>\d+)\.(?<name>.*)$/);
// 文件的命名规则
export const NAME_FILE_REGEX = new RegExp(/^(?<order>\d+)\.(?<name>.*)\.md$/);
// 文件或者文件夹命名规则: [排序号].[文件名称].md
export const FILE_NAME_REGEX = new RegExp(/^(?<order>\d+)\.(?<name>[^.]*)(\.md)?$/);
// 永久链接的前缀
export const PERMALINK_PREFIX = '/pages/';

export interface FileItem {
  level: number; // 层级
  order: number; // 排序号
  parentOrder: number; // 父文件的排序号
  name: string; // 文件名称
  fullName: string; // 文件全名
  path: string; // 文件路径
  file: boolean; // 是否文件
  icon?: string; // 图标
}

export interface MatterItem {
  title: string; // 标题
  date: string; // 创建时间
  author?: string; // 作者
  tags?: string[]; // 标签
  categories?: string[]; // 分类
  permalink?: string; // 永久链接 :year/:month/:day/:title/
  keywords?: string; // 关键字 用于SEO
}
