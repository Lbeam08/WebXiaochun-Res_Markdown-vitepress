import DefaultTheme from 'vitepress/theme'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '../img/1.png',
  outlineTitle: '目录', // 右侧大纲标题文本配置
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  /*editLink: {
    pattern: 'https://github.com/xxx',
    text: '编辑'
  },*/
  // 全文搜索配置
  /*algolia: {
    appId: 'asd',
    apiKey: 'aasdasdsd',
    indexName: 'asd'
  },*/
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Lbeam08' },
  ],
  footer: {
    message: '版权声明',
    copyright: 'Copyright © 2023-小纯Res.'
  }
}
