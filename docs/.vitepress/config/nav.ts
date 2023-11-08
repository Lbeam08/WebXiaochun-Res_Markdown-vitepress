export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: 'index' },
  { text: 'Python', link: '/file/files/Python/index', activeMatch: '/file/files/Python' },
  { text: 'Linux', link: '/file/files/Linux/index', activeMatch: '/file/files/Linux' },
  {
    text: '小纯教程文档',
    items: [
      { text: 'Vscode', link: '/file/files/XiaochunJC/Vscode/index.md' },
    ]
  },

  {
    text: '小纯Res',
    items: [
      { text: '小纯ChatGPT', link: '/file/files/XiaochunRes/ChatGPT/index' },
      { text: '小纯云盘', link: '/file/files/XiaochunRes/XiaochunYP/index' },
      { text: '小纯素材解析网站', link: '/file/files/XiaochunRes/XiaochunSC/index' }

    ]
  },
  {
    text: '关于',
    items: [
      { text: '关于本站', link: '/file/site' },
      { text: '关于我', link: '/file/me' }
    ]
  }
]
