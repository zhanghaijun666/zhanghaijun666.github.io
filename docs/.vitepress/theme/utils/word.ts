var pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

// 计算文章文字数量【596 个字】
export const getWordCont = () => {
  const words = window.document.querySelector('#VPContent')?.querySelector('.content-container .main')?.textContent || '';
  return countWord(words);
};

// copy from https://github.com/youngjuning/vscode-juejin-wordcount/blob/main/count-word.ts
export const countWord = (data: string) => {
  var m = data.match(pattern);
  var count = 0;
  if (!m) {
    return 0;
  }
  for (var i = 0; i < m.length; i++) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
};
