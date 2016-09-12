import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import { browserHistory } from 'react-router'
import $ from 'jquery';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault()
    this.props.sendLoginData({username: evt.target.elements[0].value,
                               password: evt.target.elements[1].value});
    // const userName = evt.target.elements[0].value
    // const password = evt.target.elements[1].value
    //
    // const value = {
    //   username: userName,
    //   password: password
    // }
    // let stringData = JSON.stringify({username: userName});

    const path = `/dashboard/`
    browserHistory.push(path)

    // $.ajax({
    //     url : "http://localhost:3000/login",
    //     type: "POST",
    //     data : value,
    //     success: function(data, textStatus, jqXHR)
    //     {
    //       //upon successful login make get reqeust to get user data after login
    //       let username = JSON.parse(localStorage.getItem('user')).username;
    //       $.ajax({
    //           url : "http://localhost:3000/api/user/" +username+ "/expense",
    //           type: "GET",
    //           success: function(data)
    //           {
    //             console.log('data from login',data)
    //             let stringifiedData = JSON.stringify(data)
    //             localStorage.setItem("expenses", stringifiedData);
    //           },
    //           error: function (jqXHR, textStatus, errorThrown)
    //           {
    //             console.log('no bueno');
    //           }
    //       }).then( function() {
    //
    //         const path = `/dashboard/`
    //         browserHistory.push(path)
    //       })
    //     },
    //     error: function (jqXHR, textStatus, errorThrown)
    //     {
    //       console.log('no bueno');
    //     }
    // });


  }

  render() {
    console.log('login props',this.props)
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="username"/> {' '}
          <input type="password" placeholder="password"/>{' '}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}
