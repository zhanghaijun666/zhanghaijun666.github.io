import type { Component, App } from 'vue';
// import 'normalize.css';
import VCode from './vp-demo/index.vue';
import VLink from './navigator/NavLink.vue';

// 存储组件列表
const components: { [propName: string]: Component } = {
  VCode,
  VLink,
};

const install: any = (app: App): void => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

const VComponents = { install };
export default VComponents;
