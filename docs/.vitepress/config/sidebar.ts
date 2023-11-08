    import DefaultTheme from 'vitepress/theme'

    export const sidebar: DefaultTheme.Config['sidebar'] = {
        '/file/files/Python': [
            {
                text: 'pip | Conda镜像配置',
                items: [
                    { text: 'pip配置', link: '/file/files/Python/jingxiang/pip' },
                    { text: 'Conda配置', link: '/file/files/Python/jingxiang/配置Conda' },
                ]
            },
            {
                text: 'Python教程',
                items: [
                    { text: 'Python核心基础数据类型', link: 'file/files/Python/jichu/Python核心基础数据类型' },
                    { text: 'tkinter基础', link: 'file/files/Python/tkinter/tkinter' },
                    { text: 'Python超详细导出模块教程', link: 'file/files/Python/mokuai/Python模块导出' },


                ],
                collapsible: true,
                collapsed: false
            },
        ],
        '/file/files/Linux': [
            {
                text: 'screen',
                items: [
                    { text: '使用screen实现程序后台运行', link: '/file/files/Linux/使用screen实现程序后台运行' },
                ],
                collapsible: true,
                collapsed: false
            },
            {
                text: 'Docker',
                items: [
                    { text: 'docker基础', link: '/file/files/Linux/docker的基础' },
                ],
                collapsible: true,
                collapsed: false
            },
            {
                text: 'Node.js',
                items: [
                    { text: 'Node.js的安装', link: '/file/files/Linux/安装Node.js' },
                ]
            }
        ],

        '/file/files/XiaochunJC/Vscode/': [
            {
                text: 'VsCode',
                items: [
                    { text: '关于', link: '/file/files/XiaochunJC/Vscode/index.md' },
                ]
            },

            {
                text: 'VsCode 教程',
                items: [
                    { text: 'VsCode 插件', link: '/file/files/XiaochunJC/Vscode/Vscode插件/Vscode插件.md' },
                    { text: 'VsCode 配置C语言环境', link: '/file/files/XiaochunJC/Vscode/VScode配置C语言/index.md' }
                ],
                collapsible: true,
                collapsed: false
            },
        ],


        '/file/files/XiaochunRes/': [
            {
                text: '小纯网站表明',
                items: [
                    { text: '关于', link: '/file/files/XiaochunRes/about' }
                ]
            }       
        ]
    }

