import React, { Component } from 'react';
import propTypes from 'prop-types';

import AlbumCover from './AlbumCover';

class AlbumGrid extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
		  	isLoaded: false,
			albums: []
		};
	}

    getTopAlbums = user => {
		const base = 'http://ws.audioscrobbler.com/2.0/';
		const method = 'user.gettopalbums';
		const limit = 100;
		const period = 'overall';
		const api_key = '7600702bed449a1234d7fe6d22c880a2';

		fetch(`${base}?method=${method}&user=${user}&period=${period}&limit=${limit}&api_key=${api_key}&format=json`)
		  	.then(res => res.json())
		  	.then(result => {
				if (result.error) {
                    this.setState({ isLoaded: true, error: result.error });
				} else {
					const albums = result.topalbums.album.filter(album => {
						return album.image[3]['#text'];
					});
					this.setState({ isLoaded: true, albums });
				}
            }, error => { this.setState({ isLoaded: true, error })}
        );
    }
    
    render() {

        this.getTopAlbums(this.props.username);

        const { albums, isLoaded, error } = this.state;

        return(
            <div className='album-grid'>
                {error && <h2>Error: {error.message}</h2>}
                {!isLoaded && <h2>Loading...</h2>}
                {albums && 
                    albums.map((album, index) => 
                        <AlbumCover 
                            cover = {album.image[3]['#text']}
                            title = {album.name}
                            key = {index}
                        />
                    )
                }
            </div>
        );
    }
}

export default AlbumGrid;

AlbumGrid.propTypes = {
    albums: propTypes.arrayOf(propTypes.object).isRequired,
    size: propTypes.number.isRequired
}