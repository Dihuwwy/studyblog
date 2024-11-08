import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/studyblog/",
  lang: 'zh-CN',
  title: "嵌入式学习博客",
  description: "VitePress站点",
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
          { text: '2024.11.02', link: '/2024.11.2' },
          { text: '2024.11.03', link: '/2024.11.3' }
        ]
      }
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dihuwwy' }
    ],

    outlineTitle: "页面导航",

    footer:{
        copyright: "Copyright@ 王文斌-嵌入式协会2024015"
    }
  }
})
