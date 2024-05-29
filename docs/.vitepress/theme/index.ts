// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './layout/Layout.vue';
import './style.css';

import TuiPlus from '@haijunit/components';

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // UI组件
    app.use(TuiPlus);
  },
} satisfies Theme;
