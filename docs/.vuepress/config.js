module.exports = {
  // base: '/work/',
  title: "reco-work",
  description: '记下来，永远不要相信自己的脑子！',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
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
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      notify: true,
      recordIP: true
    },
  },
  markdown: {
    lineNumbers: true
  } 
}  