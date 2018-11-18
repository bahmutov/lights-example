import { Machine } from 'xstate';

export default Machine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow',
      }
    },
    yellow: {
      on: {
        TIMER: 'red',
      }
    },
    red: {
      on: {
        TIMER: 'green',
      }
    }
  }
})
