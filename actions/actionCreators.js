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

function getUserExpenses(username) {
  return dispatch => {
    axios.get(`http://localhost:3000/api/user/${username}/expense`)
    .then(response => {
      console.log('user- ', username,'expeses = ', response);
      dispatch({ type: 'SET_USER_EXPENSES', payload: response.data });
    })
    .catch( err => {
      console.log('err', err);
    })
  }
}

export function sendLoginData(userObj){
  return dispatch => {
    axios.post('http://localhost:3000/login', userObj)
    .then(response => {
      console.log('userObj that I get back = ', response.data)
      dispatch({type: 'SEND_LOGIN_DATA_SUCCESS', payload: response.data})
      dispatch(getUserExpenses(userObj.username));
    })
    .then(() => {
      dispatch(push('/dashboard'))
    })
    .catch( err => {
      console.log('hit the error in sendLoginData')
      console.log('err', err)
      dispatch({type: 'SEND_LOGIN_DATA_ERROR', error: err})
    })
  }
}
