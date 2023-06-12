export default [
  { text: 'Home', link: '/' },
  { text: 'Categories', link: '/categories/webpack/1/' },
  { text: 'Tags', link: '/tags/webpack/1/' },
  { 
    text: '前端',
    children: [
      { text: '前端知识大纲', link: '/docs/FEMainPoint/' },
      { text: '前端杂记', link: '/docs/frontEnd/html/2019/031101' },
      { text: '面试', link: '/docs/interview/html' },
      { text: '数据结构和算法', link: '/docs/dataStructuresAndAlgorithms/algorithms/'}
    ] 
  },
  { 
    text: '工具',
    children: [
      { text: 'Git', link: '/docs/git/2019/042801' },
      { text: 'Git-Pro', link: '/docs/git-pro-study/1-getting-started' },
      { text: 'docker', link: '/blogs/tool/docker' }
    ] 
  },
  { text: '午后南杂', link: 'https://recoluan.gitlab.io' },
]