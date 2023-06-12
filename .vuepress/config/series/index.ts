import git from './git'
import frontEnd from './frontEnd'
import interview from './interview'
import FEMainPoint from './FEMainPoint'
import dataStructuresAndAlgorithms from './dataStructuresAndAlgorithms'

export default {
  ...git,
  ...FEMainPoint,
  ...dataStructuresAndAlgorithms,
  ...interview,
  ...frontEnd
}