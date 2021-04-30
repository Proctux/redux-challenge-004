import { LOGIN, SAVE_EMAIL } from "./actions"
import { defineAction as reduxDefine } from 'redux-define'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED', 'COUNT']

export const defineAction = type => reduxDefine(type, REQUEST)


const INITIAL_STATE = {
  accessToken: undefined,
  email: '',
}

const user = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SAVE_EMAIL: {
      console.log('aqui', action)
      return {
        ...state,
        email: action.payload
      }
    }
    case LOGIN.FULFILLED: {
      return {
        ...state,
        accessToken: action.payload.data.accessToken
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
