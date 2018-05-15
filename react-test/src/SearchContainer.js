import React, { Component } from 'react';
import Search from './Search'
import SearchButton from './SearchButton'
import Playlist from './Playlist'

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

// let artistTest = 'coldplay yellow'
let array = [];

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
        artist: '',
        // song: '',
        // albumCover: ''
      },
      playlist: []
    }
    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.addSong = this.addSong.bind(this);
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
    // console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  getNowPlaying(e){
    spotifyApi.searchTracks(this.state.searchInput)
      .then((response) => {
        this.setState({
          nowPlaying: {
            // artist: response.tracks.items[0].artists[0].name,
            artist: response.tracks.items.map((data) => {
              return(
                <div className="App Search-border">
                  <div>
                    Artist: { data.artists[0].name }
                  </div>
                  <div>
                    Song: { data.name }
                  </div>
                  <div>
                    <img src={ data.album.images[2].url } style={ { height: 150 } } alt=""/>
                  </div>
                  <button onClick={ () => { this.addSong(data.id) } }>
                    Add
                  </button>
                  <div>
                    Spotify ID: { data.id }
                  </div>
               </div>
              )
            }),
            // song: response.tracks.items[0].name,
            // song: response.tracks.items.map((data) => {
            //   return(
            //     <div className="App Search-border">
            //       <div>
            //         { data.name }
            //       </div>
            //    </div>
            //   )
            // }),
            // albumCover: response.tracks.items[0].album.images[2].url
          }
        });
        console.log(response)
      })
  }

  addSong(data) {
    spotifyApi.getTrack(data)
      .then((response) => {

        array.push(response)
        console.log(array)
      })
  }

	render() {
		return (
      <div className="App">
        {/* <h3>Search Container Component</h3> */}
        <SearchButton
          getNowPlaying={ (e) => { this.getNowPlaying(e) } }
          handleChange={ (e) => { this.handleChange(e) } }
          handleSubmit={ (e) => { this.handleSubmit(e) } }
          searchQuery={ this.state.searchInput }
        />
        <Search
          artist={ this.state.nowPlaying.artist }
          // song={ this.state.nowPlaying.song }
          // albumImage={ this.state.nowPlaying.albumCover }
          addSong={ (e) => { this.addSong(e) } }
        />
        <Playlist list= {array} />
      </div>
		)
	}
}
