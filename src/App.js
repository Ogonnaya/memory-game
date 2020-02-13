import React, { Component } from "react";
import Card from "./components/flowerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import flowers from "./flowers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.flowers to the flowers json array
  state = {
    flowers,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.flowers.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.flowers.find((o, i) => {
      if (o.id === id) {
        if (flowers[i].count === 0) {
          flowers[i].count = flowers[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.flowers.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };
  // Map over this.state.flowers and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          Flowery Memories
        </Header>
        {this.state.flowers.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
