import type { MarkdownOptions } from 'vitepress'

export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'material-palenight',
    dark: 'one-dark-pro'
  },
  lineNumbers: true, 
}
