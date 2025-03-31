export namespace Blog {
  export type ArticleData = {
    index: number; /** 文章索引 */
    title: string; /** 文章标题 */
    link: string; /** 文章链接 */
    summary?: string; /** 文章摘要 */
    cover?: string; /** 封面图 */
    categories: string[]; /** 分类 */
    tags: string[]; /** 标签 */
    top: boolean; /** 是否置顶 */
  }
}

// /**
//  * 博文属性
//  * -------------------------------------------- */
// type Article = {
//   /** 文章标题 */
//   title: string;
//   /** 文章链接 */
//   link: string;
//   /** 文章索引（用于排序） */
//   index?: number;
//   /** 文章的元数据 */
//   matter: {
//     /** 文章发布日期 */
//     date: string;
//     /** 文章的作者 */
//     author?: string;
//     /** 文章标签 */
//     tags?: string[];
//     /** 文章摘要 */
//     excerpt?: string;
//     /** 文章的封面图片 */
//     coverImage?: string;
//     /** 文章的阅读时长，单位分钟 */
//     readingTime?: number;
//   };
// };


// interface Article {
//   title: string; /* 文章标题 */
//   description: string; /* 文章摘要 */
//   cover: string; /* 封面图 */
//   link: string; /* 文章链接 */
//   date: string; /* 发布日期 */
//   tags: string[]; /* 标签 */
//   views: number; /* 浏览量 */
//   comments: number; /* 评论数 */
//   likes: number; /* 点赞数 */
//   author: string; /* 作者 */
//   category: string; /* 分类 */
//   content: string; /* 文章内容 */
//   isTop: boolean; /* 是否置顶 */
//   isOriginal: boolean; /* 是否原创 */
//   isRecommend: boolean; /* 是否推荐 */
//   isDelete: boolean; /* 是否删除 */
//   isDraft: boolean; /* 是否草稿 */
//   isPublish: boolean; /* 是否发布 */
// }
