import { combineReducers } from 'redux'
import actions from '../actions'


function test(state=null, action) {
  switch (action.type) {
    case actions.SET_TEST:
      return action.test
    default:
      return state
  }
}

export default combineReducers({
  test,
})
