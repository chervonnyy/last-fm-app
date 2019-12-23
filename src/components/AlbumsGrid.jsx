import React, { Component } from 'react';
import propTypes from 'prop-types';

import AlbumCover from './AlbumCover';

class AlbumsGrid extends Component {
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
		const limit = 20;
		const period = 'overall';
        const apiKey = '7600702bed449a1234d7fe6d22c880a2';
        
        if (!user) {
            this.setState({ error: 'User is not provided' });
            return true;
        }

		fetch(`${base}?method=${method}&user=${user}&period=${period}&limit=${limit}&api_key=${apiKey}&format=json`)
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
        const username = this.props.username;
    
        const headers = {
            error: `Error: ${error}`,
            loading: `Albums for ${username} is loading...`,
            albums: `Here is a list of a ${username}'s top albums`,
        }

        let header;

        if (albums || error) {
            header = error ? headers.error : headers.albums;
        } else {
            header = headers.loading;
            this.getTopAlbums(username);
        }

        return(
            <div>
                <h2>{header}</h2>
                <div className='album-grid'>
                    {albums && albums.map((album, index) => 
                        <AlbumCover 
                            cover = {album.image[3]['#text']}
                            artist= {album.artist.name}
                            title = {album.name}
                            key = {index}
                        />
                    )}
                </div>  
            </div>
        );
    }
}

export default AlbumsGrid;

AlbumsGrid.propTypes = {
    username: propTypes.string.isRequired
}