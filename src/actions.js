import machine from './machine'

const onclick = () => ({ xstate }) => {
  const currentState = xstate.value
  const newState = machine.transition(currentState, 'TIMER')
  console.log(
    'onclick, state changes from %s to %s',
    currentState,
    newState.value
  )
  return { xstate: newState }
}
export const actions = { onclick }
