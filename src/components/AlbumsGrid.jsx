import React, { Component } from 'react';
import propTypes from 'prop-types';

import AlbumCover from './AlbumCover';
import Preloader from './Preloader/Preloader';

import apiCall from '../assets/scripts/apiCall';

class AlbumsGrid extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
            albums: null,
            isLoaded: false
		};
    }
    
    componentDidMount() {
        const response = async () => await apiCall('User.gettopalbums', this.props.username);
        response().then(response => {
            this.setState({ albums: this.getAlbumsCollection(response), isLoaded: true });
        });

       
    }

    getAlbumsCollection = albums => {
        const albumsCollection = albums.topalbums.album.filter(album => {
            return album.image[0]['#text'];
        }).reduce((acc, album) => {
            const items = acc.filter(item => !Array.isArray(item));
            const collections = acc.filter(item => Array.isArray(item));
            return (items.length === 5) ? [...collections, items] : [...acc, album];
        }, []).filter(item => Array.isArray(item));
        return albumsCollection;
    }

    getClassName = () => {
        const classNames = ['brown', 'orange', 'aqua', 'manuel'];
        const randomIndex = Math.floor(Math.random() * classNames.length);
        return classNames[randomIndex];
    }

    getHeader = username => {
        const { albums, error, isLoaded } = this.state;
        const headers = {
            error: `Error: ${username}`,
            loading: `Albums for ${username} is loading...`,
            albums: `Here is a list of a ${username}'s top albums`,
        }

        if (albums || error) {
            return error ? headers.error : headers.albums;
        } else {
            return headers.loading;
        }
    }
    
    render() {
        const { albums, isLoaded } = this.state;
        const header = this.getHeader(this.props.username);

        return (!isLoaded ?  <Preloader /> :
                <div className='albums parallax'>
                    {albums && albums.map(collection => {
                        const className = this.getClassName();
                        return (
                            <div className="parallax__group parallax__group">
                                <div className={`parallax__layer parallax__layer--back parallax__layer--${className}`}></div>
                                <div className="albums__grid parallax__layer parallax__layer--base">
                                    {collection.map((album, index) => 
                                        <AlbumCover 
                                            cover={album.image[3]['#text']}
                                            artist={album.artist.name}
                                            title={album.name}
                                            key={index}
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    }   
                    )}
                </div>
        );
    }
}

export default AlbumsGrid;

AlbumsGrid.propTypes = {
    username: propTypes.string.isRequired
}