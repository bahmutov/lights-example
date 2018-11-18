import { app } from 'hyperapp'
import { actions } from './actions'
import machine from './machine'
import { view } from './view'

app({ state: machine.initialState }, actions, view, document.body)
