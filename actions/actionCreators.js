// what passes through props and you call in react
import axios from 'axios';
import { push } from 'react-router-redux';

export function changeUserInfo(username, email){
  return {
    type: 'CHANGE_USER_INFO',
    username,
    email
  }
}

export function sendLoginData(userObj){
  return function(dispatch) {
    axios.post("http://localhost:3000/login", userObj)
    .then(function(response) {
      dispatch({type: 'SEND_LOGIN_DATA_SUCCESS', payload: userObj})
    })
    .then(function() {
      dispatch(push('/dashboard'))
    })
    .catch(function(err) {
      console.log('error', err)
      dispatch({type: 'SEND_LOGIN_DATA_ERROR', error: err})
    })
  }
}
