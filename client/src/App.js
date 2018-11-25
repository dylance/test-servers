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
        <nav className="navbar navbar-expand-lg navbar-light " >
          {/* <a class="navbar-brand" href="">Mixify</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-left-margin" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active search-button">
                <a className="nav-link navtext" href="">Search<span className="sr-only">(current)</span></a>
              </li> */}
            </ul>
            <a className="text-black" href='http://localhost:8888'> Login to Spotify </a>
            <a className="text-black" href='/login'> Login to Spotify on the server </a>
          </div>
        </nav>
        <h1> Mixify </h1>

        <SearchContainer />
      </div>
    );
  }
}
