import { resolve } from "path";

export const docsRoot = resolve(__dirname, "..", "..");

// 文件或者文件夹命名规则: [排序号].[文件名称].md
export const REGEX_PAGE_NAME = new RegExp(/^(?<order>\d+)\.(?<name>[^.]*)(\.md)?$/);
// 文章内图片正则
export const REGEX_IMAGE = /!\[.*?\]\((.*?)\s*(".*?")?\)/;
// 页面文件位置
export const PAGE_SOURCE = [`components/**/*.md`, `blog/**/*.md`];
export const PAGE_IGNORE = [".vitepress/**", "node_modules/**", "src/**"];
