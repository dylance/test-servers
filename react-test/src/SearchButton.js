import React, { Component } from 'react';

export default class SearchButton extends Component {

	render() {
		return (
      <div className="App SearchButton-border">
        <h4> Search Button Component </h4>
        <form onSubmit={ this.props.handleSubmit }>
          <input
            type="text"
            placeholder="Enter Song Title.."
            value={ this.props.searchQuery }
            onChange={ this.props.handleChange }
        />
        {
          // this.state.loggedIn &&
          <button onClick={ this.props.getNowPlaying }>
            Search
          </button>
        }
        </form>

     </div>
		)
	}
}
