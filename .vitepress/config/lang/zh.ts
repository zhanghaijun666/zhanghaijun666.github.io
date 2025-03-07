import { DocSearchTranslations } from 'vitepress/types/docsearch'

export const data: { markdown: Record<string, any>, themeConfig: Record<string, any> } = {
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
}

export const translations: DocSearchTranslations = {
  button: {
    buttonText: '搜索文档',
    buttonAriaLabel: '搜索文档'
  },
  modal: {
    searchBox: {
      resetButtonTitle: '清除查询条件',
      resetButtonAriaLabel: '清除查询条件',
      cancelButtonText: '取消',
      cancelButtonAriaLabel: '取消'
    },
    startScreen: {
      recentSearchesTitle: '搜索历史',
      noRecentSearchesText: '没有搜索历史',
      saveRecentSearchButtonTitle: '保存至搜索历史',
      removeRecentSearchButtonTitle: '从搜索历史中移除',
      favoriteSearchesTitle: '收藏',
      removeFavoriteSearchButtonTitle: '从收藏中移除'
    },
    errorScreen: {
      titleText: '无法获取结果',
      helpText: '你可能需要检查你的网络连接'
    },
    footer: {
      selectText: '选择',
      navigateText: '切换',
      closeText: '关闭',
      searchByText: '搜索提供者'
    },
    noResultsScreen: {
      noResultsText: '无法找到相关结果',
      suggestedQueryText: '你可以尝试查询',
      reportMissingResultsText: '你认为该查询应该有结果？',
      reportMissingResultsLinkText: '点击反馈'
    }
  }
}
