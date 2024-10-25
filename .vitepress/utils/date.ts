/**
 * @file 时间的格式化
 * -------------------------------------------------------------------------- */

/**
 * 格式化时间
 * @param date 日期，支持类型为 Date 和 number
 * @param format 格式化字符串，默认为 yyyy-MM-dd hh:mm:ss
 * @returns {string} 格式化后的字符串
 * @example
 *  console.log(dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')) // 当前时间
 *  console.log(dateFormat(Date.now(), 'yyyy-MM-dd hh:mm:ss')) // 当前时间的时间戳
 */
export const dateFormat = (date: Date | number, format: string = 'yyyy-MM-dd hh:mm:ss'): string => {
  let d: Date = typeof date === 'number' ? new Date(date) : date
  const map: { [k: string]: number } = {
    'M+': d.getMonth() + 1, // 月份
    'd+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
    'S+': d.getMilliseconds() // 毫秒
  }
  // 年份单独处理
  if (/(y+)/.test(format)) {
    format = format.replace(/(y+)/, (_, year) => (d.getFullYear() + '').substring(4 - year.length))
  }
  // 遍历 map 对象并替换相应的格式符
  for (const key in map) {
    const regex = new RegExp(`(${key})`)
    if (regex.test(format)) {
      format = format.replace(regex, (match: string): string => match.length === 1 ? String(map[key]) : ('00' + map[key]).slice(-match.length))
    }
  }
  return format
}
