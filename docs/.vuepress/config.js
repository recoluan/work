module.exports = {
  // base: '/work/',
  title: "reco-work",
  description: 'Keep your head up, and never stop learn!',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      { text: '午后南杂', link: 'https://recoluan.gitlab.io', icon: 'reco-messag' },
    ],
    logo: '/head.png',
    //search config 
    search: true,
    searchMaxSuggestions: 10,
    // auto create sidebar
    sidebar: 'auto',
    // last Updated Date
    lastUpdated: 'Last Updated', // string | boolean
    // author
    author: 'reco_luan',
    // 密钥
    keyPage: {
      keys: ['930105'],
      color: '#424242',
      lineColor: '#424242'
    },
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/plugin-medium-zoom', 'flowchart'] 
}  
