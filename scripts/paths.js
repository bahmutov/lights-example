import { getShortestValuePaths } from 'xstate/lib/graph'
import machine from '../src/machine'

const paths = getShortestValuePaths(machine, {
  events: {
    TIMER: [{ type: 'TIMER' }]
  }
})

function deserializeEventString (eventString) {
  const [type, payload] = eventString.split(' | ')

  return {
    type,
    ...(payload && payload !== 'undefined' ? JSON.parse(payload) : {})
  }
}

const pathsFromGreen = Object.keys(paths).filter(stateString => {
  // console.log('state string', stateString)
  const result = deserializeEventString(stateString)
  // console.log('result', result)
  return result.type === '"green"'
})

console.log(paths[pathsFromGreen[0]])
