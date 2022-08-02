import React from 'react';
import ReactDOM from 'react-dom';

function MissedGoal() {
    return <h1>your grandma can do better, you srsly just missed on an open net</h1>;
}

function MadeGoal() {
    return <h1>WOW its GOAL! I care soo much</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  else{
  return <MissedGoal/>;
  }
}

ReactDOM.render(
  <Goal isGoal={true} />,
  document.getElementById('root')
);
