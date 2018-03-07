import React, { Component } from 'react';
import CardApp from './CardApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
        <div class="nav-wrapper pink accent-3"><h3 class="white-text">Flash Cards</h3></div>
        <CardApp />
      </div>
    );
  }
}

export default App;
