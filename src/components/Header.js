import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

// destructure props by defining what values to pull
// replace "props" with an object delaring the properties you want
const Header = ({ title }) => {
  return (
    <header>
    <Stats />
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}


// add a default for header incase is isn't passed in
Header.defultProps = {
  title: 'Scoreboard'
}

export default Header;