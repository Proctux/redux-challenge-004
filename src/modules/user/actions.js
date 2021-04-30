import * as userService from '../../services/user/userService'
import { defineAction } from './reducer'

export const LOGIN = defineAction('LOGIN')
export const SAVE_EMAIL = defineAction('SAVE_EMAIL')

export const login = payload => dispatch =>
  dispatch({
    type: LOGIN.ACTION,
    payload: userService.login(payload)
})

export const saveEmail = payload => dispatch =>
  dispatch({
    type: SAVE_EMAIL,
    payload
})
