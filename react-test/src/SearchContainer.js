import React, { Component } from 'react';
import Search from './Search'
import SearchButton from './SearchButton'
// import axios from 'axios';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

let artistTest = 'coldplay yellow'

export default class SearchContainer extends Component {
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
    this.getNowPlaying = this.getNowPlaying.bind(this);
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
		// let results;
		// if (this.state.response) {
    //   results = this.state.response.map((item,index) =>
		// 	  <img key={index} src={item.images.fixed_height_small.url} alt="results" />
		// 	)
    // }

		return (
      <div className="App SearchContainer-border">
        <h3>Search Container Component</h3>
        <Search />
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Artist: { this.state.nowPlaying.artist }
        </div>
        <div>
          Song: { this.state.nowPlaying.song}
        </div>
        <div>
          <img src={ this.state.nowPlaying.albumCover } style={{ height: 150 }} alt=""/>
        </div>
        <SearchButton
          getNowPlaying={() => {this.getNowPlaying()}}
        />
      </div>
		)
	}
}
