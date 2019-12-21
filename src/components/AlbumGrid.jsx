import React from 'react';
import propTypes from 'prop-types';

import AlbumCover from './AlbumCover';

export default function AlbumGrid(props) {
    return(
        <div className="album-grid">
            {
                props.albums.map((album, index) => 
                    <AlbumCover 
                        cover = {album.image[props.size]['#text']}
                        title = {album.name}
                        key = {index}
                    />)
            }
        </div>
    )
}

AlbumGrid.propTypes = {
    albums: propTypes.arrayOf(propTypes.object).isRequired,
    size: propTypes.number.isRequired
}