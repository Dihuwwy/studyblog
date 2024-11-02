import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "嵌入式学习博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/关于' }
    ],

    sidebar: [
      {
        text: '日志',
        items: [
          { text: '关于', link: '/关于' },
          { text: '2024.11.02', link: '/2024.11.2' }
        ]
      }
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dihuwwy' }
    ],

    footer:{
        copyright: "Copyright@ 2024 王文斌"
    }
  }
})
