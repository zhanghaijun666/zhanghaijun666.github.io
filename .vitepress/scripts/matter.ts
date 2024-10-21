import { getArticleList } from '../utils/article'

export const formatMatter = async () => {
  const articleList = await getArticleList()
  console.log(articleList)
}
