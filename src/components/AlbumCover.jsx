import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function AlbumCover(props) {

    const url = `albums/${props.title.toLocaleLowerCase().replace(/ /g, '-').replace(/[']/g, '')}`;

    return (
        <Link to={
            { 
                pathname: url, 
                state: { 
                    artist: props.artist, 
                    album: props.title 
                }
            }
        } className="album-container">
            <div className="album-title">
                <span>{props.title.split('(')[0]}</span>
            </div>
            <div className="album-cover">
                <img src={props.cover} alt={props.title} loading="lazy" />
            </div>
        </Link>
    )
}

AlbumCover.propTypes = {
    cover: propTypes.string,
    title: propTypes.string
}