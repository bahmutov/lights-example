import machine from './machine'

const onclick = () => ({ state }) => {
  const currentState = state.value
  const newState = machine.transition(state.value, 'TIMER')
  console.log(
    'onclick, state changes from %s to %s',
    currentState,
    newState.value
  )
  return { state: newState }
}
export const actions = { onclick }
