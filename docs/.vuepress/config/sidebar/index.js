const git = require('./git.js')
const FEMainPoint = require('./FEMainPoint.js')
const frontEnd = require('./frontEnd.js')
const interview = require('./interview.js')
const dataStructuresAndAlgorithms = require('./dataStructuresAndAlgorithms.js')

module.exports = {
  ...git,
  ...FEMainPoint,
  ...dataStructuresAndAlgorithms,
  ...interview,
  ...frontEnd
}