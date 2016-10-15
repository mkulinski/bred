import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './category_pie'
import TimeChart from './time_chart'
import ProgressBar from './progress_bar'
import Expense from './expense'
import Nav from './nav'
import {Router, Route, Link} from 'react-router'

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props in dash',this.props);
    return (
      <div>
        <h2>{ this.props.user.username }{"'"}s Dashboard</h2>
        <h3 className="expenses">Expenses vs. Income</h3>

        <h3 className="expenses">Recent Expenses Breakdown</h3>
        <div className="flex">
        </div>
      </div>
    )
  }
}

// //original render
// render() {
//   console.log('props in dash',this.props.user);
//   let user = JSON.parse(localStorage.getItem("user")).username;
//   return (
//     <div>
//       <h2>{user} Dashboard</h2>
//       <h3 className="expenses">Expenses vs. Income</h3>
//       <ProgressBar />
//       <h3 className="expenses">Recent Expenses Breakdown</h3>
//       <div className="flex">
//         <Pie />
//         <TimeChart />
//       </div>
//     </div>
//   )
// }
