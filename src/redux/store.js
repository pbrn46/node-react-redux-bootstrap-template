import { createStore, applyMiddleware } from 'redux'

import Reducers from './reducers'
import thunk from 'redux-thunk'

import middleware from './middleware'

export default createStore(
  Reducers,
  applyMiddleware(middleware, thunk)
)
