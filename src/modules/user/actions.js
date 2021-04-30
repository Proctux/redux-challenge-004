import * as userService from '../../services/user/userService'
import { defineAction } from './reducer'

export const LOGIN = defineAction('LOGIN')

export const login = payload => dispatch =>
  dispatch({
    type: LOGIN.ACTION,
    payload: userService.login(payload)
})
