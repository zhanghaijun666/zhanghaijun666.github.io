import { REGEX_PAGE_NAME } from './typings';
import path from 'path';

/**
 * 格式化日期为指定格式的字符串
 * @param input - 需要格式化的日期，可以是 Date 对象、字符串或时间戳
 * @param format - 指定的格式，默认值为 'yyyy-MM-dd hh:mm:ss'
 * @returns 格式化后的日期字符串
 */
export function dateFormat(input: Date | string | number, format: string = 'yyyy-MM-dd hh:mm:ss'): string {
  let date: Date = input instanceof Date ? input : new Date(input);
  const padZero = (num: number): string => (num < 10 ? '0' + num : num.toString());
  const formatMap: { [key: string]: string } = {
    yyyy: date.getFullYear().toString(),
    MM: padZero(date.getMonth() + 1),
    dd: padZero(date.getDate()),
    hh: padZero(date.getHours()),
    mm: padZero(date.getMinutes()),
    ss: padZero(date.getSeconds()),
  };
  return format.replace(/(yyyy|MM|dd|hh|mm|ss)/g, (match) => formatMap[match]);
}

/**
 * 判断给定日期是否在当前周内
 * @param date - 需要判断的日期
 * @param referenceDate - 用作参考的日期（默认为当前日期）
 * @returns 如果给定日期在当前周内则返回 true，否则返回 false
 */
export function isCurrentWeek(date: Date, referenceDate?: Date): boolean {
  const reference = referenceDate || new Date();
  const startOfDay = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate());
  const dayTime = 1000 * 60 * 60 * 24;
  const currentWeekDay = startOfDay.getDay();
  const startWeekTime = startOfDay.getTime() - (currentWeekDay === 0 ? 6 : currentWeekDay - 1) * dayTime;
  const startOfWeek = new Date(startWeekTime);
  const endOfWeek = new Date(startWeekTime + 7 * dayTime);
  return date >= startOfWeek && date < endOfWeek;
}

/**
 * 格式化日期为易读的展示格式
 * @param date - 需要格式化的日期，可以是 Date 对象或日期字符串
 * @returns 格式化后的展示字符串，如 "2小时前"、"3天前"、"2024-06-04"
 */
export function dateFormatAlias(date: Date | string) {
  const source = date ? +new Date(date) : +new Date();
  const now = +new Date();
  const diff = now - source;
  const oneSeconds = 1000;
  const oneMinute = oneSeconds * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  if (diff < oneMinute) {
    return `${Math.floor(diff / oneSeconds)}秒前`;
  }
  if (diff < oneHour) {
    return `${Math.floor(diff / oneMinute)}分钟前`;
  }
  if (diff < oneDay) {
    return `${Math.floor(diff / oneHour)}小时前`;
  }
  if (diff < oneWeek) {
    return `${Math.floor(diff / oneDay)}天前`;
  }
  return dateFormat(new Date(date), 'yyyy-MM-dd');
}
/**
 * 从字符串中匹配正则表达式的分组并返回
 * @param str - 需要匹配的字符串
 * @param reg - 正则表达式（默认为 REGEX_PAGE_NAME）
 * @returns 匹配到的分组对象，如果没有匹配到则返回空对象
 */
export const matchGroup = (str: string, reg: RegExp = REGEX_PAGE_NAME): { [key: string]: string } => (str || '').match(reg)?.groups ?? {};
// 是否是Base64格式的图片
export const isBase64ImageURL = (url: string): boolean => /^data:image\/[a-z]+;base64,/.test(url);

/**
 * 连接多个路径片段，确保路径之间只有一个路径分隔符
 * @param paths - 待连接的路径片段
 * @returns 连接后的路径字符串
 */
export const joinPath = (...paths: string[]): string => path.join(...paths).replace(/\\/g, '/');
