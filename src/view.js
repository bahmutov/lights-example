import { h } from 'hyperapp'

export const view = ({ state }, actions) => {
  return <div id='app' class={state.value} onclick={actions.onclick} />
}
