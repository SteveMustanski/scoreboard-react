import React from 'react';
import PropTypes from 'prop-types';

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

// validate that the correct number and type of props is valid
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;