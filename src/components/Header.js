import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

// destructure props by defining what values to pull
// replace "props" with an object delaring the properties you want
const Header = ({ players, title }) => {
  return (
    <header>
    <Stats players={players}/>
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

export default Header;