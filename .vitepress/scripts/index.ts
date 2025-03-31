import { getArticleList } from './article'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'pathe'
import { fileURLToPath } from 'url'

getArticleList().then(res => {
  // 目标文件路径
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const filePath = resolve(__dirname, '../../assets/data/articles.json')
  // 确保目标目录存在，不存在则创建
  const dirPath = dirname(filePath)
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true })
  }
  writeFileSync(filePath, JSON.stringify(res, null, 2), 'utf-8')
})
