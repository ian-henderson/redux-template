import * as ActionTypes from '../actions'

export default (state = {
  isAuthenticated: localStorage.getItem('token') ? true : false
}, action) => {

  return state
}
