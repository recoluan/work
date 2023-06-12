import navbar from '../nav'
import series from '../series'
import themeReco from './themeReco'

export default Object.assign({}, themeReco, {
  navbar,
  series,
  //search config 
  search: true,
  searchMaxSuggestions: 10,
  // last Updated Date
  lastUpdated: 'Last Updated', // string | boolean
  sidebarDepth: 2
})