/**
 * @file 时间的相关函数
 * @author zhanghaijun
 * @since 2022-02-14
 * -------------------------------------------------------------------------- */
import dayjs from 'dayjs'

type TimeCycle = 'day' | 'week' | 'month' | 'year'
type TimeRemaining = {
  name: string // 时间单位名称，例如 '今日'、'本周'等
  total: number // 总时间，例如一天的24小时
  passed: number // 已过去的时间，例如一天的12小时
  remaining: number // 剩余时间，例如一天的12小时
  percentage: string // 剩余时间的百分比，例如 '50.00%'
}
const dayText: Record<TimeCycle, string> = { day: '今日', week: '本周', month: '本月', year: '本年' }

/**
 * 获取时间剩余的函数
 * @returns {Object} 返回一个对象，包含四个属性：day、week、month和year。每个属性的值都是一个对象，表示对应时间单位的时间剩余情况。
 */
export const getTimeRemaining = (): Record<TimeCycle, TimeRemaining> => {
  const now: dayjs.Dayjs = dayjs()
  /**
   * 计算时间差的函数
   * @param {String} unit 时间单位，可以是 'day', 'week', 'month', 'year'
   */
  const getDifference = (unit: 'day' | 'week' | 'month' | 'year'): TimeRemaining => {
    const start = now.startOf(unit) // 获取当前时间单位的开始时间
    const end = now.endOf(unit) // 获取当前时间单位的结束时间
    const total = end.diff(start, unit === 'day' ? 'hour' : 'day') + 1 // 计算总的天数或小时数
    let passed = (unit === 'week' && now.day() === 0) ? total - 1 : now.diff(start, unit === 'day' ? 'hour' : 'day') // 计算已经过去的天数或小时数
    const remaining = total - passed
    const percentage = (passed / total) * 100
    // 返回数据
    return { name: dayText[unit], total: total, passed: passed, remaining: remaining, percentage: percentage.toFixed(2) + '%' }
  }
  return { day: getDifference('day'), week: getDifference('week'), month: getDifference('month'), year: getDifference('year') }
}

/**
 * 计算当前日期距离指定日期的天数
 * @param {string} dateStr - 指定的日期字符串，格式为 "YYYY-MM-DD"
 */
export const getDaysUntil = (dateStr: string = '2022-02-14') => dayjs(dateStr).diff(dayjs(), 'day')

/**
 * 格式化日期字符串。
 * 如果日期与当前年份相同，则返回 "月/日" 格式
 * 如果日期不与当前年份相同，则返回 "年/月/日" 格式
 * @param {string} dateString - 需要转换的日期字符串，格式为 "YYYY/MM/DD" 或 "YYYY-MM-DD"
 * @returns {string} 格式化后的日期。
 */
export const formatDate = (dateString: string = '2022-02-14'): string => {
  const currentYear: number = new Date().getFullYear()
  const date: Date = new Date(dateString.replace(/-/g, '/'))
  return date.getFullYear() === currentYear ? `${ date.getMonth() + 1 }/${ date.getDate() }` : `${ date.getFullYear() }/${ date.getMonth() + 1 }/${ date.getDate() }`
}


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

/**
 * 获取根据当前时间的问候语
 * @returns {string} 当前时间对应的问候语
 */
export const getGreetings = (): string => {
  const hour: number = new Date().getHours()
  let hello
  if (hour < 6) {
    hello = '凌晨好，昨晚睡得怎么样？'
  } else if (hour < 9) {
    hello = '早上好，今天也要开心哦！'
  } else if (hour < 12) {
    hello = '上午好，今天也要加油哦！'
  } else if (hour < 14) {
    hello = '中午好，吃饱了精神好！'
  } else if (hour < 17) {
    hello = '下午好，继续加油！'
  } else if (hour < 19) {
    hello = '傍晚好，是时候放松一下了！'
  } else if (hour < 22) {
    hello = '晚上好，是时候休息了！'
  } else {
    hello = '夜深了，明天继续加油！'
  }
  return hello
}

// 特殊纪念日置灰
export const specialDayGray = (): void => {
  const specialDays: { date: string, name: string }[] = [
    { date: '4-4', name: '清明节' },
    { date: '5-12', name: '汶川大地震纪念日' },
    { date: '7-7', name: '中国人民抗日战争纪念日' },
    { date: '9-18', name: '九·一八事变纪念日' },
    { date: '12-13', name: '南京大屠杀死难者国家公祭日' }
  ]
  // 获取当天日期
  const today: Date = new Date()
  const currentDate: string = `${ today.getMonth() + 1 }-${ today.getDate() }`
  // 查找纪念日
  const specialDay: { date: string, name: string } | undefined = specialDays.find((day) => day.date === currentDate)
  if (specialDay) {
    document.documentElement.classList.add('gray')
    if (typeof $message !== 'undefined') {
      $message.info(`今天是${ specialDay.name }，特此默哀`, { duration: 8000, close: true })
    }
  }
}
