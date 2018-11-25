import React, { Component } from 'react';

export default class Playlist extends Component {

	render() {

    return (
        <div>
          {/* <h4>Playlist Component</h4> */}
          {this.props.list.map((item) => {
            return(
          <p>
            { item.name }
          </p>)
        })
      }
        </div>
      )


	}
}
