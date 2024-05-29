// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './layout/Layout.vue';
import './style.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import TuiPlus from '@haijunit/components';
import { VPDemo } from './components';
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // UI组件
    app.use(TuiPlus);
    // 注册ElementPlus
    app.use(ElementPlus, { locale });
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    // 自定义组件
    app.component('Demo', VPDemo);
  },
} satisfies Theme;
