import { h } from 'hyperapp'

export const view = ({ xstate }, actions) => {
  return <div id='app' class={xstate.value} onclick={actions.onclick} />
}
