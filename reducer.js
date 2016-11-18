import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function user(state = {}, action) {
  switch (action.type) {
    case 'SEND_LOGIN_DATA_SUCCESS':
      return Object.assign({}, state, {
        username: action.payload.username,
        income: action.payload.income,
        loading: false,
        error: null,
      });
    case 'SEND_LOGIN_DATA_ERROR':
      return Object.assign({}, state, {
        username: '',
        loading: false,
        error: action.err,
      });
    case 'CHANGE_USER_INFO':
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
      });
    default:
      return state;
  }
}

function expenses(state = [], action) {
  switch (action.type) {
    case 'SET_USER_EXPENSES':
      return Object.assign({}, state, {
        expenses: action.payload,
      });
    default:
      return state;
  }
}

const userReducer = combineReducers({ user, expenses, routing: routerReducer });

export default userReducer;
