export namespace Link {
  export type LinkItem = {
    /** 站点图标 */
    icon?: string | { svg: string }
    /** 站点名称 */
    title: string
    /** 站点名称 */
    desc?: string
    /** 站点链接 */
    link: string
  }
  //   /**
  //    * 链接属性
  //    * -------------------------------------------- */
  //   type Link = {
  //     /** 链接文本 */
  //     label: string;
  //     /** 链接地址 */
  //     href: string;
  //     /** 链接目标，默认是 _self，指定是否在新标签页打开 */
  //     target?: '_self' | '_blank';
  //     /** 链接的图标，提供视觉辅助（可选） */
  //     icon?: string;
  //     /** 链接的描述信息，作为辅助说明（可选） */
  //     description?: string;
  //     /** 是否需要在导航中显示（默认为true） */
  //     visible?: boolean;
  //     /** 链接的类别（如导航栏、底部栏等） */
  //     category?: 'navbar' | 'footer' | 'sidebar' | 'custom';
  //   };
  //   /** 链接分组属性 */
  //   type LinkGroup = {
  //     /** 分组名称 */
  //     name: string;
  //     /** 分组内的链接 */
  //     links: Link[];
  //     /** 分组的排序位置（决定在多个分组中显示的顺序） */
  //     order?: number;
  //     /** 是否在导航中显示该分组（默认为 true） */
  //     visible?: boolean;
  //     /** 分组的样式类（用于自定义样式） */
  //     className?: string;
  //     /** 分组的描述信息（可以用作分组标题下的简短介绍） */
  //     description?: string;
  //     /** 分组的图标（用于视觉展示） */
  //     icon?: string;
  //     /** 是否允许展开（可用于可折叠导航） */
  //     collapsible?: boolean;
  //   };
}

export namespace Blog {
  export type Article = {
    index: number; /** 文章索引 */
    title: string; /** 文章标题 */
    link: string; /** 文章链接 */
    summary?: string; /** 文章摘要 */
    cover?: string; /** 封面图 */
    categories: string[]; /** 分类 */
    tags: string[]; /** 标签 */
    top: boolean; /** 是否置顶 */
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

}
