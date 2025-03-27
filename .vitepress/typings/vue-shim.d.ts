declare global {
  interface Window {
  }

  interface ArticleData {
    index?: number;
    title: string; /* 文章标题 */
    link: string; /* 文章链接 */
    top: boolean; /* 是否置顶 */
  }

  interface Article {
    title: string; /* 文章标题 */
    description: string; /* 文章摘要 */
    cover: string; /* 封面图 */
    link: string; /* 文章链接 */
    date: string; /* 发布日期 */
    tags: string[]; /* 标签 */
    views: number; /* 浏览量 */
    comments: number; /* 评论数 */
    likes: number; /* 点赞数 */
    author: string; /* 作者 */
    category: string; /* 分类 */
    content: string; /* 文章内容 */
    isTop: boolean; /* 是否置顶 */
    isOriginal: boolean; /* 是否原创 */
    isRecommend: boolean; /* 是否推荐 */
    isDelete: boolean; /* 是否删除 */
    isDraft: boolean; /* 是否草稿 */
    isPublish: boolean; /* 是否发布 */
  }
}
export {}
