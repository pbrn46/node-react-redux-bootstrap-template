import { combineReducers } from 'redux'
import actions from '../actions'


function nothing(state=null, action) {
  switch (action.type) {
    case actions.SET_NOTHING:
      return action.nothing
    default:
      return state
  }
}

export default combineReducers({
  nothing,
})
