import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


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

  // player id counter
  prevPlayerId = 4;

  // callback to increment or decrement score
  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })

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
          players={this.state.players}
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
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
