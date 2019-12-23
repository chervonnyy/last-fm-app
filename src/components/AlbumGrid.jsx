import React, { Component } from 'react';
import propTypes from 'prop-types';

import AlbumCover from './AlbumCover';

class AlbumGrid extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			albums: null
		};
	}

    getTopAlbums = user => {
		const base = 'http://ws.audioscrobbler.com/2.0/';
		const method = 'user.gettopalbums';
		const limit = 100;
		const period = 'overall';
        const api_key = '7600702bed449a1234d7fe6d22c880a2';
        
        if (!user) {
            this.setState({ error: 'User is not provided' });
            return true;
        }

		fetch(`${base}?method=${method}&user=${user}&period=${period}&limit=${limit}&api_key=${api_key}&format=json`)
		  	.then(res => res.json())
		  	.then(result => {
				if (result.error) {
                    this.setState({ error: result.message });
				} else {
					const albums = result.topalbums.album.filter(album => {
						return album.image[0]['#text'];
					});
					this.setState({ albums });
				}
            })
            .catch(error => { this.setState({ error: error.message })});
    }
    
    render() {
        const { albums, error } = this.state;

        const headers = {
            error: `Error: ${error}`,
            loading: `Albums for ${this.props.username} is loading...`,
            albums: `Here is a list of a ${this.props.username}'s top albums`,
        }

        let header;

        if (albums || error) {
            header = error ? headers.error : headers.albums;
        } else {
            header = headers.loading;
            this.getTopAlbums(this.props.username);
        }

        return(
            <div>
                <h1>{header}</h1>
                <div className='album-grid'>
                    {albums && albums.map((album, index) => 
                        <AlbumCover 
                            cover = {album.image[3]['#text']}
                            title = {album.name}
                            key = {index}
                        />
                    )}
                </div>  
            </div>
        );
    }
}

export default AlbumGrid;

AlbumGrid.propTypes = {
    albums: propTypes.string.isRequired.isRequired
}