import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryStack,VictoryBar } from 'victory';


export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('progressBar props',this.props);
    // let testExpenses = JSON.parse(localStorage.getItem("expenses"));
    const testExpenses = this.props.expenses
    let filler = ""
    let totalExpense = function reduce(array) {
        let total = 0;
        for (var i = array.length; i--;) {
        total +=  parseInt(array[i].amount);
        }
        return total;
    }
    let totalExp = totalExpense(testExpenses)

    let income = parseInt(this.props.income);

    console.log('income', typeof income)
    console.log('totalExp',totalExp)

    return (
       <div className="progress">
       <VictoryStack horizontal
         height={50}
         padding={25}
         style={{
           data: {width: 22},
           labels: {fontSize: 20}
         }}
       >
         <VictoryBar
           style={{data: {fill: "tomato"}}}
           data={[
             {x: 1, y: totalExp}
           ]}
         />
         <VictoryBar
           style={{data: {fill: "blue"}}}
           data={[
             {x: 1, y: income}
           ]}
         />
       </VictoryStack>
        </div>
    )
  }
}
