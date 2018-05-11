import React, { Component } from 'react';
import './App.css';
import './SearchContainer.css';
import './Search.css';
import SearchContainer from './SearchContainer'

export default class App extends Component {

  render() {
    return (
      <div className="App App-border">
        <h1> Mixify </h1>
        <SearchContainer />
      </div>
    );
  }
}
