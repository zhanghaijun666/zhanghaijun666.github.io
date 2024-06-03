// import 'normalize.css';
import type { Component, App } from 'vue';
import VCode from './components/CodeView/index.vue';
import VLink from './components/navigator/NavLink.vue';
import VPicture from './components/common/Picture.vue';
import VWishPanel from './components/common/WishPanel.vue';

// 存储组件列表
const components: { [propName: string]: Component } = {
  VCode,
  VLink,
  VPicture,
  VWishPanel,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};
