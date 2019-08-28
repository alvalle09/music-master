import React from 'react';

// stateless functional component syntax
const Artist = ({ artist })  => {
    if (!artist) return null;

    const { images, name, followers, genres } = artist;

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img src={images[0] && images[0].url} alt='artist-profile' />
        </div>
    )
}

export default Artist;

