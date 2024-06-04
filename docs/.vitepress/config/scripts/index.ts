import { readFileSync } from 'fs';
import { docRoot } from '../global';
import { dateFormat } from './utils';
import matter from 'gray-matter';

console.log(docRoot);

const fileContent = readFileSync('blogs/20.结构与算法/10.数据结构/10.线性表-栈.md', 'utf-8');
const { data: frontmatter = {} } = matter(fileContent, { excerpt: true });
console.log('frontmatter.date:', frontmatter.date);
console.log('new Date:', new Date(frontmatter.date));
console.log('dateFormat:', dateFormat(frontmatter.date));

const currentDate = frontmatter.date;
console.log(currentDate.toUTCString());
console.log(dateFormat(currentDate.toUTCString()));

const timezoneOffset = currentDate.getTimezoneOffset();
console.log(`Timezone offset: ${timezoneOffset} minutes`);
// 设置特定时区
const beijingTime = currentDate.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
console.log(beijingTime);
console.log('*******************************');
/**
 * 更改给定时间对象的时区
 * @param date - 要更改时区的时间对象
 * @param targetOffset - 目标时区偏移量，单位为分钟
 * @returns 更改时区后的时间对象
 */
function changeTimezone(date: Date, targetOffset: number): Date {
  // 获取当前时区偏移量
  const currentOffset = date.getTimezoneOffset();
  // 计算目标偏移量与当前偏移量的差值
  const offsetDiff = targetOffset - currentOffset;
  // 计算时间偏移量，单位为毫秒
  const timeOffset = offsetDiff * 60 * 1000;
  // 创建新的时间对象，应用时间偏移量
  const newTime = new Date(date.getTime() + timeOffset);
  return newTime;
}

// 示例使用
const originalDate = new Date(); // 当前时间
const targetOffset = 8 * 60; // 东八区偏移量，单位为分钟
const newDate = changeTimezone(originalDate, targetOffset);
console.log(originalDate.toLocaleString()); // 原始时间，当前时区
console.log(newDate.toLocaleString()); // 更改时区后的时间，东八区
