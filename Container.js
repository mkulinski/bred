//used to pass props down to all children from store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';
import App from './client/app';

function mapStateToProps(state) {
  console.log('state.expenses',state.expenses)
  return {
    user: state.user,
    expenses: state.expenses
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Container = connect(mapStateToProps, mapDispachToProps)(App)

export default Container;
