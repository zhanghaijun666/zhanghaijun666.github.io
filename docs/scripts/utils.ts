import fs from 'node:fs';
import path from 'path';

export const fileList = <T>(roots: string[], convert: (filePath: string, root: string) => T | undefined, level: number = 1): T[] => {
  const files: T[] = [];
  for (let i = 0; i < roots.length; i++) {
    let root = roots[i];
    const names = fs.readdirSync(root);
    for (const name of names) {
      // 检查当前目录是否需要忽略
      if (['library', 'source'].includes(name)) {
        continue;
      }
      const filePath = path.join(root, name);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        files.push(...fileList([filePath], convert, level + 1));
        continue;
      } else {
        const result = convert(filePath, root);
        result && files.push(result);
      }
    }
  }
  return files;
};

export const matchGroup = (str: string, reg: RegExp): { [key: string]: string } => {
  const group: { [key: string]: string } | undefined = ((str || '').match(reg) || {}).groups;
  return group || {};
};
