import glob from 'fast-glob';
import { PAGE_IGNORE } from './typings';
import { getFileItem, joinPath, listDirectory } from './utilsFile';
import { mkdirSync, writeFileSync } from 'fs';

const generateDirPageData = (dirPath: string) => {
  const files = glob.sync(dirPath + '/**/*.md', { ignore: PAGE_IGNORE });
  if (files.length === 0) {
    return;
  }
  console.log('--- 生成目录文章，', dirPath);
  mkdirSync(dirPath, { recursive: true });
  writeFileSync(
    joinPath(dirPath, 'page.json'),
    JSON.stringify(
      files.map((item) => getFileItem(item)).sort((a, b) => a.order - b.order),
      null,
      2
    )
  );
  listDirectory(dirPath).forEach((item) => generateDirPageData(item));
};

['blog'].forEach((item) => generateDirPageData(item));

// const files = glob.sync('blog/**/page.json');
// console.log(files.length);
// files.forEach((item) => {
//   unlink(item, () => {});
// });
