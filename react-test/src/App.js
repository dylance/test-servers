import React, { Component } from 'react';
import './App.css';
import './SearchContainer.css';
import './Search.css';
import './SearchButton.css';
import SearchContainer from './SearchContainer'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light" >
          <a class="navbar-brand" href="">Mixify</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse nav-left-margin" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active search-button">
                <a class="nav-link navtext" href="">Search<span class="sr-only">(current)</span></a>
              </li>
            </ul>
            <a class="text-black" href='http://localhost:8888'> Login to Spotify </a>
          </div>
        </nav>
        {/* <h1> Mixify </h1> */}

        <SearchContainer />
      </div>
    );
  }
}
