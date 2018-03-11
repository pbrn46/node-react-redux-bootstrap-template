import * as actions  from '.'
export default actions

export const SET_TEST = "SET_TEST"
export const setTest = (test) => ({
  type: SET_TEST,
  test,
})
