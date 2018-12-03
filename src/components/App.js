import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';


class App extends Component {
  state = {
    players: [
      {
        name: "Steve",
        score: 0,
        id: 1
      },
      {
        name: "Pepper",
        score: 0,
        id: 2
      },
      {
        name: "John",
        score: 0,
        id: 3
      },
      {
        name: "Anna",
        score: 0,
        id: 4
      }
    ]
  };

  // callback to increment or decrement score
  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  // callback to remove player from state
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
