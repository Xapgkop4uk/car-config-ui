import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SET_CONFIGS, SET_SELECTION, SET_DRIVER } from './consts'

const initialState = {
  configs: [],
  selections: [],
  driver: {
    streetRacer: false,
    vip: false
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIGS:
      return {
        ...state,
        ...action.payload
      }
    case SET_SELECTION:
      return {
        ...state,
        selections: action.payload
      }
    case SET_DRIVER: 
      return {
        ...state,
        driver: {
          ...state.driver,
          ...action.payload
        }
      }
    default:
      return state
  }
}


export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))