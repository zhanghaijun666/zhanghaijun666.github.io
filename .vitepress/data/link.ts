// 定义分组类型
export type Group = {
  title: string // 分组标题
  links: Link[] // 链接数组
  icon?: string // 图标（可选）
  style?: string // 图标样式（可选）
  internal?: boolean // 是否为内部链接（默认 false，可选）
}

// 定义链接类型
export type Link = {
  name: string // 链接名称
  href: string // 链接地址
  icon?: string // 链接图标（可选）
  style?: string // 链接样式（可选）
  internal?: boolean // 是否为内部链接（默认 false，可选）
  description?: string // 分组描述（可选）
}

export const webLinks: Group[] = [
  {
    title: 'Web',
    icon: 'fab fa-github',
    links: [
      {name: 'Google', href: 'https://www.google.com'},
      {name: 'Bing', href: 'https://www.bing.com'},
      {name: 'GitHub', href: 'https://github.com'},
      {name: 'Gitee', href: 'https://gitee.com'},
      {name: '科学上网', href: 'https://ikuuu.one'}
    ]
  },
  {
    title: 'AI',
    icon: 'fa fa-umbrella',
    links: [
      {name: 'ChatGPT', href: 'https://chatgpt.com/'},
      {name: '通义千问', href: 'https://tongyi.aliyun.com/'},
      {name: '文心一言', href: 'https://yiyan.baidu.com/'},
      {name: '豆包', href: 'https://www.doubao.com/'},
      {name: 'KiMi', href: 'https://kimi.moonshot.cn/'},
      {name: '图灵', href: 'https://www.tuling123.com/'},
      {name: '天工 AI', href: 'https://www.tiangong.cn/'}
    ]
  },
  {
    title: '开发工具',
    icon: 'fa fa-handshake',
    links: [
      {name: 'JetBrains-激活码', href: 'https://3.jetbra.in/'},
      {name: '阿里云效', href: 'https://devops.aliyun.com/'},
      {name: '在线工具', href: 'https://it-tools.tech/'},
      {name: '微信开发文档', href: 'https://developers.weixin.qq.com/doc/'},
      {name: 'Linux命令查询', href: 'https://command-not-found.com/'},
      {name: 'KubeSphere', href: 'https://kubesphere.io/zh/'},
      {name: 'Helm K8S', href: 'https://helm.sh/zh/'},

    ]
  },
  {
    title: '后端开发',
    icon: 'fa fa-code',
    links: [
      {name: 'SpringBoot', href: 'https://spring.io/projects/spring-boot'},
      {name: 'Spring Cloud Alibaba', href: 'https://sca.aliyun.com/'},
      {name: '阿里云云效 Maven', href: 'https://developer.aliyun.com/mvn/guide'},
      {name: "LLM应用开发框架", href: "https://agentsflex.com/zh/"}

    ]
  },
  {
    title: 'WEB开发',
    icon: 'fa fa-window-restore',
    links: [
      {name: 'knockoutJS', href: 'https://knockoutjs.com/downloads/index.html'},
      {name: 'ElementPlus', href: 'https://element-plus.org/zh-CN'},
      {name: "UnoCSS", href: "https://unocss.net/"},
      {name: "Animate", href: "https://www.dowebok.com/demo/2014/98/"},
      {name: "Vue", href: "https://vuejs.org"},
      {name: "Vite", href: "https://vite.dev"},
      {name: "Tauri", href: "https://tauri.app"}
    ]
  },
  {
    title: '其他',
    icon: 'fa fa-link',
    links: [
      {name: '易搜', href: 'https://yiso.fun'},
      {name: '易搜地址', href: 'https://yiso.eu.org/'},
      {name: 'LocalSend', href: 'https://localsend.org/download', description: '局域网数据传输工具'},
      {name: 'Apifox', href: 'https://apifox.com/', description: 'API 设计、开发、测试一体化协作平台'},
      {name: 'Reqable', href: 'https://reqable.com', description: '代理抓包 + 请求测试一站式解决方案'}
    ]
  }
]
