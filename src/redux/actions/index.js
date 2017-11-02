import * as actions  from '.'
export default actions

export const SET_NOTHING = "SET_NOTHING"
export const setNothing = (nothing) => ({
  type: SET_NOTHING,
  nothing,
})
