import fs from 'node:fs';
import path from 'node:path';
import { FILE_NAME_REGEX, FileItem } from './type';

export const readFiles = async function (directoryPath: string, ignoreDirectories: string[], parentOrder: number = 0, level: number = 1): Promise<FileItem[]> {
  let files: FileItem[] = [];
  try {
    // 获取目录的真实路径
    const absolutePath = path.resolve(directoryPath);
    // 异步读取目录下的文件和子目录
    const fileNames = await fs.promises.readdir(absolutePath);
    for (const fileName of fileNames) {
      // 检查当前目录是否需要忽略
      if (ignoreDirectories.includes(fileName)) {
        continue;
      }
      const filePath = path.join(absolutePath, fileName);
      const stats = await fs.promises.stat(filePath);
      const group: { [key: string]: string } | undefined = ((fileName || '').match(FILE_NAME_REGEX) || {}).groups;
      if (!group) {
        level !== 1 && console.error(`错误的文件名格式: ${fileName}`);
        continue;
      }
      files.push({
        level: level,
        order: Number(group.order || 0),
        parentOrder: parentOrder,
        name: group.name || '',
        fullName: fileName,
        path: '/' + (directoryPath + path.sep + fileName).split(path.sep).slice(0).join('/'),
        file: stats.isFile(),
        icon: group.icon || ''
      });
      // 递归读取子目录中的文件
      if (stats.isDirectory()) {
        files = files.concat(await readFiles(path.join(directoryPath, fileName), ignoreDirectories, Number(group.order || 0), level + 1));
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
  }
  return files;
};
