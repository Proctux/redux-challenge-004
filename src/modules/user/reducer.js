import { LOGIN } from "./actions"
import { defineAction as reduxDefine } from 'redux-define'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED', 'COUNT']

export const defineAction = type => reduxDefine(type, REQUEST)


const INITIAL_STATE = {}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN.FULFILLED: {
      return {
        ...state,
        user: action.payload
      }
    }
    case LOGIN.REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default user;
