import { h } from 'hyperapp'

// we expose the selector to let the tests know
// how to find this element
export const selector = '#app'

// in our simple application we set the CSS class
// to be the same as the name of the state
export const getAppClass = value => value

export const view = ({ xstate }, actions) => {
  return (
    <div id='app' class={getAppClass(xstate.value)} onclick={actions.onclick} />
  )
}
