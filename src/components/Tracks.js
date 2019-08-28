import React, { Component } from "react";

class Tracks extends Component {

    playAudio = previewURL => {
        const audio = new Audio(previewURL);
    }


  render() {
    // destructure the props object into tracks object
    const { tracks } = this.props;

    return (
      <div>
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;

          return (
            <div key={id}>
              <img src={album.images[0].url} alt="track-image" />
              <p>{name}</p>

            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
