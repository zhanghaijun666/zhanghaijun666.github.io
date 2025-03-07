import { translations } from './zh'
import { DocSearchTranslations } from 'vitepress/types/docsearch'

interface LocaleConfig {
  label: string;
  lang: string;
  data: Record<string, any>;
  search: {
    placeholder: string;
    translations?: DocSearchTranslations;
  }
}

type Locales = {
  [key: string]: LocaleConfig;
}

const locales: Locales = {
  zh: {
    label: '简体中文',
    lang: 'zh-CN',
    data: {},
    search: {
      placeholder: '搜索文档',
      translations
    }
  },
  en: {
    label: 'English',
    lang: 'en',
    data: {},
    search: {
      placeholder: 'Search docs'
    }
  }
}

export default locales
