import React from 'react';
import { VictoryStack, VictoryBar } from 'victory';

const ProgressBar = props => {
  const testExpenses = props.expenses;
  const totalExpense = function reduce(array) {
    let total = 0;
    for (let i = array.length; i--;) {
      total += parseInt(array[i].amount);
    }
    return total;
  };
  const totalExp = totalExpense(testExpenses);
  const income = parseInt(props.income);

  return (
    <div className="progress">
      <VictoryStack
        horizontal
        height={50}
        padding={25}
        style={{
          data: { width: 22 },
          labels: { fontSize: 20 },
        }}
      >
        <VictoryBar
          style={{ data: { fill: 'tomato' } }}
          data={[
          { x: 1, y: totalExp },
          ]}
        />
        <VictoryBar
          style={{ data: { fill: 'blue' } }}
          data={[
          { x: 1, y: income },
          ]}
        />
      </VictoryStack>
    </div>
    );
};

export default ProgressBar;
