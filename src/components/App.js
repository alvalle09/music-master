
import React, { Component } from "react";

class App extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    console.log('event.target.value', event.target.value);
  }

  render() {
    return (
      <div>
        <h2>Music Masters</h2>
        <input 
          onChange={this.updateArtistQuery} 
          placeholder='Search for an Artist' 
        />
        <button>Search</button>        
      </div>
    );
  }
}


export default App;
