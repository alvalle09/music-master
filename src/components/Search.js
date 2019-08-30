import React, { Component } from "react";

class Search extends Component {
  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}
