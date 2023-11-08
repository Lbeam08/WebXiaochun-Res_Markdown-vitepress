import DefaultTheme from 'vitepress/theme'

import MyLayout from './components/MyLayout.vue'

import './styles/custom.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    // register global component
  }
}
