import React, { Component } from 'react';
import './App.css';
import SearchResultModel from './models';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
let artistSearch = 'animals';

export default class App extends Component {
  constructor(){
    super();

    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      searchResult: {
        artist: '',
        song: ''
      }
    }
    if (params.access_token){
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
  }

  getSearchResult(){
    SearchResultModel.artist(artistSearch)
    .then((response) => {
      this.setState({
        searchResult: {
          artist: response.item.name,
          song: response.item.album.images[0].url
        }
      })
    })
  }

  // getSearchResult(){
  //   spotifyWebApi.searchTracks('animal')
  //   .then((response) => {
  //     this.setState({
  //       searchResult: {
  //         artist: response.item.name,
  //         song: response.item.album.images[0].url
  //       }
  //     })
  //   })
  // };

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888/">
          <button>Login with Spotify</button>
        </a>
        <div>Search Result: { this.state.searchResult.artist }</div>
        <div>
          {/* <img src={ this.state.SearchResult.image } style={ { width: 100 } } alt=""/> */}
        </div>
        <button onClick={ () => this.getSearchResult() }>
          Search
        </button>
        <div>
          <input type="text" placeholder="Search for a song.." />
          <input type="button" value="Search" />
        </div>
      </div>
    );
  }
}
