module.exports = {
  base: '/work/',
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
      { text: '分类', 
        icon: 'reco-category',
        items: [
          { text: '原生', items: [
            { text: 'HTML', link: '/categories/html' },
            { text: 'CSS', link: '/categories/css' },
            { text: 'JS', link: '/categories/js' },
          ] },
          { text: '框架', items: [
            { text: 'Vue', link: '/categories/vue' },
            { text: 'React', link: '/categories/react' },
            { text: 'Jquery', link: '/categories/jquery' },
            { text: 'NodeJS', link: '/categories/nodejs' },
          ] },
          {
            text: '其他', items: [
              { text: 'Other', link: '/categories/other' },
              { text: 'Tool', link: '/categories/tool' },
              { text: 'Interview', link: '/categories/interview' }
            ]
          }
        ]
      },
      { text: '标签', link: '/tags/', icon: 'reco-tag' },
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
    // valine config
    valineConfig: {
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  } 
}  