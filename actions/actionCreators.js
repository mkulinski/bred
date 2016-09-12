// what passes through props and you call in react
import axios from 'axios';

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
      return {
        type: 'SEND_LOGIN_DATA_SUCCESS',
        payload: userObj
      }
    })
    .catch(function(err) {
      console.log('error', err)
      return {
        type: 'SEND_LOGIN_DATA_ERROR',
        err
      }
    })
  }
}

// export function sendData(userObj) {
//   $.ajax({
//     type: 'POST',
//     url: 'http://localhost:3000/signup',
//     data: userObj
//   })
//   .done(function(data) {
//     return function(dispatch){
//       dispatch({
//         type: 'SENDDATA_SUCCESS',
//         payload: data
//       });
//     }
//   });
//   }
