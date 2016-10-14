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
  return dispatch => {
    axios.post('http://localhost:3000/login', userObj)
    .then(response => {
      console.log('hit the send login data')
      dispatch({type: 'SEND_LOGIN_DATA_SUCCESS', payload: userObj})
    })
    .then(() => {
      console.log('hit the send to dashboard')
      dispatch(push('/dashboard'))
    })
    .catch( err => {
      console.log('hit the error in sendLoginData')
      console.log('err', err)
      dispatch({type: 'SEND_LOGIN_DATA_ERROR', error: err})
    })
  }
}
