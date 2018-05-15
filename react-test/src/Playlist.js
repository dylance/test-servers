import React, { Component } from 'react';

export default class Playlist extends Component {

	render() {

    let playlistItem = this.props.list.map( (item) => {
      return (
        <div>
          <p>
            test: { item.name }
          </p>
        </div>
      )
    })

    return(
      <div className="todos">
        <h4>Playlist Component</h4>
        <div>
          { playlistItem }
        </div>
      </div>
    )
	}
}
