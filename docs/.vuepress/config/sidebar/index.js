const git = require('./git.js')
const FEMainPoint = require('./FEMainPoint.js')
const frontEnd = require('./frontEnd.js')
const interview = require('./interview.js')

module.exports = {
  ...git,
  ...FEMainPoint,
  ...frontEnd,
  ...interview
}