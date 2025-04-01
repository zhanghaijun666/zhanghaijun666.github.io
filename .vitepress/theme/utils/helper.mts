/**
 * 平滑滚动至目标高度或元素
 * @param {number|HTMLElement} target - 目标高度或元素
 */
export const smoothScrolling = (target: number | HTMLElement = 0): boolean => {
  try {
    if (typeof window === 'undefined') return false
    if (typeof target === 'number') {
      // 滚动至指定高度
      window.scrollTo({ top: target, behavior: 'smooth' })
    } else if (target instanceof HTMLElement) {
      // 滚动至元素
      const top: number = target.getBoundingClientRect().top - 80
      window.scrollTo({ top, behavior: 'smooth' })
    } else if (typeof target === 'string' && target.startsWith('#')) {
      // 滚动至 ID
      const element: HTMLAnchorElement = document.querySelector(target)
      if (element) {
        const top: number = element.getBoundingClientRect().top - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      // 滚动至顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } catch (error) {
    console.error('平滑滚动出错：', error)
  }
}

/**
 * 格式化时间戳为相应的日期格式
 * 如果时间戳表示的时间为7天内，则返回 'n天内'
 * 如果时间戳表示的时间为7天之后但在当年，则返回 '月/日'
 * 如果时间戳表示的时间在当年之前，则返回 '年/月/日'
 * @param {number} timestamp - 时间戳（以毫秒为单位）
 * @return {string} 返回日期格式的字符串
 */
export const formatTimestamp = (timestamp: number | string | Date): string => {
  let now: Date = new Date()
  // 获取今天0点
  let today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  // 获取昨天0点
  let yesterday: Date = new Date(today.getTime() - 1000 * 60 * 60 * 24)
  let targetDate: Date = new Date(timestamp)
  // 是否为昨天
  if (targetDate >= yesterday && targetDate < today) {
    return '1天前'
  } else {
    let difference: number = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24))
    if (difference <= 0) {
      return '今日内'
    } else if (difference < 7) {
      return `${ difference }天前`
    } else {
      let year: number = targetDate.getFullYear()
      let month: number = targetDate.getMonth() + 1
      let day: number = targetDate.getDate()
      if (year === now.getFullYear()) {
        return `${ month }/${ day }`
      } else {
        return `${ year }/${ month }/${ day }`
      }
    }
  }
}

/**
 * 随机前往一篇文章
 * @param {Object} postData - 文章数据
 * @returns {number} 天数差值
 */
let lastIndex: number = -1
export const shufflePost = (postData) => {
  let randomIndex
  do {
    // 随机生成一个索引值
    randomIndex = Math.floor(Math.random() * postData.length)
  } while (randomIndex === lastIndex && postData.length > 1)
  // 更新上一次的索引值
  lastIndex = randomIndex
  // 随机文章
  const randomPost = postData[randomIndex]
  console.log(randomPost)
  // 跳转到随机文章
  return randomPost.regularPath
}

/**
 * 复制文本到剪贴板
 * @param {string} data 要复制到剪贴板的文本
 */
export const copyText = async (data) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(data)
      $message.success('复制成功，在转载时请标注本文地址')
    } catch (error) {
      console.error('复制出错：', error)
      $message.error('复制出现错误，请重试')
    }
  } else {
    // 如果浏览器不支持 navigator.clipboard
    const textArea: HTMLAnchorElement = document.createElement('textarea')
    textArea.value = data
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      $message.success('复制成功，在转载时请标注本文地址')
    } catch (err) {
      console.error('复制出错：', err)
      $message.error('复制出现错误，请重试')
    } finally {
      document.body.removeChild(textArea)
    }
  }
}

/**
 * 图片 URL 复制到剪贴板
 * @param {string} imageURL 要复制到剪贴板的图片的URL
 */
export const copyImage = async (imageURL): Promise<Void> => {
  if (!navigator.clipboard) {
    console.error('浏览器不支持 Clipboard API')
    return
  }
  try {
    const response: Response = await fetch(imageURL)
    const blob: Blob = await response.blob()
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ])
    console.log('图片已复制到剪贴板')
    $message.success('图片已复制到剪贴板')
  } catch (error) {
    console.error('复制图片出错：', error)
    $message.error('复制图片错误，请重试')
  }
}

/**
 * 下载图片
 * @param {string} imageUrl 要下载的图片的URL地址
 */
export const downloadImage = (imageUrl) => {
  try {
    const date: Date = new Date()
    const timestamp: string = date.toISOString().replace(/[:.]/g, '-')
    const imageName: string = `image-${ timestamp }.jpg`
    const anchor: HTMLAnchorElement = document.createElement('a')
    anchor.download = imageName
    anchor.href = imageUrl
    anchor.target = '_blank'
    anchor.style.display = 'none'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  } catch (error) {
    console.error('下载图片出错：', error)
    $message.error('下载图片错误，请重试')
  }
}

// 打乱数组 - Fisher-Yates 洗牌算法
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // 解构赋值进行元素互换
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

