'use strict'

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


function user(state = {}, action) {

  console.log('userStateChange',action);
  switch (action.type) {
    case 'SEND_LOGIN_DATA_SUCCESS':
      return Object.assign({}, state, {
        username: action.payload.username,
        loading: false,
        error: null
      })
      break;
    case 'SEND_LOGIN_DATA_ERROR':
      return Object.assign({}, state, {
        username: '',
        loading: false,
        error: action.err
      })
      break;
    case 'CHANGE_USER_INFO':
      return Object.assign({}, state, {
        username: action.username,
        email: action.email
      })
      break;
    default:
    console.log('hit default');
      return state;
  }
}

function expenses(state=[], action) {
  console.log('expenses',state, action);
  return state;
}

const userReducer = combineReducers({user, expenses, routing: routerReducer });

export default userReducer;
