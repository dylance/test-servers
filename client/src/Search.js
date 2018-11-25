import React, { Component } from 'react';

export default class Search extends Component {

	render() {
		return (
      <div className="App">
        {/* <h4> Search Component </h4> */}

          { this.props.artist }

        {/* <div>
          Song: { this.props.song}
        </div>
        <div>
          <img src={ this.props.albumImage } style={{ height: 64 }} alt=""/>
        </div> */}
     </div>
		)
	}
}
