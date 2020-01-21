const git = require('./git.js')
const FEMainPoint = require('./FEMainPoint.js')
const frontEnd = require('./frontEnd.js')

module.exports = {
  ...git,
  ...FEMainPoint,
  ...frontEnd
}