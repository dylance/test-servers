import React, { Component } from 'react';
import Search from './Search'
import SearchButton from './SearchButton'

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

// let artistTest = 'coldplay yellow'

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
      searchInput: '',
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

  handleChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  getNowPlaying(e){
    spotifyApi.searchTracks(this.state.searchInput)
      .then((response) => {
        this.setState({
          nowPlaying: {
            artist: response.tracks.items[0].artists[0].name,
            song: response.tracks.items[0].name,
            albumCover: response.tracks.items[0].album.images[2].url
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
        <SearchButton
          getNowPlaying={ (e) => { this.getNowPlaying(e) } }
          handleChange={ (e) => { this.handleChange(e) } }
          handleSubmit={ (e) => { this.handleSubmit(e) } }
          searchQuery={ this.state.searchInput }
        />
        <Search
          artist={ this.state.nowPlaying.artist }
          song={ this.state.nowPlaying.song }
          albumImage={ this.state.nowPlaying.albumCover }
        />
      </div>
		)
	}
}
