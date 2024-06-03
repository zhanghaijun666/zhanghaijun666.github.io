var pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

// 计算文章文字数量【596 个字】code from：https://github.com/youngjuning/vscode-juejin-wordcount/blob/main/count-word.ts
export const countWord = (data: string) => {
  var m = data.match(pattern);
  if (!m) {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < m.length; i++) {
    count += m[i].charCodeAt(0) >= 0x4e00 ? m[i].length : 1;
  }
  return count;
};
