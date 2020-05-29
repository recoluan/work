const themeReco = require('./themeReco.js')
const nav = require('../nav')
const sidebar = require('../sidebar')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  //search config 
  search: true,
  searchMaxSuggestions: 10,
  // last Updated Date
  lastUpdated: 'Last Updated', // string | boolean
  sidebarDepth: 2
})