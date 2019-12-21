import React from 'react';
import propTypes from 'prop-types';

export default function AlbumCover(props) {
    return(
        <div className="album-container">
            <div className="album-title">
                <span>{props.title}</span>
            </div>
            <div className="album-cover">
                <img src={props.cover} alt={props.title} />
            </div>
        </div>
    )
}

AlbumCover.propTypes = {
    cover: propTypes.string,
    title: propTypes.string
}