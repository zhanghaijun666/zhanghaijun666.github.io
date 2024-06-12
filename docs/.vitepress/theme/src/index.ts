// import 'normalize.css';
import type { Component, App } from 'vue';
import VCode from './components/CodeView/index.vue';
import VLink from './components/navigator/NavLink.vue';
import VPicture from './components/common/Picture.vue';
import VWishPanel from './components/common/WishPanel.vue';
import DemoPreview from './components/CodePreview/index.vue';
import Blog from './layout/blog/index.vue';

// 存储组件列表
const components: { [propName: string]: Component } = {
  Blog,
  VCode,
  VLink,
  VPicture,
  VWishPanel,
  DemoPreview,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};
