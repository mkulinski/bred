import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

import userReducer from './reducer';

const defaultState = {
  user: { username: 'mkulinski',
          email: 'me@michaelkulinski.com',
          income: 134123,
          loading: false,
          error:null
  },
  expenses: [{cost: '12', cat: 'food'}]
}
const newRouter = routerMiddleware(browserHistory);
const middleware = applyMiddleware(promise(), thunk, newRouter);

const store = createStore(userReducer, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
