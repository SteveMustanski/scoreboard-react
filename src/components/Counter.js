import React from 'react';

// destrure props by placing propteries needed in an object passed in rather than props
const Counter = ({index, score, changeScore}) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );

}

export default Counter;