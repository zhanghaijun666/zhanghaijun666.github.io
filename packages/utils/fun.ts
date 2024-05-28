// 弹窗提示
export const tips = (message: string, title: string = '提示') => {
  window.alert(`${title}: ${message}`);
};

// 加运算
export const addOperation = (a: number, b: number) => {
  window.alert(`1加2的结果是${a + b}`);
};
