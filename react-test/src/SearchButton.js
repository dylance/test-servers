import React, { Component } from 'react';

export default class SearchButton extends Component {

	render() {
		return (
      <div className="App SearchButton-border">
        <p> Search Button Component </p>
        {
          // this.state.loggedIn &&
          <button onClick={ this.props.getNowPlaying }>
            Check Now Playing
          </button>
        }
     </div>
		)
	}
}
