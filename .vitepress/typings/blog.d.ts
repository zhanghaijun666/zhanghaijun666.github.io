export namespace Blog {
  export  type ArticleData = {
    title: string; /** 文章标题 */
    summary: string; /** 文章摘要 */
    cover: string; /** 封面图 */
    categories: string[]; /** 分类 */
    tags: string[]; /** 标签 */
  }
}
