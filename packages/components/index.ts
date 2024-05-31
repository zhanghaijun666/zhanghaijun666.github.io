import type { Component, App } from 'vue';
import TButton from './button';

// 存储组件列表
const components: { [propName: string]: Component } = {
  TButton,
};

// - install：每个插件都有一个 install 方法
const install: any = (app: App): void => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

/**
 * @description 导出组件
 */
export { TButton };

const TuiPlus = { install };
export default TuiPlus;
