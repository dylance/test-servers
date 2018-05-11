import React, { Component } from 'react';

export default class Search extends Component {

	render() {
		return (
      <div className="App Search-border">
        <h3> Search Component </h3>
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Artist: { this.props.artist }
        </div>
        <div>
          Song: { this.props.song}
        </div>
        <div>
          <img src={ this.props.albumImage } style={{ height: 64 }} alt=""/>
        </div>
     </div>
		)
	}
}
