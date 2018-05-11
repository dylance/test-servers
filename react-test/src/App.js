import React, { Component } from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

let artistTest = 'coldplay yellow'

export default class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: {
        artist: 'Please enter a track',
        song: '',
        albumCover: ''
      }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.searchTracks(artistTest)
      .then((response) => {
        this.setState({
          nowPlaying: {
            artist: response.tracks.items[0].artists[0].name,
            song: response.tracks.items[0].name,
            albumCover: ''
          }
        });
        console.log(response)
      })
  }
  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Artist: { this.state.nowPlaying.artist }
        </div>
        <div>
          Song: { this.state.nowPlaying.song}
        </div>
        <div>
          <img src={this.state.nowPlaying.albumCover} style={{ height: 150 }} alt=""/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
      </div>
    );
  }
}
